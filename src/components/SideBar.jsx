import React from 'react'
import Navbar from './Navbar.jsx'
import Search from './Search.jsx'

const SideBar = () => {
  return (
    <div className="flex flex-col bg-[#3e3c61] flex-1">
        <Navbar/>
        <Search/>
    </div>
  )
}

export default SideBar