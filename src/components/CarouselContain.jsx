import React, { useState } from 'react'
import Carousel from './Carousel'
import apple1 from "../assets/apple1.png"
import apple2 from "../assets/apple2.png"
import apple3 from "../assets/apple3.png"

const CarouselContain = () => {

const slides = [
  apple1,
  apple2,
  apple3
]

  return (
    <div className=' py-16 max-w-xl mx-auto'>    
    
      <Carousel>
    {slides.map((s) => (
      <img className='w-200' src={s} />
    ))}

    </Carousel>
    
    </div>

  )
}

export default CarouselContain