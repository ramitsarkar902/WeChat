import React from "react";

const Message = () => {
  return (
    <div className="flex mb-[20px] gap-[20px] flex-row-reverse bg-red-200">
      <div className="flex flex-col text-gray-300 font-medium">
        <img className="w-[40px] h-[40px] rounded-full object-cover" src="https://www.slazzer.com/static/images/home-page/banner-orignal-image.jpg" alt="" />
        <span>just now</span>
      </div>
      <div className="flex flex-col gap-[10px] items-end">
        <p className="bg-white py-[10px] px-[20px] rounded-[10px]">Message2</p>
        <img className="w-[50%]" src="https://static.remove.bg/remove-bg-web/c4b29bf4b97131238fda6316e24c9b3606c18000/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="" />
      </div>
    </div>
  );
};

export default Message;
