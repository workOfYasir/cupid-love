import React,{ useLayoutEffect,useState ,useContext} from 'react'
import axios from 'axios'; 
import { Observer } from "mobx-react-lite";
import { StoreContext } from "./../../../../store";




const Profile = () => {
  const store = useContext(StoreContext);
  const [profileData,setProfile] = useState()


  const getProfile = async(access_token,user_id)=>{
    try {
      const userId = new FormData();
      userId.append("id", user_id)
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
            
            setProfile(data[0])
        })

      } catch(error) {
        console.log(error)
      }
  }

 
  
  useLayoutEffect(()=>{
    const token = localStorage.getItem('accessToken')
    const user = localStorage.getItem('user')

    getProfile(token,JSON.parse(user).id)
  },[])
  return (
    <Observer>
    {()=>(
        <>
        <div className="col-12 p-3 h4 shadow rounded bg-white">
          <div className="container mt-3">
          Hamza Ejaz
          </div>

        </div>
        <div className="container mt-3 pt-5">
        <div className="col-12 d-sm-flex d-block">
   
          <div className="col-sm-4 col-12">
          <div className="card bg-dark text-white">
          <img src="images/team/team-v1.png" className="card-img-top" alt="..."/>
          <div className="card-img-overlay">
          
            

          </div>
          <a href="#" className="card-link">Browser</a>
        </div>
          </div>
        <div className="col-sm-8 col-12 text-center p-4 rounded shadow rounded-sm bg-white">
          <div className="col-12">
          <div className="col-6 d-flex pt-4">
        <div className="col-6  ">
Age/Height
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
{profileData?.height}
        </div>
        <div className="col-6 ">
Cast
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
{profileData?.cast.name}
        </div>


        
          </div>
          <div className="col-6 d-flex pt-4">
        <div className="col-6 ">
National
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
{profileData?.country.name}
        </div>
        <div className="col-6 ">
Religion
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
{profileData?.religion.name}
        </div>

          </div>
          <div className="col-6 d-flex pt-4">
        <div className="col-6 ">
Education
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
{profileData?.qualification}
        </div>
        <div className="col-6 ">
Job
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
{profileData?.job}
        </div>
        
          </div>
         
          </div>
        
        </div>
        </div>
        <section>
  <div className="container mt-3">
    <div className="row">
      <div className="col-md-12">
        <div className="user-dashboard-info-box bg-white">
          <div className="section-title-02 mb-2 mt-4 d-grid">
            <h4>Basic Information</h4>
          </div>
          
          <form>
            <div className="row shadow rounded-lg p-3">
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Your Name</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.user.first_name+' '+profileData?.user.last_name}/>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Email</label>
                <input type="email" disabled className="form-control p-0" value={profileData?.user.email}/>
              </div>
              <div className=" mb-3 col-md-6 datetimepickers">
                <label className="form-label text-dark">Date of birth</label>
                <div className="input-group date" id="datetimepicker-01" data-target-input="nearest">
                  <input type="text" disabled className="form-control p-0 datetimepicker-input" value={profileData?.date_of_Birth} data-target="#datetimepicker-01"/>
                  <div className="input-group-append d-flex" data-target="#datetimepicker-01" data-toggle="datetimepicker">
                    <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                  </div>
                </div>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Phone</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.number} />
              </div>
              <div className=" mb-3 col-md-6">
                <label className="d-block mb-3">Gender</label>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" checked={(profileData?.gender=="Male")?"checked":""} type="radio" name="customRadio" id="customRadio1"/>
                    <label className="form-check-label" for="customRadio1">{profileData?.gender}</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" checked={(profileData?.gender=="Female")?"checked":""} name="customRadio" id="customRadio2" />
                    <label className="form-check-label" for="customRadio2">Female</label>
                  </div>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Job Title</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.job}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Hobbies</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.hobbies}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Interest</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.interest}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Star</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.star}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Disability</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.disability}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Blood Group</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.blood_group}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Country</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.country.name}/>
              </div>


              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">City</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.city.name}/>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">State</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.state.name}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark"><i class="fas fa-grin-tongue-wink    "></i></label>
                <input type="text" disabled className="form-control p-0" value={profileData?.town}/>
              </div>


              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Religion</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.religion.name}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Sector</label>
                <input type="text" disabled className="form-control p-0" value={profileData?.sector.name}/>
              </div>


              <div className=" mb-0 col-md-12">
                <label className="form-label text-dark">Description</label>
                <textarea className="form-control p-0" disabled rows="5" placeholder={profileData?.about}>{profileData?.about}</textarea>
              </div>
            </div>
          </form>
        </div>
 
         <div className="user-dashboard-info-box bg-white">
          <div className=" mb-0 pt-5">
            <h4 className="mb-3">Address</h4>
            <div className=" mb-3 shadow rounded-lg p-3">
              <label className="form-label text-dark">Enter Your Location</label>
              <input type="text" disabled className="form-control p-0" value={profileData?.town+', '+profileData?.city.name+', '+profileData?.state.name+' '+profileData?.country.name}/>
            </div>
            {/* <div className="company-address-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590414!3d-37.817323442021134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1559039794237!5m2!1sen!2sin"  height="400" allowfullscreen></iframe>
            </div> */}
          </div>
        </div>
        <a className="btn btn-md btn-primary" href="#">Edit Settings</a>
      </div>
      </div>
    </div>
</section>
        </div>
        
        
        </>
    )}
    </Observer>
  )
}

export default Profile