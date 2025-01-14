import React, { useState } from 'react'
import Navbar from './component/navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import Placeorder from './pages/Placeorder'
import Footer from './component/Footer'
import Loginpopup from './component/Loginpopup'
import PaymentSuccess from './pages/PaymentSuccess'


const App = () => {
  const [showLogin,setShowLogin]=useState(false);

  return (
    <>
    {showLogin ? <Loginpopup setShowLogin={setShowLogin}/>:<></>}
      <div className='w-[90%] lg:w-[80%] m-auto'>
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route 
          path='/' 
          element={<Home/>}/>
          <Route 
          path='/cart' 
          element={<Cart/>}/>
          <Route 
          path='/order' 
          element={<Placeorder/>}/>
          <Route path="/payment-success" element={<PaymentSuccess />} />
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App