import React from 'react'
import {Link} from "react-router-dom"

const inputStyle =
  "w-[80%] sm:w-[40%] h-10 rounded-lg text-left px-5 focus:outline-none mt-5 shadow-gray-300 shadow-lg text-sm font-semibold";

const Login = () => {
  return (
    <div className="h-[100vh] w-full flex flex-col justify-center items-center">
      <div className=" h-[600px] w-[70%] sm:w-[50%] flex flex-col  bg-slate-50 justify-center items-center rounded-lg shadow-gray-600 hover:shadow-lg">
        <h3 className="text-3xl font-bold text-cyan-600">WeChat</h3>
        <input type="email" placeholder="email" className={inputStyle} />
        <input type="password" placeholder="password" className={inputStyle} />
        <div className="block margin h-[2px] w-[80%] sm:w-[40%] bg-gray-500 my-4"></div>
        <button className="bg-slate-200 border  border-gray-500 w-[80%] sm:w-[40%] py-1 rounded-lg mb-5 hover:bg-green-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 duration-300">Login</button>
        <p className="font-semibold">Don't have an account?  <Link to="/register" className="underline">Register</Link></p>
      </div>
    </div>
  )
}

export default Login