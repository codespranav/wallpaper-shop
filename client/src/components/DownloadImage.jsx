import { Button, Drawer, Space } from 'antd';
import axios from 'axios';

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
        <img src={imageLink} alt="" />
      </Drawer>
    </div>
  )
}

export default DownloadImage;
