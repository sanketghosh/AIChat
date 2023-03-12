import React, { useState } from "react";
import Header from "./chat/Header";
import Messages from "./chat/Messages";
import Form from "./chat/Form";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  return (
    <section className="rounded-lg px-5 md:px-7 py-5 bg-[#2f343c] shadow-md">
      <Header />
      <div className="w-full h-[1px] bg-gray-600 mt-5 mb-2" />
      <Messages messages={messages} />
      <div className="w-full h-[1px] bg-gray-600 my-5" />
      <Form setMessages={setMessages} />
    </section>
  );
};

export default Chat;
