import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Message = ({ msg, type, time }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center ${
        type === "bot" ? "justify-start" : "justify-end"
      } text-gray-100`}
    >
      <div
        className={`flex flex-col items-start justify-center px-3 py-2 rounded-md shadow-md gap-1 ${
          type === "bot"
            ? "bg-[#3a3f47] rounded-tl-none"
            : "bg-fuchsia-600 rounded-br-none"
        }`}
      >
        <p className="text-[10px] sm:text-xs md:text-sm">{msg}</p>
        <span
          className={`text-[7px] sm:text-[8px] md:text-[10px] lowercase select-none ${
            type === "bot" ? "text-gray-400" : "text-gray-300"
          }`}
        >
          {time}
        </span>
      </div>
    </motion.div>
  );
};

const Messages = ({ messages }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <section className="w-[20rem] sm:w-[28rem] md:w-[43rem] lg:w-[48rem] xl:w-[56rem] max-h-96 overflow-y-scroll scrollbar-hide space-y-3 md:space-y-5">
      {messages.length ? (
        messages.map((msg, index) => {
          return <Message key={index} {...msg} />;
        })
      ) : (
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-300 py-5 select-none flex flex-col items-center">
            <span className="text-xs md:text-sm">Wow so empty 😅!</span>
            <span className="text-sm md:text-base">
              Ask the bot anything...
            </span>
          </div>
        </div>
      )}
      <div ref={messagesEndRef}></div>
    </section>
  );
};

export default Messages;
