import React, { useState } from 'react'
import {assets} from '../../assets/frontend_assets/assets.js'
import { FiSearch } from "react-icons/fi";
import { PiBasketFill } from "react-icons/pi";

const Navbar = () => {

  const [menu,setMenu]=useState("Home");

  return (
    <div className='p-5 flex justify-between items-center'>
      <img src={assets.logo} className='w-40'/>
      <ul className='flex list-none gap-6 text-lg'>
        <li onClick={()=>setMenu("Home")} className={menu === "Home" ? 'border-b-2 pb-1 border-solid border-[#DC143C] text-[#DC143C] cursor-pointer' : 'cursor-pointer'}>Home</li>
        <li onClick={()=>setMenu("Menu")} className={menu=== "Menu" ? 'border-b-2 pb-1 border-solid border-[#DC143C] text-[#DC143C] cursor-pointer' : 'cursor-pointer'}>Menu</li>
        <li onClick={()=>setMenu("Contact Us")} className={menu=== "Contact Us" ? 'border-b-2 pb-1 border-solid border-[#DC143C] text-[#DC143C] cursor-pointer' : 'cursor-pointer'}>Contact Us</li>
      </ul>

      <div className='flex items-center gap-10'>
        <FiSearch size={32}/>
        <div className='relative'>
          <PiBasketFill size={32}/>
          <div className='absolute min-w-[10px] min-h-[10px] bg-[#DC143C] rounded-lg top-[-5px] right-[-5px]'></div>
        </div>
        <button className='text-sm border-2 border-[#DC143C] px-4 py-2 rounded-3xl hover:bg-[#DC143C] hover:text-white transition-colors duration-400'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar