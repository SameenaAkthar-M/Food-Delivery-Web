import React from 'react'
import { StoreContext } from '../context/StoreContext'
import { useContext } from 'react'

const Placeorder = () => {
  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='flex items-start justify-between gap-[50px] mt-[100px]'>
      {/* placeorder left */}
      <div className='w-full max-w-[max(30%,500px)] place-order'>
        <p className='text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
        <div className='multi-valued'>
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email address'/>
        <input type="text" placeholder='Street'/>
        <div className='multi-valued'>
          <input type="text" placeholder='City'/>
          <input type="text" placeholder='State'/>
        </div>
        <div className='multi-valued'>
          <input type="text" placeholder='Zip code'/>
          <input type="text" placeholder='Country'/>
        </div>
        <input type="text" placeholder='Phone'/>
      </div>
      {/* Place order right */}
      <div className='w-full max-w-[40% 500px]'>
      <div className='flex-1 flex flex-col gap-5'>
          <h2>Cart Total</h2>

          {/* Amount Section of the Cart */}
          <div>
            <div className='flex justify-between text-[#555]'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-2'/>
            <div className='flex justify-between text-[#555]'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0 ? 0:2}</p>
            </div>
            <hr className='my-2'/>
            <div className='flex justify-between font-bold'>
              <b>Total</b>
              <b>${getTotalCartAmount()===0? 0:getTotalCartAmount()+2}</b>
            </div>
          </div>
          <button 
            className='border-none text-white bg-[#DC143C] w-[max(15vw,200px)] py-3 rounded-[4px] cursor-pointer mt-[30px]'>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder