import React,{ useEffect,useState ,useContext} from 'react'
import axios from 'axios';
import { Observer } from "mobx-react-lite";
import { StoreContext } from "./../../../../store";
import './assets/css/style.css'
import './assets/css/card.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Profile from './../Profile/Profile'
import {Link} from "react-router-dom";

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
            console.log('data==================>',data['data']['user'][0]['user']['user_plan']);
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
            // console.log('premiumUser',data);
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
        console.log(data[0]['profiles']);
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
      const response = await axios({
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
  },[])
  return (
    <Observer>
    {()=>(
        <>
              <div className='container mt-3' >
                <div className='row'>
                  <div className="col-12 col-sm-4 ">
                    <div className="card border-0 shadow">
                    {profileData?.user.picture[0]==null ?

                        <img className="card-img-top" src={window.location.origin + "/images/profile/default.png"} alt="" />
                              :
                              <Carousel showThumbs={false}>
                              {profileData?.user.picture.map((image) => (
                                <div>
                               <img src={store.mediaUrl+image?.image_path} className="card-img-top" alt="..."/>
                              </div>
                            ))}
                          
                        </Carousel>
                             
                            }

                      <div className="row p-0 m-0">
                        <div className="col-6 p-3">
                          <div className="col-12 ">
                            <h6 className='text-dark'>{profileData?.user.first_name}</h6>
                          
                          </div>
                          <div className="col-12">
                          {profileData?.user.uid}
                          </div>
                        </div>

                        <hr className='border-style-groove' />
                      </div>
                      <div className="row p-0 m-0">
                        <div className="col-6 p-3">
                        <div className="col-12">
                        Account Type
                          </div>

                          
                        </div>
                        <div className="col-6 d-flex align-items-center">
                          <b>  <a href="#" className='col text-end'> {profileData?.user_plan!=null?profileData?.user_plan.name:'Free Membership'}</a>        </b>
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
                <div className="pt-sm-5 pt-1">
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
                 
                  {premiumData?.map((data,index) => (
                    <>
                  <div className="col-12 p-4 d-flex rounded">
                
                    <div className="col-3">
                  
                      {data?.user_profile.user.picture[0]==null?
              
                      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='border-radius-50' srcset="" />
                      : 
                       <img src={store.mediaUrl+data?.user_profile?.user?.picture[0].image_path} alt="" style={data?.user_profile.pictures_settings=='visible' ||((data?.user_profile.pictures_settings=='premimum') && (data?.user_profile.user_subscription!=null))?{filter: 'blur(0px)'}:{filter: 'blur(8px)'}} className='border-radius-50' srcset="" />
                     } 
                    </div>
                    <div className="col">
                      <b>{data?.first_name+' '+data?.last_name}</b> <span className="bg-danger p-1 text-white rounded"><i class="fa fa-diamond" aria-hidden="true"></i>Premium+</span><br/>
                      <span>{ data?.user_profile.height}, {data?.user_profile.language}, {data?.user_profile?.country?.name}</span>
                    </div>
                    <div className="col-2 cursor-pointer">
                      <i
                          data-bs-toggle="modal"
                          data-bs-target={"#premiumModel-"+index}
                          style={{
                            borderRadius: '100%',
                            fontSize: '28px',
                            border: '2px green solid',
                            padding: '8px 10px 8px 10px',
                            cursor: 'pointer',
                          }}
                          className="fa fa-check-circle text-success"
                          aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <hr className='border-style-groove' />
                  <div
                      className="modal fade"
                        id={"premiumModel-"+index}
                      tabIndex="-1"
                      aria-labelledby={"premiumModel-"+index}
                      aria-hidden="true"
                  >
                  <div className="modal-dialog">
                    <div className="modal-content clearfix bg-content-sm">
                      <h4
                          className="modal-title title divider-3 text-dark"
                          id={"premiumModel-"+index}
                      >
                      </h4>

                      <div className="modal-body ">
                        <div className="card w-75 m-auto">
                          <div className="card-body text-dark col-12">
                            <div style={{textAlign:'end'}}><i className="fa fa-solid fa-lock"></i></div>
                            <div className="d-flex">
                              <div className="col-3">
                                {data.user_profile.user.picture[0] == null ?

                                    <img src={process.env.PUBLIC_URL + "/images/thumbnail/thum-1.jpg"} alt=""
                                         className='border-radius-50' srcSet=""/>
                                    :
                                    <img src={store.mediaUrl + data?.user?.picture[0].image_path} alt=""
                                         style={data.user_profile.pictures_settings == 'visible' || ((data?.user_profile.pictures_settings == 'premimum') && (data?.user_profile.user_subscription != null)) ? {filter: 'blur(0px)'} : {filter: 'blur(8px)'}}
                                         className='border-radius-50' srcSet=""/>
                                }
                              </div>
                              <div className="col">
                                <b>{data?.first_name}</b><br/>
                                <span>{data?.user_profile?.height}, {data?.user_profile?.qualification}, {data?.user_profile?.language}, {data?.user_profile?.country?.name} ,{data?.user_profile.city?.name}</span>
                              </div>
                            </div>
                            <div className="d-block mt-3">
                              <strong>{profileData?.user_plan==null?'Phone: +0932-**** ***':'Phone: '+data?.user_profile.number}</strong>
                              <br/>
                              <strong>{profileData?.user_plan==null?'Email: ****@gmail.com':'Email: '+data?.email}</strong>
                            </div>
                            <hr style={{margin:'10px !important'}}/>
                            <b className="d-flex col-12">
                              <a href={profileData?.user_plan!=null?"https://api.whatsapp.com/send?phone="+data?.user_profile.number+"&text=Hello this is the starting message":"#"} className="col text-success" style={{fontSize:'15px'}}>
                                <i className="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
                              </a>
                              <span className="col text-primary" style={{fontSize:'15px'}}>
                                      <i className="fa fa-comment" aria-hidden="true"></i> Chat
                                    </span>
                              <a target="_blank" href={"tel:"+profileData?.user_plan!=null?data?.user_profile.number:"#"} className="col text-danger" style={{fontSize:'15px'}} >
                                <i className="fa fa-phone" aria-hidden="true"></i> Call
                              </a>
                            </b>
                          </div>
                        </div>

                        <div className="text-center">
                          <Link
                              to='/pricing'
                              className="button  btn btn-theme rounded-sm animated right-icn pl-2"
                          >
                            View Plans
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                    </>
                  ))}

                  </div>
                  <h5 className='p-3 col-12 text-center d-block d-sm-none'>New Matches</h5>
                 
                  <div className="col-sm-4 col-12 m-sm-2 m-0 shadow bg-white">
                  {profiles?.map((data,index) => (
                    <>
                  <div className="col-12 p-4 d-flex rounded">
                
                    <div className="col-3">
                      {data.user.picture[0]==null?
              
                      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='border-radius-50' srcset="" />
                      : 
                       <img src={store.mediaUrl+data?.user?.picture[0].image_path} alt="" style={data.pictures_settings=='visible' ||((data?.pictures_settings=='premimum') && (data?.user_subscription!=null))?{filter: 'blur(0px)'}:{filter: 'blur(8px)'}} className='border-radius-50' srcset="" />
                     } 
                    </div>
                    <div className="col">
                      <b>{data?.user.first_name}</b><br/>
                      <span>{ data?.height}, {data?.language}, {data?.country?.name}, {data?.city?.name}</span>
                    </div>
                    <div className="col-2">
                      <i
                          data-bs-toggle="modal"
                          data-bs-target={"#newMatches-"+index}
                          style={{
                            borderRadius: '100%',
                            fontSize: '28px',
                            border: '2px green solid',
                            padding: '8px 10px 8px 10px',
                            cursor: 'pointer',
                          }}
                          className="fa fa-check-circle text-success"
                          aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <hr className='border-style-groove' />
                      <div
                          className="modal fade"
                          id={"newMatches-"+index}
                          tabIndex="-1"
                          aria-labelledby={"newMatches-"+index}
                          aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content clearfix bg-content-sm">
                            <h4
                                className="modal-title title divider-3 text-dark"
                                id={"newMatches-"+index}
                            >
                            </h4>
                            <div className="modal-body ">
                              <div className="card w-75 m-auto">
                                <div className="card-body text-dark col-12">
                                  <div style={{textAlign:'end'}}><i className="fa fa-solid fa-lock"></i></div>
                                  <div className="d-flex">
                                    <div className="col-3">
                                      {data.user.picture[0] == null ?

                                          <img src={process.env.PUBLIC_URL + "/images/thumbnail/thum-1.jpg"} alt=""
                                               className='border-radius-50' srcSet=""/>
                                          :
                                          <img src={store.mediaUrl + data?.user?.picture[0].image_path} alt=""
                                               style={data.pictures_settings == 'visible' || ((data?.pictures_settings == 'premimum') && (data?.user_subscription != null)) ? {filter: 'blur(0px)'} : {filter: 'blur(8px)'}}
                                               className='border-radius-50' srcSet=""/>
                                      }
                                    </div>
                                    <div className="col">
                                      <b>{data?.user.first_name}</b><br/>
                                      <span>{data?.height}, {data?.qualification}, {data?.language}, {data?.country?.name} ,{data?.city?.name}</span>
                                    </div>
                                  </div>
                                  <div className="d-block mt-3">
                                    <strong>{profileData?.user?.user_plan.length==0?'Phone: +0932-**** ***':'Phone: '+data?.number}</strong>
                                    <br/>
                                    <strong>{profileData?.user?.user_plan.length==0?'Email: ****@gmail.com':'Email: '+data?.user?.email}</strong>
                                  </div>
                                  <hr style={{margin:'10px !important'}}/>
                                  <b className="d-flex col-12">
                                    <a href={profileData?.user?.user_plan.length!=0?"https://api.whatsapp.com/send?phone="+data?.number+"&text=Hello this is the starting message":"#"} className="col text-success" style={{fontSize:'15px'}}>
                                      <i className="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
                                    </a>
                                    <span className="col text-primary" style={{fontSize:'15px'}}>
                                      <i className="fa fa-comment" aria-hidden="true"></i> Chat
                                    </span>
                                    <a target="_blank" href={"tel:"+profileData?.user?.user_plan.length!=0?data?.number:"#"} className="col text-danger" style={{fontSize:'15px'}} >
                                      <i className="fa fa-phone" aria-hidden="true"></i> Call
                                    </a>
                                  </b>
                                </div>
                              </div>

                              <div className="text-center">
                                <Link
                                    to='/pricing'
                                    className="button  btn btn-theme rounded-sm animated right-icn pl-2"
                                >
                                  View Plans
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}


  </div>
  <h5 className='p-3 col-12 text-center d-block d-sm-none'>Recommended Matches</h5>
   
  <div className="col-sm-4 col-12 m-sm-2 m-0 shadow bg-white">

  {profiles?.map((data,index) => (
                    <>
                  <div className="col-12 p-4 d-flex rounded">
                
                    <div className="col-3">
                      {data.user.picture[0]==null?
              
                      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='border-radius-50' srcset="" />
                      : 
                       <img src={store.mediaUrl+data?.user?.picture[0].image_path} alt="" style={data.pictures_settings=='visible' ||((data?.pictures_settings=='premimum') && (data?.user_subscription!=null))?{filter: 'blur(0px)'}:{filter: 'blur(8px)'}} className='border-radius-50' srcset="" />
                     } 
                    </div>
                    <div className="col">
                      <b>{data?.user.first_name}</b><br/>
                      <span>{ data?.height}, {data?.language}, {data?.country?.name}, {data?.city?.name}</span>
                    </div>
                    <div className="col-2">
                      <i
                          data-bs-toggle="modal"
                          data-bs-target={"#myMatches-"+index}
                          style={{
                            borderRadius: '100%',
                            fontSize: '28px',
                            border: '2px green solid',
                            padding: '8px 10px 8px 10px',
                            cursor: 'pointer',
                          }}
                          className="fa fa-check-circle text-success"
                          aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                  <hr className='border-style-groove' />
                      <div
                          className="modal fade"
                          id={"myMatches-"+index}
                          tabIndex="-1"
                          aria-labelledby={"myMatches-"+index}
                          aria-hidden="true"

                      >
                        <div className="modal-dialog " >
                          <div className="modal-content clearfix bg-content-sm">

                            <h4
                                className="modal-title title divider-3 text-dark"
                                id={"myMatches-"+index}
                            >
                            </h4>
                            <div className="modal-body ">
                              <div className="card w-75 m-auto">
                                <div className="card-body text-dark col-12">
                                  <div style={{textAlign:'end'}}><i className="fa fa-solid fa-lock"></i></div>
                                  <div className="d-flex">
                                  <div className="col-3">
                                    {data.user.picture[0] == null ?

                                        <img src={process.env.PUBLIC_URL + "/images/thumbnail/thum-1.jpg"} alt=""
                                             className='border-radius-50' srcSet=""/>
                                        :
                                        <img src={store.mediaUrl + data?.user?.picture[0].image_path} alt=""
                                             style={data.pictures_settings == 'visible' || ((data?.pictures_settings == 'premimum') && (data?.user_subscription != null)) ? {filter: 'blur(0px)'} : {filter: 'blur(8px)'}}
                                             className='border-radius-50' srcSet=""/>
                                    }
                                  </div>
                                  <div className="col">
                                    <b>{data?.user.first_name}</b><br/>
                                    <span>{data?.height}, {data?.qualification}, {data?.language}, {data?.country?.name} ,{data?.city?.name}</span>
                                  </div>
                                  </div>
                                  <div className="d-block mt-3">
                                      <strong>{profileData?.user?.user_plan.length==0?'Phone: +0932-**** ***':'Phone: '+data?.whatsapp_number}</strong>
                                    <br/>
                                      <strong>{profileData?.user?.user_plan.length==0?'Email: ****@gmail.com':'Email: '+data?.user?.email}</strong>
                                  </div>
                                  <hr style={{margin:'10px !important'}}/>
                                  <b className="d-flex col-12">
                                    <a href={profileData?.user?.user_plan.length!=0?"https://api.whatsapp.com/send?phone="+data?.number+"&text=Hello this is the starting message":"#"} className="col text-success" style={{fontSize:'15px'}}>
                                      <i className="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
                                    </a>
                                    <span className="col text-primary" style={{fontSize:'15px'}}>
                                      <i className="fa fa-comment" aria-hidden="true"></i> Chat
                                    </span>
                                    <a target="_blank" href={"tel:"+profileData?.user?.user_plan.length!=0?data?.number:"#"} className="col text-danger" style={{fontSize:'15px'}} >
                                      <i className="fa fa-phone" aria-hidden="true"></i> Call
                                    </a>
                                  </b>
                                </div>
                              </div>

                              <div className="text-center">
                                <Link
                                    to='/pricing'
                                    className="button  btn btn-theme rounded-sm animated right-icn pl-2"
                                >
                                  View Plans
                                </Link>
                              </div>
                            </div>

                          </div>

                        </div>
                      </div>
                    </>
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