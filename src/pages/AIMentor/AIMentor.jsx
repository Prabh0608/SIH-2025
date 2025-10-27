import React, { useState } from "react";
import "./AIMentor.scss";

const AIMentor = () => {
    const [messages, setMessages] = useState([
        { from: "bot", text: "Hi there! I'm your AI Mentor. How can I help you today?" },
    ]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;
        const newMsg = { from: "user", text: input };
        setMessages([...messages, newMsg]);
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { from: "bot", text: "That’s a great question! Let’s work through it together." },
            ]);
        }, 800);
        setInput("");
    };

    return (
        <div className="mentor-page">
            <header>
                <a href="/" className="back-btn">← Back</a>
                <h1>AI Mentor Support</h1>
                <p>Ask questions and get AI-guided advice</p>
            </header>

            <main className="container">
                <div className="chat-window">
                    {messages.map((m, i) => (
                        <div key={i} className={`message ${m.from}`}>
                            <p>{m.text}</p>
                        </div>
                    ))}
                </div>

                <div className="input-bar">
                    <input
                        type="text"
                        placeholder="Ask your mentor..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                    <button onClick={handleSend}>Send</button>
                </div>
            </main>
        </div>
    );
};

export default AIMentor;
