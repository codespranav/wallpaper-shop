import React, { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='bg-white'>
            <nav className='flex items-center justify-between md:w-[92%] mx-auto relative p-3 md:p-0 min-h-[11vh]'>
                <div>
                   <Link to= "/"><img className='w-16' src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png" alt="Site Logo" /></Link>
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
                <Link to= "/join"><button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Join</button></Link>
                   
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
