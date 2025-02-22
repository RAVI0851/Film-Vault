import React from 'react'

import Logo from '../assets/MovieLogo.png'

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-5 items-center border p-4'>
        <img className='max-w-15 h-15 ' src={Logo} alt="" />
        <Link className="text-blue-400 text-2xl" to="/">Home</Link>
        <Link className='text-blue-400 text-2xl' to="/Watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar