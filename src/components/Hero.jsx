import React from 'react'
import { ReactTyped } from 'react-typed'

const Hero = () => {
  return (
    <div className='text-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='uppercase text-rose-600 font-bold p-2'>The World's Best Apple Orchard</p>
        <h1 className='uppercase md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Welcome to The Orchard</h1>
        <div className='flex justify-center'>
          <p className='uppercase md:text-3xl sm:text-2xl text-xl font-bold py-4'>Lightning fast delivery from tree to </p>
          <ReactTyped className='uppercase md:text-3xl sm:text-2xl text-xl font-bold pl-2 py-4 text-rose-600' strings={['table', 'market', 'shelf']} typeSpeed={120} backspeed={140} loop />
        </div>
        <button className='uppercase bg-gradient-to-r from-rose-600 to-yellow-300  w-[200px] rounded h-[50px] mx-auto py-3 font-bold' href='/shop'>View Our Shop</button>
      </div>
    </div>
  )
}

export default Hero