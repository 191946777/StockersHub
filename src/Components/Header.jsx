import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <header className='bg-[#17153B] flex flex-wrap items-center justify-center gap-3 sm:justify-between p-7'>
        <div className="logo ml-6 text-xs sm:text-2xl font-semibold text-white ">Stockers <span className='text-[#C8ACD6]'>Hub</span></div>
        <nav>
            <ul className='flex gap-12  text-white font-medium text-xs sm:text-lg'>
                <li><NavLink className={({isActive})=>`${isActive ? "text-[#433D8B]": ""}`} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>`${isActive ? "text-[#433D8B]": ""}`} to="/about">About</NavLink></li>
                <li><NavLink className={({isActive})=>`${isActive ? "text-[#433D8B]": ""}`} to="/global">Global</NavLink></li>
                <li><NavLink className={({isActive})=>`${isActive ? "text-[#433D8B]": ""}`} to="/news">News</NavLink></li> 
            </ul>
        </nav>
        <div className='mr-6'>
        <Link to='https://www.tradingview.com/' target='_blank'>
          <button type='button' className='bg-[#C8ACD6] p-2 rounded-md font-medium text-[#17153B] hidden sm:block'>Trading View</button>
          </Link>
            
          
        </div>
    </header>
    </>
  )
}

export default Header
