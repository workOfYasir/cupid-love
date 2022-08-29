import React,{useState,useContext,useEffect} from 'react'
import axios from 'axios';
import { Observer } from "mobx-react-lite";
import { StoreContext } from "./../../../../../store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Settings = () => {
    const store = useContext(StoreContext);
    const [setting,setSettings] = useState()
    async function option(data){
        try {
            const token = localStorage.getItem('accessToken')

            const formData = new FormData();
            if(data!=null){
                formData.append('pictures_settings',data)
            }
           
          console.log(formData);
              const response =   await axios({
        
                method: "post",
                url: `${store.url}pictures-settings`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data", 'Authorization': `Bearer ${token}`  },
                
            }).then((response)=>{
               
                    const data = response.data
                    if(data[1]==true){
                        toast.success("Profile Setting Changed")
                    }   
                    setSettings(data[0])
                })
                
            } catch(error) {
                console.log(error)
            }
    }
    const handleOption1 = (event) => {
        option(event.target.value);
      } 
      const handleOption2 = (event) => {
        option(event.target.value);
      } 
    useEffect(() => {

     option(null)
    }, []);
  return (
    <Observer>
    {()=>(
        <>
            <div className="d-sm-flex d-block">
                <div className="col-sm-6 col-12 ">
                    <b>Choose display option</b><br />
                    <div className="d-flex pt-3">
                        <input type="radio" className='p-1 align-self-center' onClick={handleOption1} name="option" value={'visible'} checked={setting?.pictures_settings=='visible'?'checked':''}/><span className='px-2'>Visible to all Members</span> <span className="rounded p-1 font-size-10 align-self-center border primary-text">Recommended</span>
                    </div>
                    <div className="d-flex">
                        <input type="radio" className='p-1 align-self-center' onClick={handleOption2} name="option" value={'premimum'} checked={setting?.pictures_settings=='premimum'?'checked':''}/><span className='px-2'>Visible to all Premium Members</span> <span className='align-self-center'><i className="fa fa-question-circle-o" aria-hidden="true"></i></span>
                    </div>
                    
                </div>
                <div className="col-sm-4 col-12 text-center pt-2 bg-grey">
                This is how your Photos will look to other Members
                    <div className="px-2 pb-5 pt-1 ">
                        
                    
                        <div className="thumbnail">
                        <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='border p-2 bg-white' style={{ border:"1px solid #eeeeee !important" }} srcset="" />
                            
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )}
    </Observer>
  )
}

export default Settings