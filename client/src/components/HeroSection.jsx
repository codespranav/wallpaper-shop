import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const HeroSection = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setIsSearchActive(true); // Activate search history when the user starts typing
  };

  return (
    <div className='hero-header flex justify-center items-center h-[50vh] bg-cover bg-center flex-col gap-7 w-full'>
      <h1 className='text-3xl md:text-5xl font-bold text-white text-center md:w-[50vw] p-4'>Discover over 15 thousand+ wallpaper images for free</h1>
      <div className="mt-5 w-full md:w-1/2 mx-auto p-4 relative">
        <div className="flex items-center border border-gray-300 rounded-full px-4">
          <select className="bg-transparent focus:outline-none">
            <option value="keyword">Keyword</option>
            <option value="keyword">Keyword</option>
            <option value="category">Category</option>
          </select>
          <input
            onChange={handleInputChange}
            type="text"
            className="w-full py-3 pr-3 pl-6 bg-transparent text-white focus:outline-none"
            placeholder="Search wallpapers..."
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
            <CiSearch />
          </button>
        </div>
        {isSearchActive && searchTerm && (
          <div className="search-history bg-white flex-col p-4 rounded-md md:w-[35vw] absolute left-0 top-full mt-2">
            <p>Recent searches</p>
            <ul>
              <li>hd wallpaper</li>
              <li>car wallpaper</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;