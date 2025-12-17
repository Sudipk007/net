import React from 'react';
import './ChatIcon.css'; // For styling
import ChatWindow from './ChatWindow';
import { useState } from 'react';

function ChatIcon() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
 
 
  return (
    <>
      <div className="chat-icon" onClick={toggleChat}>
        💬
        
      </div>
      {isChatOpen && <ChatWindow onClose={toggleChat}/>}
    </>
  );
};

export default ChatIcon;