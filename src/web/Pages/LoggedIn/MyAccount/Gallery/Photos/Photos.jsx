import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios';
import { StoreContext } from "./../../../../../store";
import { Observer } from "mobx-react-lite";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Photos = () => {
  const store = useContext(StoreContext);
  const [image, setImage] = useState([]);
  const [pictures,setPicture] = useState();
  const [storePictures,setStorePicture] = useState();
  const [deletePictures,setDeletePicture] = useState();
  const [formValue, setformValue] = React.useState({
    image: [],
  });
  const deleteImage = async (picture_id) => {
    try {
      const token = localStorage.getItem('accessToken')
      const pictureData = new FormData;
      pictureData.append('id',picture_id)
      await axios({
        method:"post",
        headers:{ 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}`  },
        data:pictureData,
        url:`${store.url}image-delete`
      }).then((response)=>{
        const data = response.data
        setDeletePicture(data);
      })
    }catch (e) {
      console.log(e)
    }
  }
  const getImages = async ()=>{
    try{
      const token = localStorage.getItem('accessToken')
      await axios({
        method:"get",
        headers:{ 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}`  },
        url:`${store.url}images`
      }).then((response)=>{
        const data = response.data
        setPicture(data);
      })
    }catch(e){
      console.log(e)
    }
  }
  const handleChange = (event) => {
    setformValue({
    image: [...event.target.files]
        });
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
    // formData.append(`image`, formValue.image);
    formData.append('user_id',user_id)

    try {

      const response =   await axios({

        method: "post",
        url: `${store.url}image-store`,
        data: formData,
        timeout: 120000,
        headers: { 'Content-Type': 'multipart/form-data', 'Authorization': `Bearer ${token}`  },

        }).then((response)=>{

            const data = response.data
            setStorePicture(data);
            toast.success("Photos Successfully Added")

        })

      } catch(error) {
        console.log(error)
      }
  }
  useEffect(() => {
    getImages()
  }, [storePictures,deletePictures]);

  return (
    <Observer>
    {()=>(
        <>

          <div className="row">
            {pictures?.map((data)=>(
                <>
                <div className="col-3">
                 <div className="col text-end" style={{cursor:"pointer"}} onClick={()=>(deleteImage(data?.id))}>❌</div>
                  <img src={store.mediaUrl+data?.image_path} className="img-fluid"/>
                </div>
                </>
            ))}
          </div>
          <hr/>
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