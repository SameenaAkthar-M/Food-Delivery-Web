import React, { useState } from 'react'
import { assets } from '../assets/frontend_assets/assets';

const Loginpopup = ({setShowLogin}) => {

  const [currentState,setCurrentState]=useState("Sign Up");

  return (
    <div className='absolute z-[1] w-full h-full bg-[#00000090] grid top-0'>
      <form 
        className='place-self-center w-[max(23vw,33px)] text-[#808080] bg-white flex flex-col gap-[25px] px-[25px] py-[30px] rounded-[8px] text-[14px] animate-login'>
          <div className='flex justify-between items-center text-black'>
            <h2 className='font-semibold text-[20px]'>{currentState}</h2>
            <img 
              onClick={() => setShowLogin(false)} 
              src={assets.cross_icon} 
              className='w-16px cursor-pointer'/>
          </div>
        <div className='flex flex-col gap-5'>
          { currentState === "Login" ? <></> : <input type="text" placeholder='Your name' required className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]'/>}
          <input 
            type="email" 
            placeholder='Your email' 
            required 
            className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]'
          />
          <input 
            type="password" 
            placeholder='Password' 
            required 
            className='outline-none border-[1px] border-solid border-[#c9c9c9] p-[10px] rounded-[4px]'
          />
        </div>
        <button className='border-none p-[10px] rounded-[4px] text-white bg-[#DC143C]  curdor-pointer text-[15px]'>{ currentState === "Sign Up" ? "Create Account" : "Login" }</button>
        <div className='flex items-start gap-2 mt-[-15px]'>
          <input 
            type="checkbox" 
            required 
            className='mt-[5px]'
          />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        { currentState === "Login" ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}className='font-lg text-[#DC143C] cursor-pointer'>Click here</span></p> : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}className='font-semibold text-[#DC143C] cursor-pointer'>Login here</span></p>}
      </form>
    </div>
  )
}

export default Loginpopup