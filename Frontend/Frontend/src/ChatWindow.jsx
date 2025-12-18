import React, { useState, useEffect, useRef, createElement } from 'react';
import './ChatWindow.css'; // For styling
import axios from 'axios';

const TypewriterMessage = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      // Add one character at a time
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;

      // Stop when we reach the end
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 30); // Adjust speed (30ms) here

    // Cleanup function to stop typing if component unmounts
    return () => clearInterval(intervalId);
  }, [text]);

  return <span>{displayedText}</span>;
};


const ChatWindow = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [input, setinput] = useState('');
    const messagesEndRef = useRef(null);
  
   
    
  
    const sendP = async()=>{
     
        const inp =document.getElementById('inp');
        const userMessage = { sender: 'user', text: inp.value};
        setMessages((prevMessages) => [...prevMessages, userMessage]);
       
        
        try{
        
          const send = await axios.post('http://3.137.207.118:3000/api/chatbot',{message:inp.value})
            const {data} = send.data;      
            const aiMessage = { sender: 'ai', text: data };
            setMessages((prevMessages) => [...prevMessages, aiMessage]);

            
            
        }
        catch(err){
            console.error('Error fetching AI response:', err);
            const errorMessage = { sender: 'ai', text: 'Sorry, I am having trouble connecting right now.' };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
          }
        


        }
        

        const handleKeyPress = (e) => {
            console.log(e.key)
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          };


  return (
    <>
        <div className="chat-window">
            <div className="chat-header">
                <h3>AI Assistant</h3>
                <button onClick={onClose} className="close-button">✖</button>
            </div>
            <div className="chat-messages" id='chat'>
            {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.sender === 'ai' ? (
                            // Use the Typewriter component for AI
                            <TypewriterMessage text={msg.text} />
                        ) : (
                            // Display text normally for User
                            msg.text
                        )}
                    </div>
                ))}

            </div>
            <div className="chat-input-area">
                <input id='inp' type="text" placeholder="Type your message..."/>
                <button onClick={sendP} onKeyDown={handleKeyPress}>Send</button>
            </div>
        </div>
    </>
  );
};

export default ChatWindow;