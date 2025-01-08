import React, { useContext, useState } from 'react'
import {assets} from '../../assets/frontend_assets/assets.js'
import { FiSearch } from "react-icons/fi";
import { PiBasketFill } from "react-icons/pi";
import {Link, Links} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext.jsx';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu]=useState("Home");
  const {getTotalCartAmount}=useContext(StoreContext)

  return (
    <div className="flex justify-between items-center lg:flex-row lg:justify-between lg:items-center mt-3">
      <Link to='/'>
        <img 
          src={assets.logo} 
          className='w-[140px] lg:w-[120px] md:w-[120px] sm:w-[100px]'
        />
      </Link>
      <ul className='hidden lg:flex list-none gap-[24px] md:gap-[15px] text-lg md:text-base'>
        <Link to='/' 
          onClick={()=>setMenu("Home")} 
          className={menu === "Home" ? 'border-b-2 pb-1 border-solid border-[#DC143C] text-[#DC143C] cursor-pointer' : 'cursor-pointer'}>Home</Link>
        <a href='#explore-menu' 
          onClick={()=>setMenu("Menu")} 
          className={menu === "Menu" ? 'border-b-2 pb-1 border-solid border-[#DC143C] text-[#DC143C] cursor-pointer' : 'cursor-pointer'}>Menu</a>
        <a href='#contact-us' 
          onClick={()=>setMenu("Contact Us")} 
          className={menu=== "Contact Us" ? 'border-b-2 pb-1 border-solid border-[#DC143C] text-[#DC143C] cursor-pointer' : 'cursor-pointer'}>Contact Us</a>
      </ul>

      <div className='flex items-center gap-10 md:gap-8 sm:gap-6'>
        <FiSearch className="lg:w-[32px] lg:h-[32px] md:w-[28px] md:h-[28px] sm:w-[22px] sm:h-[22px]"/>
        <div className='relative'>
          <Link to='/cart'>
            <PiBasketFill className="lg:w-[32px] lg:h-[32px] md:w-[28px] md:h-[28px] sm:w-[22px] sm:h-[22px]"/>
            <div className={`absolute min-w-[10px] min-h-[10px] bg-[#DC143C] rounded-lg top-[-5px] right-[-5px] ${
            getTotalCartAmount() === 0 ? "hidden" : "show"}`}></div>
          </Link>
        </div>
        <button 
          onClick={()=>setShowLogin(true)} 
          className="text-sm border-2 border-[#DC143C] px-4 py-2 rounded-3xl hover:bg-[#DC143C] hover:text-white transition-colors duration-400 lg:text-base md:px-5 md:py-2 md:text-sm sm:px-4 sm:py-1 sm:text-xs">Sign in</button>
      </div>
    </div>
  )
}

export default Navbar