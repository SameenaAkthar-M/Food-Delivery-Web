import React, { useState } from 'react'
import Header from '../component/Header';
import Menu from './Menu';
import FoodDisplay from '../component/FoodDisplay';

const Home = () => {

  const [category,setCategory]=useState("All");

  return (
    <div>
      <Header/>
      <Menu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
    </div>
  )
}

export default Home;