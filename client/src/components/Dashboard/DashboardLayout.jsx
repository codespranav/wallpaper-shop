/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = (props) => {
  const [NavActive, setNavActive] = useState(false);
  return (
    <div className='flex flex-col'>
      <div className="flex">
        <Sidebar NavActive={NavActive} setNavActive={setNavActive} />
        <div className="flex-grow">
          <Navbar NavActive={NavActive} setNavActive={setNavActive} />
          <div className={`${NavActive? "ml-64 p-4": "ml-2"}`}> {/* Add margin to create space */}
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
