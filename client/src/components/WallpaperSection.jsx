import "../gallery.css"
import {Select} from "antd"

const WallpaperSection = () => {
    const data = [
        {
            id: 1,
            url: "https://images.pexels.com/photos/19762800/pexels-photo-19762800/free-photo-of-man-in-white-shirt-and-shorts-sitting-on-chair-in-spotlight.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }, 
        {
            id: 2,
            url: "https://images.pexels.com/photos/2664810/pexels-photo-2664810.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }, 
        {
            id: 3,
            url: "https://images.pexels.com/photos/20767754/pexels-photo-20767754/free-photo-of-two-white-envelopes-with-a-string-tied-to-them.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }, 
        {
            id: 4,
            url: "https://images.pexels.com/photos/21011577/pexels-photo-21011577/free-photo-of-two-people-in-traditional-clothing-standing-next-to-each-other.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }, 
        {
            id: 5,
            url: "https://images.pexels.com/photos/21338240/pexels-photo-21338240/free-photo-of-woman-posing-in-fur-in-shadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }, 
        

    ]
    return (
        <div className="mt-28 px-7 py-0">
        <div className="flex justify-between flex-wrap">
            <h1 className=" text-2xl text-gray-800 font-bold mb-8">Free Wallpaper Images</h1>
            <Select
    labelInValue
    defaultValue={{
      value: 'Trending',
      label: 'Trending',
    }}
    style={{
      width: 120,
      color: "black",
      fontSize: "21px"
    }}
    onChange={"handleChange"}
    options={[
      {
        value: 'trending',
        label: 'Trending',
      },
      {
        value: 'new',
        label: 'New',
      },
    ]}
  />
        </div>
        <div className="gallery">
                {data.map((items)=>{
                    return(
                        <div className="pics" key={items.id}>
                            <img className=" w-full" src= {items.url} alt="image" />
                        </div>
                    )
                })}
        </div>
        </div>
    );
}

export default WallpaperSection;
