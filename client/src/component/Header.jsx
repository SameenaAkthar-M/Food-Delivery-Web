import React from 'react'

const Header = () => {
  return (
    <div className="h-[34vw] mx-auto my-[30px] bg-[url('/m1.jpg')] bg-no-repeat bg-cover opacity-80 relative rounded-lg">
      <div className="absolute inset-0 bg-black opacity-15 rounded-lg"></div>
        <div className='animate-custom absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw]'>
          <h2 className='font-semibold text-white text-[max(4.5vw,22px)]'>Order your favourite food here</h2>
          <p className='text-white text-[1vw]'>Indulge in a wide variety of mouth-watering dishes, carefully prepared by top chefs. From comforting classics to trendy new flavors, our menu has something for every taste. With quick delivery and easy-to-use features, satisfying your cravings has never been simpler or more delicious!</p>
          <button className='border-none text-[#747474] text-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-[50px]'>View Menu</button>
      </div>
    </div>
  )
}

export default Header