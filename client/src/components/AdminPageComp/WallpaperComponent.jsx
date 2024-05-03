import React from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../Dashboard/DashboardLayout';

const WallpaperComponent = () => {
  const navigate = useNavigate();
  return (
    <>
          <div className="container max-w-7xl mx-auto mt-2">
    {/* Add Category Box  */}
    <div className="add-cat-box bg-gray-100 p-4 rounded-md mb-4">
      <div className="content-box md:flex justify-between items-center leading-10 md:leading-none">
        <p>Create New Category Here</p>
        <button
          className="button bg-red-600 md:p-2 p-2 rounded-md text-white md:text-base text-sm"
          title="Add New Wallpaper"
          onClick={()=> {navigate('/admin/add-wallpaper')}}
        >
          Add New Category
        </button>
      </div>
    </div>
    </div>
    </>
  )
}

export default WallpaperComponent
