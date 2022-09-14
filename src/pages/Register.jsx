import React from "react";
import {Link} from "react-router-dom"

const inputStyle =
  "w-[80%] sm:w-[40%] h-10 rounded-lg text-center focus:outline-none mt-5 shadow-gray-300 shadow-lg text-sm font-semibold";

function Register() {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center bg-blue-300">
      <div className=" h-[600px] w-[70%] sm:w-[50%] flex flex-col  bg-slate-50 justify-center items-center rounded-lg shadow-gray-600 hover:shadow-lg">
        <h3 className="text-3xl font-bold text-cyan-700">WeChat</h3>
        <input type="text" placeholder="name" className={` ${inputStyle}`} />
        <input type="email" placeholder="email" className={inputStyle} />
        <input type="password" placeholder="password" className={inputStyle} />
        <div className="flex justify-start mt-8">
          <input required className="px-3 border-none w-[70%] sm:w-[100%] sm:ml-0 ml-5" type="file" id="file" />
        </div>
        <div className="block margin h-[2px] w-[80%] sm:w-[40%] bg-gray-500 my-4"></div>
        <button className="bg-slate-200 border  border-gray-500 w-[80%] sm:w-[40%] py-1 rounded-lg mb-5 hover:bg-blue-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">Sign Up</button>
        <p className="font-semibold">Do you have an account?  <Link to="/login" className="underline">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;
