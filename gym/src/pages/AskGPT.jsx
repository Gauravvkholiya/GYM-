import React, { useState } from "react";
import Navbar from "../components/Navbar";

function AskGPT() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", // Valid model
          messages: [
            {
              role: "system",
              content: "You are a knowledgeable gym and fitness assistant. Provide helpful information about exercises, machines, techniques, and safety precautions."
            },
            {
              role: "user",
              content: question
            }
          ],
          temperature: 0.7,
          max_tokens: 500
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Extract text from Chat Completions API format
      const resText = data.choices[0]?.message?.content || "No response received.";
      
      setAnswer(resText);
    } catch (error) {
      console.error("Error:", error);
      setAnswer(`Error: ${error.message || "Something went wrong. Please try again."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-amber-100 px-6 py-12 md:px-20 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold mb-6 text-center drop-shadow-lg">
          Ask About Gym
        </h1>
        <p className="text-amber-300 text-center mb-10 drop-shadow-md max-w-2xl">
          Ask any question about exercises, machines, or precautions. Powered by AI.
        </p>

        <form
          className="w-full max-w-3xl flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <textarea
            rows="3"
            placeholder="Type your question here... (e.g., How do I properly use a bench press?)"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-amber-100 placeholder-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
          />
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-gray-900 font-bold py-3 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading || !question.trim()}
          >
            {loading ? "Getting Answer..." : "Ask GPT"}
          </button>
        </form>

        {answer && (
          <div className="mt-8 w-full max-w-3xl bg-gray-800 rounded-lg p-6 shadow-lg border-l-8 border-amber-500">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Answer:</h2>
            <p className="text-gray-300 whitespace-pre-wrap">{answer}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default AskGPT;
