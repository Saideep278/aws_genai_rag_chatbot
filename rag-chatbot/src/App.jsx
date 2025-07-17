import React, { useState, useRef, useEffect } from "react";
import { sendTextQuery, sendAudioFileToWhisper } from "./api/rasa";
import "./App.css";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const chatBoxRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendText = async () => {
    if (!input.trim()) return;
    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    try {
      const res = await sendTextQuery(input);
      res.forEach((msg) => {
        if (msg.text) {
          setMessages((prev) => [...prev, { text: msg.text, sender: "bot" }]);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setMessages((prev) => [...prev, { text: "[Audio file uploaded]", sender: "user" }]);

    try {
      const whisperData = await sendAudioFileToWhisper(file);
      const transcription = whisperData.transcribed_text || whisperData.text;

      if (transcription) {
        setMessages((prev) => [...prev, { text: transcription, sender: "user" }]);

        const rasaResponse = await sendTextQuery(transcription);
        rasaResponse.forEach((msg) => {
          if (msg.text) {
            setMessages((prev) => [...prev, { text: msg.text, sender: "bot" }]);
          }
        });
      } else {
        setMessages((prev) => [...prev, { text: "Could not transcribe audio.", sender: "bot" }]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [...prev, { text: "Error processing audio.", sender: "bot" }]);
    }
  };

  const handleStartRecording = () => {
    alert("🎙️ Voice recording is not implemented yet!");
  };

  return (
    <>
      <div className="background-image left"></div>
      <div className="background-image right"></div>

      <div className="chat-toggle" onClick={() => setIsChatOpen(!isChatOpen)}>
        💬
      </div>

      {isChatOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <h3>🧠 RAG Voice Chatbot</h3>
            <button onClick={() => setIsChatOpen(false)}>×</button>
          </div>

          <div className="chat-box" ref={chatBoxRef}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.sender === "user" ? "user-msg" : "bot-msg"}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="input-box">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              onKeyDown={(e) => e.key === "Enter" && handleSendText()}
            />
            <button onClick={handleSendText}>Send</button>
          </div>

          <div className="audio-buttons">
            <button onClick={handleStartRecording}>🎙️ Start Recording</button>
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileUpload}
              className="file-input"
            />
          </div>
        </div>
      )}
    </>
  );
}
