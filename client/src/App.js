// import React, { useState } from 'react';
// import './App.css';
// import { FaArrowUp   } from 'react-icons/fa';

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!userInput.trim()) return;

//     // Send user input to server
//     const response = await fetch('/get_response', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({ user_input: userInput }),
//     });

//     const data = await response.json();

//     // Update chat history with user input and bot response
//     setMessages([...messages, { class: 'user-message', content: userInput }, { class: 'bot-message', content: data.message }]);

//     // Clear user input field
//     setUserInput('');
//   };

//   return (
//     <div className="container">
//       <h1>Chatbot</h1>
//       <div className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.class}`}>{message.content}</div>
//         ))}
//       </div>
//       <div className="input-container">
//         <form onSubmit={handleSubmit} id="user-form">
//           <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Type your message here..." />
//           <button type="submit"><FaArrowUp /></button>
//         </form>
//       </div>
//       <div class="disclaimer">Chat-Bot can make mistakes. Consider checking important information.</div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';
// import { FaArrowUp } from 'react-icons/fa'; // Import the Arrow Up icon from React Icons

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const chatBoxRef = useRef(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!userInput.trim()) return;

//     // Send user input to server
//     const response = await fetch('/get_response', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({ user_input: userInput }),
//     });

//     const data = await response.json();

//     // Update chat history with user input and bot response
//     setMessages([...messages, { class: 'user-message', content: userInput }, { class: 'bot-message', content: data.message }]);

//     // Clear user input field
//     setUserInput('');
//   };

//   useEffect(() => {
//     // Smooth scroll chat box to bottom when messages change
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTo({
//         top: chatBoxRef.current.scrollHeight,
//         behavior: 'smooth'  // Add smooth behavior
//       });
//     }
//   }, [messages]);

//   return (
//     <div className="container">
//       <h1>Chatbot</h1>
//       <div ref={chatBoxRef} className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message ${message.class}`}>{message.content}</div>
//         ))}
//       </div>
//       <div className="input-container">
//         <form onSubmit={handleSubmit} id="user-form">
//           <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Type your message here..." />
//           <button type="submit"><FaArrowUp /></button>
//         </form>
//       </div>
//       <div className="disclaimer">Chat-Bot can make mistakes. Consider checking important information.</div>
//     </div>
//   );
// }

/// App.jsx

// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';
// import { FaArrowUp } from 'react-icons/fa'; // Import the Arrow Up icon from React Icons

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const chatBoxRef = useRef(null);
//   const [showChatbot, setShowChatbot] = useState(false); // State to control the visibility of the chatbot

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!userInput.trim()) return;

//     // Send user input to server
//     const response = await fetch('/get_response', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({ user_input: userInput }),
//     });

//     const data = await response.json();

//     // Update chat history with user input and bot response
//     setMessages([...messages, { class: 'user-message', content: userInput }, { class: 'bot-message', content: data.message }]);

//     // Clear user input field
//     setUserInput('');
//   };

//   useEffect(() => {
//     // Smooth scroll chat box to bottom when messages change
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTo({
//         top: chatBoxRef.current.scrollHeight,
//         behavior: 'smooth'  // Add smooth behavior
//       });
//     }
//   }, [messages]);

//   useEffect(() => {
//     // Set background color to #3369FF for 2 seconds on page load
//     const timer = setTimeout(() => {
//       setShowChatbot(true);
//     }, 2000);

//     return () => clearTimeout(timer); // Clear timeout on component unmount
//   }, []);

//   return (
//     <div>
//       <div className="background" style={{ backgroundColor: showChatbot ? '' : '#3369FF' }}></div>
//       {!showChatbot ? (
//         <div style={{ textAlign: 'center', marginTop: '100px' }}>
//         <img src="/logochat.png" alt="Chat Logo" style={{width :'200px'}}/>
//         <div style={{fontSize : "80px"}}>👋</div>
//         <h1 style={{ color: 'black' }}>
//           Welcome to <span style={{ color: '#3369FF' }}>Chaty<span style={{ color: '#3369FF' }}>.ai</span></span>
//         </h1>
//         <p style={{ color: 'gray', fontSize: '13px' }}>
//           Start chatting with Nots AI now.<br />You can ask me anything
//         </p>

//       </div>

//       ) : (
//         <div className="container">
//           <h1>Chatbot</h1>
//           <div ref={chatBoxRef} className="chat-box">
//             {messages.map((message, index) => (
//               <div key={index} className={`message ${message.class}`}>{message.content}</div>
//             ))}
//           </div>
//           <div className="input-container">
//             <form onSubmit={handleSubmit} id="user-form">
//               <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Type your message here..." />
//               <button type="submit"><FaArrowUp /></button>
//             </form>
//           </div>
//           <div className="disclaimer">Chat-Bot can make mistakes. Consider checking important information.</div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect, useRef } from 'react';
// import './App.css';
// import { FaArrowUp,FaRobot  } from 'react-icons/fa'; // Import the Arrow Up icon from React Icons

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState('');
//   const chatBoxRef = useRef(null);
//   const [showChatbot, setShowChatbot] = useState(false); // State to control the visibility of the chatbot

//   const handleStartChat = () => {
//     setShowChatbot(true); // Show the chatbot interface when the "Start Chat" button is clicked
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!userInput.trim()) return;

//     // Send user input to server
//     const response = await fetch('/get_response', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: new URLSearchParams({ user_input: userInput }),
//     });

//     const data = await response.json();

//     // Update chat history with user input and bot response
//     setMessages([...messages, { class: 'user-message', content: userInput }, { class: 'bot-message', content: data.message }]);

//     // Clear user input field
//     setUserInput('');
//   };

//   useEffect(() => {
//     // Smooth scroll chat box to bottom when messages change
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTo({
//         top: chatBoxRef.current.scrollHeight,
//         behavior: 'smooth'  // Add smooth behavior
//       });
//     }
//   }, [messages]);

//   return (
//     <div>
//       {!showChatbot ? (
//         <div   className='welcomeScreen' >
//           <div style={{ textAlign: 'center'}}>
//             <img src="/logochat.png" alt="Chat Logo" style={{ width: '200px' }} />
//             <div style={{ fontSize: '80px' }}>👋</div>
//             <h1 style={{ color: 'black' }}>
//               Welcome to <span style={{ color: '#3369FF' }}>Chaty<span style={{ color: '#3369FF' }}>.ai</span></span>
//             </h1>
//             <p style={{ color: 'gray', fontSize: '13px' }}>
//               Start chatting with Nots AI now.<br />You can ask me anything
//             </p>
//             <button onClick={handleStartChat} style={{margin : '50px auto', width :"300px",padding:"10px 40px"}}>Start Chat</button>
//           </div>
//         </div>
//       ) : (
//         <div className="container">
//           <h1>Chaty</h1>
//           <div ref={chatBoxRef} className="chat-box">
//           {messages.map((message, index) => (
//             <div key={index} className={`message-container ${message.class}`}>
//               <div className="message">{message.content}</div>
//               <div className="robot-icon-container">
//                 <FaRobot className='robot-icon' />
//               </div>
//             </div>
//           ))}
//           </div>
//           <div className="input-container">
//             <form onSubmit={handleSubmit} id="user-form">
//               <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Type your message here..." />
//               <button type="submit"><FaArrowUp /></button>
//             </form>
//           </div>
//           <div className="disclaimer">Chat-Bot can make mistakes. Consider checking important information.</div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect, useRef } from "react";
// import "./App.css";
// import WelcomeScreen from "./WelcomeScreen";
// import ChatInterface from "./ChatInterface";

// function App() {
//   const [messages, setMessages] = useState([]);
//   const [userInput, setUserInput] = useState("");
//   const chatBoxRef = useRef(null);
//   const [showChatbot, setShowChatbot] = useState(false); // State to control the visibility of the chatbot

//   const handleStartChat = () => {
//     setShowChatbot(true); // Show the chatbot interface when the "Start Chat" button is clicked
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!userInput.trim()) return;

//     // Send user input to server
//     const response = await fetch("/get_response", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams({ user_input: userInput }),
//     });

//     const data = await response.json();

//     // Update chat history with user input and bot response
//     setMessages([
//       ...messages,
//       { class: "user-message", content: userInput },
//       { class: "bot-message", content: data.message },
//     ]);

//     // Clear user input field
//     setUserInput("");
//   };

//   useEffect(() => {
//     // Smooth scroll chat box to bottom when messages change
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTo({
//         top: chatBoxRef.current.scrollHeight,
//         behavior: "smooth", // Add smooth behavior
//       });
//     }
//   }, [messages]);




//   return (
//     <div>
//       {!showChatbot ? (
//         <WelcomeScreen handleStartChat={handleStartChat} />
//       ) : (
//         <ChatInterface
//           messages={messages}
//           chatBoxRef={chatBoxRef}
//           userInput={userInput}
//           handleSubmit={handleSubmit}
//           setUserInput={setUserInput}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import WelcomeScreen from "./WelcomeScreen";
import ChatInterface from "./ChatInterface";

function App() {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const chatBoxRef = useRef(null);
  const [showChatbot, setShowChatbot] = useState(false); // State to control the visibility of the chatbot
  const [showOverlay, setShowOverlay] = useState(true); // State to control the visibility of the overlay
  
  const handleStartChat = () => {
    setShowChatbot(true); // Show the chatbot interface when the "Start Chat" button is clicked
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userInput.trim()) return;

    // Send user input to server
    const response = await fetch("/get_response", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ user_input: userInput }),
    });

    const data = await response.json();

    // Update chat history with user input and bot response
    setMessages([
      ...messages,
      { class: "user-message", content: userInput },
      { class: "bot-message", content: data.message },
    ]);

    // Clear user input field
    setUserInput("");
  };

  useEffect(() => {
    // Smooth scroll chat box to bottom when messages change
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth", // Add smooth behavior
      });
    }
  }, [messages]);

  useEffect(() => {
    // Show the overlay for 2 seconds before showing the WelcomeScreen
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <div>
      {showOverlay && (
        <div className="overlay">
          <img src="/logochat.png" alt="Logo" className="logo" /> {/* Reference the image from the public folder */}
        </div>
      )}
      {!showChatbot && !showOverlay && (
        <WelcomeScreen handleStartChat={handleStartChat} />
      )}
      {showChatbot && (
        <ChatInterface
          messages={messages}
          chatBoxRef={chatBoxRef}
          userInput={userInput}
          handleSubmit={handleSubmit}
          setUserInput={setUserInput}
        />
      )}
    </div>
  );
}

export default App;
