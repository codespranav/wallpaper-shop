import React, { useEffect, useState } from 'react';
import MainLayout from '../Layout/MainLayout';
import { Link } from 'react-router-dom';

const Spinner = () => {
    const [showSpinner, setShowSpinner] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSpinner(true);
        }, 3000); // 3000 milliseconds = 3 seconds
    
        return () => clearTimeout(timer); // Cleanup function to clear the timer when component unmounts
    }, []);

    return (
        <MainLayout>
        <div className='flex flex-col justify-center items-center h-72'>

            {!showSpinner ? (
                <div className="flex justify-center items-center h-screen">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-gray-900"></div>
                </div>
            ) : (
                <>
                    <h1 className="text-center text-2xl font-bold text-red-600">Unauthorized Access</h1>
                    <Link to= "/join"><button className='bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]'>Join</button></Link>
                </>
            )}
        </div>
        </MainLayout>
    );
};

export default Spinner;
