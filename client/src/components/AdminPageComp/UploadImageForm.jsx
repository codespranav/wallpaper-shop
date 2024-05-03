import React, { useState } from 'react';

const UploadImageForm = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    tags: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log('Form data:', formData);
    console.log('Image:', image);
    // Reset form fields and image state
    setImage(null);
    setFormData({
      name: '',
      description: '',
      category: '',
      tags: ''
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">Upload Image</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="image">
            Choose Image:
          </label>
          <input
            className="border rounded-md p-2 w-full"
            type="file"
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
            value={formData.name}
            onChange={handleInputChange}
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
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="category">
            Category:
          </label>
          <input
            className="border rounded-md p-2 w-full"
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
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
            value={formData.tags}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadImageForm;
