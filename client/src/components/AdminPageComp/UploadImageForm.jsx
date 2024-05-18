import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth-context";
import {useNavigate} from "react-router-dom"
import { BASE_URL } from "../../../helper/helper.jsx";


const UploadImageForm = () => {
  const navigate = useNavigate();
  const {auth} = useAuth();
  const [image, setImage] = useState()
  const [fileName, setFileName] = useState();
  const [fileDesc, setFileDesc] = useState();
 
  // const [categories, setCategories] = useState();
  // const [tags, setTags] = useState();
  const handleImageChange = (e)=>{
      e.preventDefault();
      setImage(e.target.files[0])
      console.log(e.target.files[0]);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image)
    formData.append("fileName", fileName)
    formData.append("fileDesc", fileDesc)
    // formData.append("description", description)
    // formData.append("categories", categories)
    // formData.append("tags", tags)
   axios.post(`${BASE_URL}/api/wallpaper/add-wallpaper`, formData)
   .then(res=>{
      console.log(res)
      navigate("/admin/admin-wallpaper")
      
   }).catch(err=>{
    console.log(err)
   })
  }



  return (
    <div className='bg-green-500 p-4'>
    <div className="max-w-lg mx-auto p-10 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Upload Images</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="image">
            Choose Image:
          </label>
          <input
            className="border rounded-md p-2 w-full"
            type="file"
            accept=".png, .jpg, .jpeg"
            id="image"
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name:
          </label>
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            id="name"
            name="name"
            value={fileName}
            onChange={((e)=>{setFileName(e.target.value)})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="description">
            Description:
          </label>
          <textarea
            className="border rounded-md p-2 w-full"
            id="description"
            name="description"
            value={fileDesc}
            onChange={((e)=>{setFileDesc(e.target.value)})}
          />
        </div>
        {/* <div>
          <label className="block text-sm font-medium mb-1" htmlFor="category">
            Category:
          </label>
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            id="category"
            name="category"
            value={categories}
            onChange={((e)=>{setCategories(e.target.value)})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="tags">
            Tags:
          </label>
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            id="tags"
            name="tags"
            value={tags}
            onChange={((e)=>{setTags(e.target.value)})}
          />
        </div> */}



        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
          {/* <img src={""} alt="" /> */}
        </div>
      </form>
    </div>
    <div>
    </div>
  </div>
  );
};

export default UploadImageForm;
