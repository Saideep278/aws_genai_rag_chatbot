import React, { useState } from "react";
import { sendTextQuery, sendAudioFileToWhisper } from "./api/rasa";
import "./App.css";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

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
      // Step 1: Call Whisper backend to transcribe audio
      const whisperData = await sendAudioFileToWhisper(file);
      const transcription = whisperData.transcription || whisperData.text;

      if (transcription) {
        // Show transcription as user message
        setMessages((prev) => [...prev, { text: transcription, sender: "user" }]);

        // Step 2: Send transcription to Rasa
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
    alert("Recording feature not implemented yet!");
    // You can add MediaRecorder/Web Audio API here later
  };

  return (
    <div className="chat-container">
      <h1>🧠 RAG Voice Chatbot</h1>
      <div className="chat-box">
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
        />
        <button onClick={handleSendText}>Send</button>
      </div>
      <div className="audio-buttons">
        <button onClick={handleStartRecording}>Start Recording</button>
        <input
          type="file"
          accept="audio/*"
          onChange={handleFileUpload}
          className="file-input"
        />
      </div>
    </div>
  );
}

