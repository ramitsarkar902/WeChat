import React from "react";
import Draggable from "react-draggable";
import { Chat, SideBar } from "../components";
var close =require("../images/icons8-close-64.png")
var move=require("../images/icons8-move-48.png")
var iconStyle="box w-4 h-4 mr-2 mb-2"

const Home = () => {
  return (
    <div className="h-[100vh] w-full flex justify-center items-center overflow-hidden">
      <Draggable handle="img" bounds="parent">
        <div className="flex flex-col border-gray-200 rounded-md w-[90%] sm:w-[60%] h-[80%] bg-gray-100 shadow-xl shadow-slate-500 p-3">
          <p className="cursor-pointer flex">
            <img src={close} alt="close" className={iconStyle}/>
            <img src={move} alt="close" className={iconStyle}/>
          </p>
          <div className="flex w-full h-full overflow-hidden">
            <SideBar />
            <Chat />
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Home;
