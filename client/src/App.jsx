import React from 'react'
import Navbar from './component/navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Menu from './pages/Menu'
import Placeorder from './pages/Placeorder'
import Footer from './component/Footer'

const App = () => {
  return (
    <>
      <div className='w-[80%] m-auto'>
        <Navbar/>
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
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App