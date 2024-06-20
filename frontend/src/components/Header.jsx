import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex justify-between items-center w-[80%] mx-auto mt-4'>
      <NavLink to='/' className="text-3xl font-semibold text-zinc-800">Transaction Dashboard</NavLink>
        <NavLink to='/all-transactions' className='py-1 px-2 bg-blue-300 rounded-md'>All Transactions</NavLink>
    </nav>
  )
}

export default Header
