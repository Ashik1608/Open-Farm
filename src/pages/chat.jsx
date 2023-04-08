import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const socket = io("http://localhost:3000");

    socket.on("message", (data) => {
      setMessages((messages) => [...messages, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    const socket = io("http://localhost:3000");

    const data = {
      username,
      message,
    };

    socket.emit("message", data);

    setMessage("");
    socket.disconnect();
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <span>{msg.username}: </span>
            <span>{msg.message}</span>
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
