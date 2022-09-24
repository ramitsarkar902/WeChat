import React from "react";

const content = [
  {
    image:
      "https://i.pinimg.com/736x/56/6d/ee/566dee707bec80d5c08bcc4e94d50c56.jpg",
    name: "Dakota",
    message: "Hello!",
  },
  {
    image:
      "https://images.news18.com/ibnlive/uploads/2022/09/kriti-sanon-3.jpg",
    name: "Kriti",
    message: "Heya!",
  },
];
const Chats = () => {
  return (
    <div className="flex flex-col">
      {content.map((item, index) => {
        return (
          <div
            key={index}
            className="py-5 px-2 flex items-center color-white hover:bg-[#2f2d52] cursor-pointer"
          >
            <img
              className="sm:w-[50px] w-[30px] rounded-full object-cover height-[30px] sm:height-[50px] mr-3"
              src={item.image}
              alt=""
            />
            <div>
              <span className="sm:text-lg text-sm font-semibold text-gray-300">
                {item.name}
              </span>
              <p className="sm:text-sm text-xs text-gray-400">{item.message}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Chats;
