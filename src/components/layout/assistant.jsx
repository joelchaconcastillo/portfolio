import React, { useState, useEffect } from "react";

const API_URL = "https://fastapi-example-88qq.onrender.com/ask"; 

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);
  const [userId, setUserId] = useState(null);
  const [chatHistory, setChatHistory] = useState([
    {
      sender: "assistant",
      text: "Hello! How can I help you learn more about Joel's work and experience?",
    },
  ]);

  // Generate or retrieve persistent user_id
  useEffect(() => {
    let storedId = localStorage.getItem("assistant_user_id");
    if (!storedId) {
      storedId = crypto.randomUUID(); // Generate a new random UUID
      localStorage.setItem("assistant_user_id", storedId);
    }
    setUserId(storedId);
  }, []);

  // Progressive typing animation for assistant messages
  const simulateTyping = (fullText) => {
    setTyping(true);
    let index = 0;
    const typingInterval = setInterval(() => {
      setChatHistory((prev) => {
        const lastMessage = prev[prev.length - 1];
        // progressively reveal the text
        const newHistory = [...prev];
        newHistory[newHistory.length - 1] = {
          ...lastMessage,
          text: fullText.slice(0, index),
        };
        return newHistory;
      });
      index++;
      if (index > fullText.length) {
        clearInterval(typingInterval);
        setTyping(false);
      }
    }, 25); // speed of typing (lower = faster)
  };

  // Send message to FastAPI backend
  const handleSend = async () => {
    if (!message.trim()) return;

    const userMessage = message.trim();
    setChatHistory((prev) => [...prev, { sender: "user", text: userMessage }]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_id: userId || "anonymous",
          question: userMessage,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Error from API");
      }

      const data = await response.json();
      const answerText = data.answer || "No answer returned.";

      // Add placeholder for assistant message before typing starts
      setChatHistory((prev) => [...prev, { sender: "assistant", text: "" }]);

      // Animate the assistant typing
      simulateTyping(answerText);
    } catch (err) {
      console.error("Error calling API:", err);
      setChatHistory((prev) => [
        ...prev,
        {
          sender: "assistant",
          text: "⚠️ Sorry, there was a problem connecting to the assistant server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end sm:bottom-8 sm:right-8 z-50">
      {/* Floating Button */}
      <button
        className="rounded-full bg-primary p-3 sm:p-4 text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-110"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="material-symbols-outlined text-3xl sm:text-4xl">
          chat_bubble
        </span>
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="mt-2 w-[90vw] max-w-[360px] h-[70vh] sm:w-[360px] sm:h-[500px] flex flex-col rounded-xl bg-background-light shadow-2xl overflow-hidden">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-gray-300 p-3 sm:p-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="size-6 text-primary">
                <svg
                  fill="none"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
                    fill="currentColor"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-text-dark">
                Generative Assistant
              </h3>
            </div>
            <button
              className="text-text-dark hover:text-text-light"
              onClick={() => setIsOpen(false)}
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </header>

          {/* Chat Body */}
          <main className="flex-1 overflow-y-auto p-2 sm:p-4 bg-background-light flex flex-col">
            {/* Status */}
            {(loading || typing) && (
              <div className="mb-2 text-xs text-gray-500 animate-pulse">
                💭 {typing ? "Assistant is answering..." : "Thinking..."}
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 flex flex-col gap-3 sm:gap-4 overflow-y-auto mb-2">
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start gap-2 sm:gap-3 ${
                    msg.sender === "assistant" ? "" : "justify-end"
                  }`}
                >
                  {msg.sender === "assistant" && (
                    <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary text-base sm:text-lg">
                        smart_toy
                      </span>
                    </div>
                  )}
                  <div
                    className={`flex-1 rounded-lg p-2 sm:p-3 text-xs sm:text-sm ${
                      msg.sender === "assistant"
                        ? "rounded-tl-none bg-background-dark text-white"
                        : "rounded-tr-none bg-primary text-white text-right"
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                  {msg.sender === "user" && (
                    <div className="size-8 rounded-full bg-primary flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-base sm:text-lg">
                        person
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex gap-2 mt-auto">
              <input
                type="text"
                className="flex-1 rounded-lg border border-gray-300 p-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                disabled={loading || typing}
              />
              <button
                className="bg-primary text-white rounded-lg px-4 py-2 text-sm sm:text-base hover:bg-primary/90 transition disabled:opacity-50"
                onClick={handleSend}
                disabled={loading || typing}
              >
                Send
              </button>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Assistant;
