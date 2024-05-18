import { useEffect, useState } from "react";
import "../gallery.css";
import { Select } from "antd";
import axios from "axios";
import { BASE_URL } from '../../helper/helper';
import DownloadImage from "./DownloadImage";

const WallpaperSection = () => {
  const [open, setOpen] = useState(false);
  const [files, setFiles] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("trending");
  const [fileLink, setFileLink] = useState("");
  const [fileName, setFileName] = useState("");

  const showDrawer = (link, name) => {
    setOpen(true);
    setFileLink(link)
    setFileName(name)
  };

  const handleCloseDrawer = () => {
    setOpen(false);
  };

  const fetchData = async (category) => {
    try {
      let res = await axios.get(`${BASE_URL}/api/wallpaper/get-wallpaper`, {
        params: { category }
      });
      setFiles(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(selectedCategory);
  }, [selectedCategory]);

  const handleChange = (value) => {
    setSelectedCategory(value.value);
  };

  return (
    <div className="mt-28 px-7 py-0">
      <div className="flex justify-between flex-wrap">
        <h1 className="text-2xl text-gray-800 font-bold mb-8">Free Wallpaper Images</h1>
        <Select
          labelInValue
          defaultValue={{ value: 'trending', label: 'Trending' }}
          style={{ width: 120, color: "black", fontSize: "21px" }}
          onChange={handleChange}
          options={[
            { value: 'trending', label: 'Trending' },
            { value: 'new', label: 'New' },
          ]}
        />
      </div>
      <div className="gallery">
        {files.map((item) => (
          <div className="pics" key={item._id}>
            <img
              className="w-full hover:opacity-85 transition-all"
              src={`${BASE_URL}/${item.file}`}
              alt={item.fileName}
              onClick={(()=>{showDrawer(`${BASE_URL}/${item.file}`, item.file); })}
            />
            {open && <DownloadImage open={open} setOpen={setOpen} imageLink = {fileLink} fileName = {fileName}/>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WallpaperSection;
