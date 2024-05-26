import { Button, Drawer, Space } from 'antd';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const DownloadImage = ({ open, setOpen, imageLink, fileName }) => {

  const onClose = () => {
    setOpen(false);
  };

  const onDownloadClick = async () => {
    try {
      const response = await axios.get(imageLink, { responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      console.log(url)
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
      
    }
  };

  return (
    <div>
    {console.log(imageLink)}
      <Drawer
        title="Download Wallpaper"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button type="primary" onClick={onDownloadClick}>
              DOWNLOAD
            </Button>
          </Space>
        }
      >
  <img src={imageLink!=null ? imageLink : "https://imgs.search.brave.com/AgRYlUxNlzd2KgQD6fTNOM8Y5ebx7660-bzT2XSvdio/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1LzgxLzg0Lzcx/LzM2MF9GXzU4MTg0/NzE3Nl9lRjU0MFhx/RkdIRGRHUFp4eWg1/TnRXSE56Z3MwWEZr/Ni5qcGc"} alt="" />


        <div className="content">
            {/* TODO  */}
            <div className="flex mt-2 p-1">
              <p className='tag bg-purple-500 w-16 text-center rounded-lg text-neutral-400 mr-2 cursor-pointer hover:bg-purple-600'>Nature</p>
              <p className='tag bg-purple-500 w-16 text-center rounded-lg text-neutral-400 mr-2 cursor-pointer hover:bg-purple-600'>Nature</p>
            </div>
            <h1 className='text-xl font-poppins mt-2 font-medium'>Wallpaper Title</h1>
            <div className="description mt-2">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt earum autem at officia. Dolores quae ullam non recusandae fugit suscipit nihil quos tempore.</p>
            </div>
            <button className='button p-2 bg-purple-700 mt-2 rounded-md text-white'>Download</button>
        </div>
      </Drawer>
    </div>
  )
}

export default DownloadImage;
