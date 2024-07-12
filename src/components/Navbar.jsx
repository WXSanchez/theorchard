import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import React, { useState } from 'react'; 

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="flex justify-between items-center max-w-[1240px] mx-auto px-4 h-24 text-black">
    <h1 className='w-full text-3xl font-bold bg-gradient-to-r from-rose-600  to-yellow-300  inline-block text-transparent bg-clip-text'>THE ORCHARD</h1>
    <ul className='hidden md:flex'>
      <li className='p-4'>Home</li>
      <li className='p-4'>About</li>
      <li className='p-4'>Shop</li>
    </ul>

    <div onClick={handleNav} className='block md:hidden'>
      {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} /> }
    </div>

    <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#ecdcc4] ease-in-out duration-500' : 'fixed left-[-100%]'}>
    <h1 className='w-full text-3xl m-4 font-bold bg-gradient-to-r from-rose-600  to-yellow-300 inline-block text-transparent bg-clip-text '>THE ORCHARD</h1>
      <ul className='uppercase p-4'>
      <li className='p-4 border-b border-gray-600'>Home</li>
      <li className='p-4 border-b border-gray-600'>About</li>
      <li className='p-4 '>Shop</li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar