export default function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((msg, idx) => (
        <div
          key={idx}
          className={`message ${msg.from === 'user' ? 'user' : 'bot'}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}

