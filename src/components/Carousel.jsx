import React from 'react'
import { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Carousel({children: slides}){

  const [state, setState] = useState(1)

const prev = () => setState(state => (state == 0 ?  slides.length - 1 : state - 1))
const next = () => setState(state => (state == slides.length - 1 ? 0 : state + 1))

  return(
    <div className='relative overflow-hidden rounded-3xl'>
    <div className='flex transition-transform ease-out duration-500 ' style={{transform: `translateX(-${state * 100}%)`}}>{slides}</div>
    <div className='absolute inset-0 flex items-center justify-between p-4'>
      <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'> 
        <FaArrowLeft size={40} />
      </button>
      <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
        <FaArrowRight size={40} />
      </button>
    </div>
    <button className='mx-auto justify-center text-center'>Hello</button>
    </div>
  )
}
