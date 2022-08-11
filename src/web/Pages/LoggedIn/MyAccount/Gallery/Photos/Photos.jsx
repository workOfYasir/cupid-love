import React,{useContext} from 'react'
import axios from 'axios';
import { StoreContext } from "./../../../../../store";
import { Observer } from "mobx-react-lite";

const Photos = () => {
  const store = useContext(StoreContext);
  const [formValue, setformValue] = React.useState({
    image: '',
    
  });
  const handleChange = (event) => {
    setformValue({
image: event.target.files[0]

    });
    console.log(formValue);
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    
    const token = localStorage.getItem('accessToken')

    const formData = new FormData();

    formData.append('image',formValue.image)

    try {
   
    const headers = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}` 
  };
  console.log(formData);
      const response =   await axios({

        method: "post",
        url: `${store.url}image-store`,
        data: formData,
        timeout: 120000,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': `Bearer ${token}`  },
        
    }).then((response)=>{
        // setformValue({image:''})
            const data = response.data
            
            // setProfile(data[0])
        })
        // navigate('/pricing')
      } catch(error) {
        console.log(error)
      }
  }
  return (
    <Observer>
    {()=>(
        <>
          
            
             <div className="d-flex">

             
            <div className="col-sm-3 col-6 p-1">
                <div className="thumbnail">
                <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='border p-1' style={{ border:"1px solid #eeeeee !important" }} srcset="" />
                    
                </div>
            </div>
            <div className="col-sm-3 col-6 p-1">
                <div className="thumbnail">
                <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='border p-1' style={{ border:"1px solid #eeeeee !important" }} srcset="" />
                    
                </div>
            </div> 
            <div className="col-12 text-center">
             
            </div>
        
            </div>
            <form onSubmit={handleSubmit}  encType="multipart/form-data">
            <input type="file" name="image"  onChange={handleChange}/>Browser Photo
        <button className="button btn-theme rouneded-sm animated right-icn">submit</button>
            </form>
            Note: You can upload 20 photos to your profile. Each photos must be less than 15 MB and in jpg, gif, png, bmp or tiff format.
All photos uploaded are screened as per Photo Guidelines and 98% of those get activated within 2 hours.
        </>
    )}
    </Observer>
  )
}

export default Photos