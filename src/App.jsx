import React from 'react'
import './App.css'
import CoffeeList from './Components/CoffeeList.jsx'


function App () {
  return (
    <div>
      <div className='header'></div>
      <div className='display'>
        <div className='top-content  '>
          <div className='info pt-[4rem] px-5 '>
            <h1 className='text-[#FEF7EE] text-[2rem] text-center font-bold'>
              Our Collection
            </h1>
            <p className='text-[#6F757C] text-center '>
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
          </div>
          <div className='buttons mt-[2em]'>
            <button className='btn btn1 bg-[#6F757C] py-2 px-2 mr-3'>
              All Products
            </button>
            <button className='btn btn2 py-2 px-2'>Available Now</button>
          </div>
        </div>
        <div className='below-content'>
          <CoffeeList />
        </div>
      </div>
      <div className='bg'></div>
    </div>
  )
}

export default App
