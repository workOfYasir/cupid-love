import React,{useState,useContext} from 'react'
import axios from 'axios';
import { StoreContext } from "./../../../../../store";
import { Observer } from "mobx-react-lite";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Photos = () => {
  const store = useContext(StoreContext);
  const [image, setImage] = useState([]);
  const [formValue, setformValue] = React.useState({
    image: [],
    
  });
  const handleChange = (event) => {
    setformValue({
image: [...event.target.files]
    });
console.log(formValue.image);
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    
    const token = localStorage.getItem('accessToken')
    const user = localStorage.getItem('user')
    const user_id = JSON.parse(user)['id'];
    const formData = new FormData();
 

  for (let i = 0; i < formValue.image.length; i++) {
    formData.append(`image[]`, formValue.image[i]);
  }
  formData.append('user_id',user_id)
console.log('========>',formValue.image);
    try {

  // console.log(formData);
      const response =   await axios({

        method: "post",
        url: `${store.url}image-store`,
        data: formData,
        timeout: 120000,
        headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}`  },
        
    }).then((response)=>{
        // setformValue({image:''})
            const data = response.data
            toast.success("Photos Successfully Added")
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
{/* <ToastContainer/> */}
             
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
            <input type="file" name="image[]" multiple  onChange={handleChange}/>Browser Photo
        <button className="button btn-theme rouneded-sm animated right-icn">submit</button>
            </form>
            Note: You can upload 20 photos to your profile. Each photos must be less than 15 MB and in jpg, gif, png, bmp or tiff format.
All photos uploaded are screened as per Photo Guidelines and 98% of those get activated within 2 hours.
        <hr className='p-5'/>
        <div className="containter px-5">

        
        <div className="col-12 d-flex">

            <div className="col-4">
            ✔ Photos you can upload
            </div>
            <div className="col-4">
            ❌ Photos you can not upload
            </div>

        </div>
        <div className="col-12 d-flex">
          <div className="col-4">
          <img className="img-fluid" src={window.location.origin + "/images/guild/pic1.png"} alt="" />
          </div>
          <div className="col-4">
          <img className="img-fluid" src={window.location.origin + "/images/guild/pic2.png"} alt="" />
          </div>
          <div className="col-4">
          <img className="img-fluid" src={window.location.origin + "/images/guild/pic3.png"} alt="" />
          </div>
        </div>
        </div>
        </>
    )}
    </Observer>
  )
}

export default Photos