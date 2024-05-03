import React from 'react'
import { FaBars, FaHome, FaUsers  } from "react-icons/fa";
import { CiViewList, CiSettings  } from "react-icons/ci";
import { MdPermMedia } from "react-icons/md";
import { Link } from 'react-router-dom';

const Sidebar = ({NavActive, setNavActive}) => {
  return (
    <div className={`w-[100vw] md:w-64 bg-gray-800 fixed h-full px-4 py-2 ${NavActive ? "visible" : "hidden"}`}>
    <div className='p-3 flex md:block justify-between'>
      <h1 className=' text-lg font-medium text-white '>ADMIN DASHBOARD</h1>
      <FaBars className='me-4 text-white text-xl  cursor-pointer visible md:hidden' onClick={()=>{setNavActive(false)}}/>
    </div>
    <hr />
    <ul className='mt-3'>
      <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        <Link to="/admin/home" className='px-3 text-white'>
        <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'/>
        Home 
        </Link>
      </li>

      <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        <Link to= "/admin/admin-category" className='px-3 text-white'>
        <CiViewList  className='inline-block w-6 h-6 mr-2 -mt-2'/>
        Categories 
        </Link>
      </li>
      <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
      <Link to= "/admin/admin-wallpaper" className='px-3 text-white'>
        <CiViewList  className='inline-block w-6 h-6 mr-2 -mt-2'/>
        Wallpapers 
        </Link>
      </li>
      <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        <a href="#" className='px-3 text-white'>
        <FaUsers  className='inline-block w-6 h-6 mr-2 -mt-2'/>
        Users 
        </a>
      </li>
      <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
        <a href="#" className='px-3 text-white'>
        <CiSettings   className='inline-block w-6 h-6 mr-2 -mt-2'/>
        Settings 
        </a>
      </li>
    </ul>
    </div>

  )
}

export default Sidebar
