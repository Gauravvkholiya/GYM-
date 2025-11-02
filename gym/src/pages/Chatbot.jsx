import React, { useState, useRef, useEffect } from "react";
import { BsChatDotsFill, BsX } from "react-icons/bs";

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! Need help with your workout? Ask me anything!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const getResponse = (userMessage) => {
    const msg = userMessage.toLowerCase().trim();

    if (/^(hi|hello|hey)/.test(msg)) {
      return "Hey there! How can I help with your fitness goals today?";
    }
    if (msg.includes("bench press")) {
      return "Bench press tips:\n• Keep feet flat on floor\n• Grip slightly wider than shoulders\n• Lower to mid-chest\n• Push up explosively";
    }
    if (msg.includes("squat")) {
      return "Squat form:\n• Feet shoulder-width\n• Chest up, core tight\n• Go parallel or below\n• Push through heels";
    }
    if (msg.includes("help")) {
      return "I can help with:\n• Exercise form\n• Workout tips\n• Equipment guidance\n• Safety precautions\n\nJust ask!";
    }
    return "Great question! For detailed help with that, try asking about specific exercises, form, or safety tips.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);

    setTimeout(() => {
      const botResponse = { text: getResponse(input), sender: "bot" };
      setMessages(prev => [...prev, botResponse]);
    }, 500);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button - Always Visible */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-amber-600 hover:bg-amber-700 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50 flex items-center gap-2"
          aria-label="Open chat"
        >
          <BsChatDotsFill size={24} />
          <span className="font-semibold">Chat</span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-gray-800 rounded-lg shadow-2xl flex flex-col z-50 border border-amber-600">
          {/* Header */}
          <div className="bg-amber-600 text-gray-900 p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <BsChatDotsFill size={20} />
              <h3 className="font-bold">Gym Assistant</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-amber-700 p-1 rounded transition"
              aria-label="Close chat"
            >
              <BsX size={24} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-900">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] px-3 py-2 rounded-lg text-sm ${
                    msg.sender === "user"
                      ? "bg-amber-600 text-gray-900"
                      : "bg-gray-700 text-amber-100"
                  }`}
                >
                  <p className="whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-gray-700 bg-gray-800 rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about exercises..."
                className="flex-1 px-3 py-2 rounded-lg bg-gray-700 text-amber-100 text-sm placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-gray-900 font-semibold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatWidget;
