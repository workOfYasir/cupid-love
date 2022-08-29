import React,{useState,useContext,useEffect} from 'react'
import { Link,useNavigate } from "react-router-dom";
import './../assets/css/style.css'
import { Observer } from "mobx-react-lite";
import { StoreContext } from "./../../../../store";
import axios from 'axios';

const RecentlyView = () => {
  const store = useContext(StoreContext);
  const [profileData,setRecentlyViewed] = useState()
  const [formValue, setformValue] = React.useState({
    gender: '',
    material_status: '',
    height: '',
    age:'',
    cast: '',
    edjucation: '',
    country:'',
    city:''
  });
  const getProfiles = async(access_token,user_id)=>{
    try {
      // const userId = new FormData();
      // userId.append("id", user_id)
    const headers = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${access_token}` 
  };
      const response =   await axios({

        method: "get",
        url: `${store.url}profiles-visited-you`,
      
        headers: headers,
              
        
     }).then((response)=>{
            const data = response.data
            // setQualification(data[0]['qualification'])
            setRecentlyViewed(data[0]['profilesVisitedYou'])
        })

      } catch(error) {
        console.log(error)
      }
  }
  
  useEffect(()=>{
    const token = localStorage.getItem('accessToken')
    const user = localStorage.getItem('user')
  
    getProfiles(token,JSON.parse(user).id)
  },[])
  return (
    <Observer>
    {()=>(
        <>
<section className="space-ptb">
  <div className="container mt-3 p-2  shadow rounded bg-white">
    <h5 className=' pt-2'>
    Recently Viewed Members 
    </h5>
    <div className="pb-2">
    Profiles you have recently Viewed
    </div>
    
    <div className="row">
    {profileData?.map((data) => (
      <div className="col-sm-3 col-12 p-sm-0 p-3">
      <div className="shadow rounded p-0 m-1">

      <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
      <div className="p-1">
         <Link to={"/public/profile/"+data.viewed_your_profile.id}>
      <b className='text-primary'>{data.viewed_your_profile.first_name+' '+data.viewed_your_profile.last_name}</b></Link>
      <ul>
      <li> {data.viewed_your_profile.user_profile.height}, {data.viewed_your_profile.user_profile?.height},{data.viewed_your_profile.user_profile?.religion?.name},, Urdu</li>
        <li>Lives in {data.viewed_your_profile.user_profile?.country?.name}, {data.viewed_your_profile.user_profile?.state?.name}</li>
      </ul>
      </div>
      </div>
    </div>
    ))}

 
      <div className="d-sm-none d-block pt-3"> &nbsp;</div>
    
    </div>
  </div>
</section>
        </>
    )}
    </Observer>
  )
}

export default RecentlyView