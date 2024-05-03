import React from 'react'
import { FaBars, FaBell, FaSearch, FaUser } from 'react-icons/fa'

const Navbar = ({NavActive, setNavActive}) => {
  return (
    <nav className={`bg-gray-800 px-2 md:px-4 py-3 flex justify-between ${NavActive? "ml-64": " m-0" } overflow-hidden`}>
        <div className='flex items-center text-xl text-white'> 
            <FaBars className='me-4 cursor-pointer' onClick={()=>{setNavActive(!NavActive)}}/>
            <span>Walify</span>
        </div>
        <div className='flex items-center gap-x-5'>
            <div className='relative md:w-65 hidden md:visible'>
                <span className='relative md:absolute inset-y-0  flex items-center pl-2'>
                     <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch/></button>
                </span>
                <input type="text" name="" id="" className=' w-full px-4 py-1 pl-12 rounded outline-none md:block shadow'/>
            </div>

            <div className='text-white'><FaBell className='w-6 h-6'/></div>
            <div className='relative'>
              <button className='text-white group:'>
                <FaUser  className='text-white w-6 h-6 mt-1'/>
                <div className='z-10 hidden absolute rounded-lg shadow w-32 group:focus:block top-full right-0 bg-green'>
                  <ul>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Setting</a></li>
                    <li><a href="#">Logout</a></li>
                  </ul>
                </div>
              </button>
              </div>
        </div>
    </nav>
  )
}

export default Navbar
