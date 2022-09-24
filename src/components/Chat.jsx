import React from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import Messages from "./Messages.jsx";

const iconStyle = "h-[24px] cursor-pointer hover:text-gray-700 mr-5 w-[24px]";
const Chat = () => {
  return (
    <div className="flex-[2]">
      <div className="flex justify-between items-center sm:h-[50px] bg-[#5d5b8d] p-[10px] text-gray-300">
        <span className="sm:text-lg text-sm font-semibold">Mia Khalifa</span>
        <div className="flex justify-between">
          <AiOutlineUserAdd className={iconStyle} />
          <FiMoreHorizontal className={iconStyle} />
        </div>
      </div>
      <Messages />
    </div>
  );
};

export default Chat;
