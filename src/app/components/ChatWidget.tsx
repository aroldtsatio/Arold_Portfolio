import { useEffect, useRef, useState } from "react";
import "./ChatWidget.css";

type ChatMessage = {
  role: "user" | "bot";
  text: string;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([
    {
      role: "bot",
      text: "Hi! I'm Arold's AI assistant. Ask me about my skills, projects, and experience.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat, loading]);

  const sendMessage = async (customMessage?: string) => {
    const finalMessage = (customMessage || message).trim();

    if (!finalMessage || loading) return;

    const updatedChat: ChatMessage[] = [
      ...chat,
      { role: "user", text: finalMessage },
    ];

    setChat(updatedChat);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: finalMessage }),
      });

      const data = await response.json();

      setChat([
        ...updatedChat,
        {
          role: "bot",
          text: (data.reply || "Sorry, I could not generate a reply.").replace(/\*\*/g, ""),
        },
      ]);
    } catch (error) {
      setChat([
        ...updatedChat,
        {
          role: "bot",
          text: "Something went wrong while contacting the server.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "×" : "AI"}
      </button>

      {isOpen && (
        <div className="chat-widget">
          <div className="chat-widget-header">
            <div>
              <h3>Arold AI Assistant</h3>
              <p>Ask about skills, projects, and experience</p>
            </div>
          </div>

          <div className="chat-widget-messages">
            {chat.map((msg, index) => (
              <div
                key={index}
                className={`chat-widget-message ${
                  msg.role === "user" ? "user" : "bot"
                }`}
              >
                <p>{msg.text}</p>
              </div>
            ))}

            {loading && (
              <div className="chat-widget-message bot">
                <p>Typing...</p>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="chat-widget-suggestions">
            <button onClick={() => sendMessage("What are Arold's main skills?")}>
              Skills
            </button>
            <button onClick={() => sendMessage("Tell me about his projects")}>
              Projects
            </button>
            <button onClick={() => sendMessage("What is his background?")}>
              Background
            </button>
          </div>

          <div className="chat-widget-input">
            <input
              type="text"
              placeholder="Ask something..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button onClick={() => sendMessage()} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}