// import React from 'react';
// import { FaRobot, FaArrowUp } from 'react-icons/fa';
// import './ChatInterface.css';

// const ChatInterface = ({ messages, chatBoxRef, userInput, handleSubmit, setUserInput }) => {
//   return (
//     <div className="container">
//       <h1>Chaty</h1>
//       <div ref={chatBoxRef} className="chat-box">
//         {messages.map((message, index) => (
//           <div key={index} className={`message-container ${message.class}`}>
//             <div className="message">{message.content}</div>
//             <div className="robot-icon-container">
//               <FaRobot className='robot-icon' />
//             </div>
//           </div>
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
// };

// export default ChatInterface;


import React from 'react';
import { FaRobot, FaArrowUp,FaGraduationCap } from 'react-icons/fa';
import './ChatInterface.css';

const ChatInterface = ({ messages, chatBoxRef, userInput, handleSubmit, setUserInput }) => {
  return (
    <div className="container">
      <h3><FaGraduationCap className='school'/>Chatty</h3>
      <div ref={chatBoxRef} className="chat-box">
        {messages.map((message, index) => (
          <div key={index} className={`message-container ${message.class}`}>
            <div className="message">{message.content}</div>
            <div className="robot-icon-container">
              <FaRobot className='robot-icon' />
            </div>
          </div>
        ))}
      </div>
      <div className="input-container">
        <form onSubmit={handleSubmit} id="user-form">
          <input type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} placeholder="Type your message here..." />
          <button type="submit"><FaArrowUp /></button>
        </form>
      </div>
      <div className="disclaimer">Chat-Bot can make mistakes. Consider checking important information.</div>
    </div>
  );
};

export default ChatInterface;
