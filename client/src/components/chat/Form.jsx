import { formatRelative } from "date-fns";
import React, { useState } from "react";
import { MdSend } from "react-icons/md";
import axios from "axios";

const Form = ({ setMessages }) => {
  const [question, setQuestion] = useState("");

  const onChangeQuestionHandler = (e) => {
    setQuestion(e.target.value);
  };

  const messageResponse = async () => {
    const { message } = await axios.post("http://localhost:5000/api/v1", {
      question,
    });

    console.log(JSON.stringify(message));
  };

  const sendQuestionHandler = async (e) => {
    e.preventDefault();

    if (!question) return;

    setMessages((prev) => [
      ...prev,
      {
        msg: question,
        type: "user",
        time: formatRelative(new Date(), new Date()),
      },
    ]);

    setQuestion("");

    await messageResponse();
  };

  return (
    <form className='flex items-center relative'>
      <input
        type='text'
        placeholder='So, what do you want to know ?'
        value={question}
        onChange={onChangeQuestionHandler}
        className='border-none focus:outline-none py-3 w-full px-2 text-[10px] sm:text-xs md:text-sm bg-[#3a3f47] placeholder:text-gray-500 font-medium text-gray-100 rounded-md'
      />
      <button
        className='bg-gray-100 hover:opacity-80 active:opacity-100 transition-colors py-2 px-3 absolute right-1 rounded-full text-[#3a3f47]'
        type='submit'
        onClick={sendQuestionHandler}>
        <MdSend className='text-[15px] md:text-[19px]' />
      </button>
    </form>
  );
};

export default Form;
