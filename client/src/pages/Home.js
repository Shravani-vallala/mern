import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '../styles/Chatbot.css';
import Buffelo from '../uploads/images/buffelo.jpeg';
import Cow from '../uploads/images/cow.jpg';
import Wheat from '../uploads/images/wheet.jpg';

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// ✅ Message component for Markdown & Code rendering
function Message({ text }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={oneDark}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        }
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

// Sample product data with individual images
const sampleProducts = [
  { name: 'Buffelo', price: 8000, image: Buffelo },
  { name: 'Cow', price: 15000, image: Cow },
  { name: 'Wheat Seeds', price: 200, image: Wheat },
];

function Home() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi 👋 How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  // ✅ Send message to API
  const sendMessage = async () => {
    if (!input) return;

    // Add user message
    setMessages([...messages, { sender: "user", text: input }]);

    try {
      const res = await fetch("http://localhost:8000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      console.log(data);

      setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
    } catch (error) {
      console.error(error);
    }

    setInput("");
  };

  return (
    <div>
      <Container>
        <h2 className="my-4">Popular Products</h2>
        <Row>
          {sampleProducts.map((product, index) => (
            <Col key={index} md={4}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Floating Chatbot Icon */}
      <div className="chat-icon" onClick={() => setShowChat(!showChat)}>
        💬
      </div>

      {/* Chatbot Window */}
      {showChat && (
        <div className="chat-window">
          <div className="chat-header">Chatbot</div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  marginBottom: "10px"
                }}
              >
                <b>{msg.sender === "user" ? "You" : "Bot"}:</b>
                <div className="message-bubble">
                  <Message text={msg.text} />
                </div>
              </div>
            ))}
          </div>

          {/* Input + Button */}
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button className="sendbutton" onClick={sendMessage}>
              Send
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
