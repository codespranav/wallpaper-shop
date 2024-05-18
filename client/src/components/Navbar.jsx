import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth-context';
import { FaRegUserCircle } from "react-icons/fa";
import Logo from "../assets/walify_logo.png"

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const {auth} = useAuth();

    return (
        <header className='bg-white'>
            <nav className='flex items-center justify-between md:w-[92%] mx-auto relative p-3 md:p-0 min-h-[11vh]'>
                <div>
                   <Link to= "/"><img className='w-32' src={Logo} alt="Site Logo" /></Link>
                </div>

                <div className={`md:static p-3 absolute top-[100%] min-h-[20vh] md:min-h-0 md:mt-0 w-full bg-white left-0 ${isMenuOpen ? "" : "hidden"} md:block`} style={
    isMenuOpen ? { transition: 'top 0.3s ease-in-out' } : null
}>


                    <ul className='flex md:flex-row flex-col items-start md:items-center justify-center md:gap-[4vw] gap-8'>
                        <li><a className='hover:text-gray-500 cursor-pointer' href="#products">Products</a></li>
                        <li><a className='hover:text-gray-500 cursor-pointer' href="#solution">Solution</a></li>
                        <li><a className='hover:text-gray-500 cursor-pointer' href="#resources">Resources</a></li>
                        <li><a className='hover:text-gray-500 cursor-pointer' href="#developers">Developers</a></li>
                    </ul>
                </div>

                <div className='flex items-center gap-4'>
              {auth?.token ? <FaRegUserCircle className='text-2xl md:text-3xl text-orange-400 cursor-pointer hover:text-orange-500' onClick={()=>{
                if(auth?.user?.role == 1){
                    navigate('/admin/home')
                }else{
                    navigate('/')
                }
              }}/> :  <Link to= "/join"><button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Join</button></Link>}
                   
                    {isMenuOpen ? (
                        <IoMdClose className='text-xl md:hidden' onClick={() => setIsMenuOpen(false)} />
                    ) : (
                        <IoMenu className='text-xl md:hidden' onClick={() => setIsMenuOpen(true)} />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
