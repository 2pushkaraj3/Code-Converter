import React, { useState } from 'react'
import { apple, bill,google,star,coinbase,clangu,cplus,java, python } from "../assets";
import {Button} from "@mui/material"
import styles, { layout } from "../style";
import { imglinks } from '../constants';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';


const API_KEY = "Bearer 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";


const systemMessage = { 
  "role": "system", "content": "Convert given code into asked language as you are giving it to beginner."
}

const Converter = () => {

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm ChatGPT! Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });



    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
  }



  return (
    <section id="features" className={layout.sectionReverse}>


    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}> Easily covert your code; <br className="sm:block hidden" /> 

      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Enter the code of your choice for conversion
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="https://www.computerhope.com/">
        <img src={python} alt="python" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        </a>
        <img src={clangu} alt="c" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" onclick="https://ide.geeksforgeeks.org"/>
        <img src={cplus} alt="cplus" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        <img src={java} alt="java" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
        
      </div>
      {/* <div className="Input">
    <input placeholder="Code" className="py-4 px-6 box-shadow container text-gradient "floatLabelType="Auto"/>
    
    <div className="Button">
      <Button variant='contained' className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient  outline-none ${styles}`}>Submit</Button>
      </div>
 
      </div> */}

<div className="  Chat">
      <div style={{ position:"relative", height: "800px", width: "700px"  }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
              })}
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>
      
    </div>
  </section>
  )
}

export default Converter