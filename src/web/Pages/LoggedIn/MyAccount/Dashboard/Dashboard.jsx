import React,{ useEffect,useState ,useContext} from 'react'
import axios from 'axios'; 
import { Observer } from "mobx-react-lite";
import { StoreContext } from "./../../../../store";
import './assets/css/style.css'
import './assets/css/card.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Dashboard = () => {
  const store = useContext(StoreContext);
  const [profileData,setProfile] = useState()
  const [premiumData,setPremium] = useState()
  const [profiles, setProfiles] = useState()
  const [view_contacts,setContact]=useState() 
  const [profileYouViewed,setProfileYouVisit]=useState()
  const [profileViewedYou,setProfileVisitedYou]=useState()
  const [qualification, setQualification] = useState()

  const getProfile = async(access_token,user_id)=>{

    try {
      const userId = new FormData();
      userId.append("user_id", user_id)
    const headers = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${access_token}` 
    };
      const response =   await axios({
        method: "post",
        url: `${store.url}get-profile`,
        data: userId,
        headers: headers,     
      }).then((response)=>{
            const data = response.data
            console.log('data',data['data']);
            setProfile(data['data']['user'][0])
        })
      } catch(error) {
        console.log(error)
      }
  }
  const getPremium = async(access_token)=>{

    try {
    const headers = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${access_token}` 
    };
      const response =   await axios({
        method: "post",
        url: `${store.url}user-premium`,
        headers: headers,     
      }).then((response)=>{
            const data = response.data
            console.log('premiumUser',data);
            setPremium(data[0]['premiumUser'])
        })
      } catch(error) {
        console.log(error)
      }
  }
  const getProfiles = async(access_token,user_id)=>{
    try {
      const userId = new FormData();
      userId.append("user_id", user_id)
    const headers = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${access_token}` 
  };
      const response =   await axios({

        method: "post",
        url: `${store.url}get-profiles-matches`,
        data: userId,
        headers: headers,
              
        
     }).then((response)=>{
            const data = response.data
            setQualification(data[0]['qualification'])
            setProfiles(data[0]['profiles'])
        
        })

      } catch(error) {
        console.log(error)
      }
  }
  const getStats = async(access_token,user_id)=>{
    try {
      const userId = new FormData();
      userId.append("user_id", user_id)
    const headers = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${access_token}` 
    };
      const response =   await axios({
        method: "post",
        url: `${store.url}profile-stats`,
        data: userId,
        headers: headers,     
      }).then((response)=>{
            const data = response.data
            setProfileVisitedYou(data['profileViewedYou'])
            setProfileYouVisit(data['profileYouViewed'])
            setContact(data['contact'])
        })
      } catch(error) {
        console.log(error)
      }
  }
  useEffect(()=>{
    const token = localStorage.getItem('accessToken')
    const user = localStorage.getItem('user')

    getProfile(token,JSON.parse(user).id)
    getPremium(token)
    getProfiles(token,JSON.parse(user).id)
    getStats(token,user)
  },[profileData?.user.picture.image_name])
  return (
    <Observer>
    {()=>(
        <>
          
              <div className='container mt-3' >
                <div className='row'>
                  <div className="col-12 col-sm-4 ">
                    <div className="card border-0 shadow">
                    {profileData?.user.picture==null ?
 <img src={ process.env.PUBLIC_URL +"/images/team/team-v1.png" } className="card-img-top" alt="..." />
                              :
                              <Carousel showThumbs={false}>
                              {profileData?.user.picture.map((image) => (
                                <div>
                               <img src={store.mediaUrl+image?.image_path} className="card-img-top" alt="..."/>
                              </div>
                            ))}
                          
                        </Carousel>
                             
                            }
                      <div className="card-img-overlay">
                        
                        <a href="#" className="btn btn-primary img-plus">➕</a>
                      </div>
                      <div className="row p-0 m-0">
                        <div className="col-6 p-3">
                          <div className="col-12 ">
                            <h6 className='text-dark'>{profileData?.user.first_name+' '+profileData?.user.last_name}</h6>
                          
                          </div>
                          <div className="col-12">
                          {profileData?.user.uid}
                          </div>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                          <a href="#" className='col text-end'>Edit</a>
                        </div>
                        <hr className='border-style-groove' />
                      </div>
                      <div className="row p-0 m-0">
                        <div className="col-6 p-3">
                        <div className="col-12">
                        Account Type
                          </div>
                          <div className="col-12 ">
                            <b>
                              {profileData?.user?.user_plan!=null?profileData?.user?.user_plan.name:'Free Membership'}
                              </b>

                          </div>
                          
                        </div>
                        <div className="col-6 d-flex align-items-center">
                          <a href="#" className='col text-end'>Update</a>
                        </div>
                        <hr className='border-style-groove' />
                      </div>
                      <div className="row p-0 m-0">
                        <div className="col-7 p-3">
                        <div className="col-12">
                        Mobile no. is verified
                          </div>
                          <div className="col-12 ">
                            <a href='#' className='text-info'>Verify your ID</a>
                          
                          </div>
                          
                        </div>
                        <div className="col-5 d-flex align-items-center">
                          <a href="#" className='col text-end'>
                          <i className="fa fa-shield" aria-hidden="true"></i>
                          </a>
                        </div>
                        <hr className='border-style-groove' />
                      </div>
                    </div>
                  </div>
                  
                  <div className="col p-sm-3">
                  <h4>Your Activity Summary</h4>
                    <div className="col-12 d-flex">
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>1</h3>
                        <span> Pending Invetation</span>
                      </div>
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>{profileYouViewed}</h3>
                        <span> Profiles You Visit</span>
                      </div>
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>{profileViewedYou}</h3>
                        <span> Recent Visitors</span>
                      </div>
                    </div>
                    <div className="col-12 d-flex">
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>2</h3>
                        <span> Chat Viewed</span>
                      </div>
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>3</h3>
                        <span> Chat Initial</span>
                      </div>
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>{view_contacts}</h3>
                        <span> View Contacts</span>
                      </div>
                    </div>
                    <div className="col-12 d-flex pt-5">
                    
                      <div className="blog-slider ">
                      <div className="blog-slider__wrp swiper-wrapper">
                        <div className="blog-slider__item swiper-slide">
                          <div className="blog-slider__img">
                            
                            <img src={window.location.origin +"/images/pattern/bg.webp"}  />
                          </div>
                          <div className="blog-slider__content text-black">
                            <span className="blog-slider__code">26 December 2019</span>
                            <div className="blog-slider__title">Tips to Improve</div>
                            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                            <a href="#" className="button btn-theme rouneded-sm animated right-icn">READ MORE</a>
                          </div>
                        </div>
                      
                        
                      </div>
                      <div className="blog-slider__pagination"></div>
                    </div>
                      </div>

                  
                  </div>

                </div>
                <div className=" pt-sm-5 pt-1">
                  <div className="col-12 d-sm-flex d-none">
                  <div className="col-4 m-2">
                  <h5>Premium Matches </h5>
                  </div>
                  <div className="col-4 m-2">
                  <h5>New Matches</h5>
                  </div>
                  <div className="col-4 m-2">
                  <h5>Recommended Matches </h5>
                  </div>
                  </div>
                  <div className="col-12 d-sm-flex d-block">
                  <h5 className='p-3 pt-5 col-12 text-center d-block d-sm-none'>Premium Matches </h5>
                 
                  <div className="col-sm-4 col-12 m-sm-2 m-0  shadow bg-white">
                  
                  {premiumData?.map((data) => (
                    <>
                  <div className="col-12 p-4 d-flex rounded">
                
                    <div className="col-2">
                      {data?.user_profile.user.picture[0]==null?
              
                      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />
                      : 
                       <img src={store.mediaUrl+data?.user_profile?.user?.picture[0].image_path} alt="" style={data?.user_profile.pictures_settings=='visible' ||((data?.user_profile.pictures_settings=='premimum') && (data?.user_profile.user_subscription!=null))?{filter: 'blur(0px)'}:{filter: 'blur(8px)'}} className='img-fluid border-radius-50' srcset="" /> 
                     } 
                    </div>
                    <div className="col">
                      <b>{data?.first_name+' '+data?.last_name}</b> <span className="bg-danger p-1 text-white rounded">👑Premium+</span><br/>
                      <span>24 yr, 5'2, Urdu, Karachi</span>
                    </div>
                    <div className="col-2">
                      ✔
                    </div>
                  </div>
                  <hr className='border-style-groove' /></>
                  ))}

     
                  </div>
                  <h5 className='p-3 col-12 text-center d-block d-sm-none'>New Matches</h5>
                 
                  <div className="col-sm-4 col-12 m-sm-2 m-0 shadow bg-white">
                  {profiles?.map((data) => (
                    <>
                  <div className="col-12 p-4 d-flex rounded">
                
                    <div className="col-2">
                      {data.user.picture[0]==null?
              
                      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />
                      : 
                       <img src={store.mediaUrl+data?.user?.picture[0].image_path} alt="" style={data.pictures_settings=='visible' ||((data?.pictures_settings=='premimum') && (data?.user_subscription!=null))?{filter: 'blur(0px)'}:{filter: 'blur(8px)'}} className='img-fluid border-radius-50' srcset="" /> 
                     } 
                    </div>
                    <div className="col">
                      <b>{data?.user.first_name+' '+data?.user.last_name}</b><br/>
                      <span>24 yr,{ data?.height}, Urdu, {data?.user?.country?.name}</span>
                    </div>
                    <div className="col-2">
                      ✔
                    </div>
                  </div>
                  <hr className='border-style-groove' /></>
                  ))}


  </div>
  <h5 className='p-3 col-12 text-center d-block d-sm-none'>Recommended Matches</h5>
   
  <div className="col-sm-4 col-12 m-sm-2 m-0 shadow bg-white">

  {profiles?.map((data) => (
                    <>
                  <div className="col-12 p-4 d-flex rounded">
                
                    <div className="col-2">
                      {data.user.picture[0]==null?
              
                      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />
                      : 
                       <img src={store.mediaUrl+data?.user?.picture[0].image_path} alt="" style={data.pictures_settings=='visible' ||((data?.pictures_settings=='premimum') && (data?.user_subscription!=null))?{filter: 'blur(0px)'}:{filter: 'blur(8px)'}} className='img-fluid border-radius-50' srcset="" /> 
                     } 
                    </div>
                    <div className="col">
                      <b>{data?.user.first_name+' '+data?.user.last_name}</b><br/>
                      <span>{data?.height}, {data?.country?.name}</span>
                    </div>
                    <div className="col-2">
                      ✔
                    </div>
                  </div>
                  <hr className='border-style-groove' /></>
                  ))}
                    </div>
                  </div>
                </div>
              </div>
        </>
    )}
    </Observer>
  )
}


export default Dashboard