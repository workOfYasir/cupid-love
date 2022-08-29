import React,{ useEffect,useState ,useContext} from 'react'
import axios from 'axios'; 
import { Observer } from "mobx-react-lite";
import { StoreContext } from "./../../../../store";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Profile = () => {
  const store = useContext(StoreContext);
  const [editFields,setEditFields] = useState(true)
  const fieldDisablity = () => {
    setEditFields(!editFields)
  };
  const [profileData,setProfile] = useState()
    const [formValue, setformValue] = React.useState({
        id:profileData?.id,
        gender: '',
        material_status: '',
        first_name:'',
        last_name:'',
        dob:'',
        height: '',
        id:'',
        disability: '',
        blood_group: '',
        cast: '',
        star:'',
        hobbies: '',
        interest: '',
        edjucation: '',
        company_name:'',
        work_with: '',
        work_as: '',
        income: '',
        country:'',
        state:'',
        city:'',
        town:'',
        religion:'',
        sector:'',
        living_since: '',
        description: '',
        phone_number: '',
        whatsapp_number: ''
      });
const url=`${store.url}`;
  const handleChange = (event) => {
      setformValue({
        ...formValue,
        [event.target.name]: event.target.value
      });
     
    }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const token = localStorage.getItem('accessToken')
    const user = localStorage.getItem('user')
    const formData = new FormData();
// console.log('formValue',user['id']);
const user_id = JSON.parse(user)['id'];
    formData.append('data[id]',profileData?.id)
    formData.append('user[first_name]',formValue.first_name)
    formData.append('user[last_name]',formValue.last_name)
    formData.append('data[gender]',formValue.gender)
    // formData.append('data[gender]','male')
    formData.append('data[marital_status]',formValue.material_status)
    formData.append('data[height]',formValue.height)
    formData.append('data[disability]',formValue.disability)
    formData.append('data[blood_group]',formValue.blood_group)
    formData.append('data[cast_id]',formValue.cast)
    formData.append('data[hobbies]',formValue.hobbies)
    formData.append('data[interest]',formValue.interest)
    formData.append('data[qualification]',formValue.edjucation)
    formData.append('data[working_with]',formValue.work_with)
    formData.append('data[job]',formValue.job)
    formData.append('data[star]',formValue.star)
    formData.append('data[annual_income]',formValue.income)
    formData.append('data[town]',formValue.town)
    formData.append('data[about]',formValue.description)
    formData.append('data[number]',formValue.number)
    formData.append('data[whatsapp_number]',formValue.whatsapp_number)
    console.log('formData=============================>',formData);
    try {
   
    const headers = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}` 
  };
  console.log(formData);
      const response =   await axios({

        method: "post",
        url: `${store.url}update-profile`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data", 'Authorization': `Bearer ${token}`  },
        
    }).then((response)=>{
 
            const data = response.data
            
            // setProfile(data[0])
        })
        // navigate('/pricing')
      } catch(error) {
        console.log(error)
      }
  }



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

  useEffect(()=>{
    const token = localStorage.getItem('accessToken')
    const user = localStorage.getItem('user')

    getProfile(token,JSON.parse(user).id)
    
  },[profileData?.user.picture.image_name])
  return (
    <Observer>
    {()=>(
        <>
        <div className="col-12 p-3 h4 shadow rounded bg-white">
          <div className="container mt-3">
          {profileData?.user.first_name+' '+profileData?.user.last_name}
          </div>

        </div>
        <div className="container mt-3 pt-5">
        <div className="col-12 d-sm-flex d-block">
   
          <div className="col-sm-4 col-12">
          <div className="card bg-dark text-white">
          {profileData?.user.picture==null ?
          <img src="images/team/team-v1.png" className="card-img-top" alt="..."/>
          :
          <Carousel showThumbs={false}>
          {profileData?.user.picture.map((image) => (
            <div>
          <img src={store.mediaUrl+image?.image_path}  style={profileData?.pictures_settings=='visible' ||((profileData?.pictures_settings=='premimum') && (profileData?.user_subscription!=null))?{filter: 'blur(0px)'}:{filter: 'blur(8px)'}} className="card-img-top" alt="..."/>
       
          </div>
        ))}
         
      </Carousel>
          
          }

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
        {(profileData?.cast==null)?'':profileData?.cast.name}
        </div>


        
          </div>
          <div className="col-6 d-flex pt-4">
        <div className="col-6 ">
National
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
        {(profileData?.country==null)?'':profileData?.country.name}

        </div>
        <div className="col-6 ">
Religion
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>

{(profileData?.religion==null)?'':profileData?.religion.name}

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
      <form onSubmit={handleSubmit}>
        
        <span onClick={fieldDisablity}>edit</span>
        <div className="user-dashboard-info-box bg-white">
          <div className="section-title-02 mb-2 mt-4 d-grid">
            <h4>Basic Information</h4>
          </div>
          
            <div className="row shadow rounded-lg p-3">
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Your First Name</label>
                <input type="text" disabled={editFields} onChange={handleChange} name='first_name' className="form-control p-0" value={profileData?.user.first_name}/>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Your Last Name</label>
                <input type="text" disabled={editFields} onChange={handleChange} name='last_name' className="form-control p-0" value={profileData?.user.last_name}/>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Email</label>
                <input type="email" disabled={editFields} onChange={handleChange}  name='email' className="form-control p-0" value={profileData?.user.email}/>
              </div>
              <div className=" mb-3 col-md-6 datetimepickers">
                <label className="form-label text-dark">Date of birth</label>
                <div className="input-group date" id="datetimepicker-01" data-target-input="nearest">
                  <input type="text" disabled={editFields} onChange={handleChange}name='dob' className="form-control p-0 datetimepicker-input" value={profileData?.date_of_Birth} data-target="#datetimepicker-01"/>
                  <div className="input-group-append d-flex" data-target="#datetimepicker-01" data-toggle="datetimepicker">
                    <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                  </div>
                </div>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Material Status</label>
                
                <select className="form-select" style={editFields==true?{display:'none'}:{display:'block'}} onChange={handleChange} name="material_status" aria-label="Default select example" id="">
                      <option>Select one</option>
                      <option value="Single">Single</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Window">Window</option>
                      <option value="Married">Married</option>
                  </select>
                <input type="text" disabled={true}  style={editFields==false?{display:'none'}:{display:'block'}} onChange={handleChange} className="form-control p-0" value={profileData?.martial_status}/>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Phone</label>
                <input type="text" disabled={editFields} name='phone_number' onChange={handleChange} className="form-control p-0" value={profileData?.number} />
              </div>
              <div className=" mb-3 col-md-6">
                <label className="d-block mb-3">Gender</label>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" name='gender' value='Male' checked={(profileData?.gender=="Male")?"checked":""} type="radio" id="customRadio1"/>
                    <label className="form-check-label" for="customRadio1">{profileData?.gender}</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name='gender' value='Female' checked={(profileData?.gender=="Female")?"checked":""} id="customRadio2" />
                    <label className="form-check-label" for="customRadio2">Female</label>
                  </div>
              </div>

              <div clas sName=" mb-3 col-md-6">
                <label className="form-label text-dark">Hobbies</label>
                <input type="text" disabled={editFields} name='hobbies' onChange={handleChange} className="form-control p-0" value={profileData?.hobbies}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Interest</label>
                <input type="text" disabled={editFields} name='interest' onChange={handleChange} className="form-control p-0" value={profileData?.interest}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Star</label>
                <input type="text" disabled={editFields} name='star' onChange={handleChange} className="form-control p-0" value={profileData?.star}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Disability</label>
                <input type="text" disabled={editFields} name='disability' onChange={handleChange} className="form-control p-0" value={profileData?.disability}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Blood Group</label>
                <input type="text" disabled={editFields} name='blood_group' onChange={handleChange} className="form-control p-0" value={profileData?.blood_group}/>
              </div>
              </div>
              </div>
              <div className="user-dashboard-info-box bg-white">
          <div className="section-title-02 mb-2 mt-4 d-grid">
            <h4>Professional</h4>
          </div>
          <div className="row shadow rounded-lg p-3">
          <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Job Title</label>
                <input type="text" disabled={editFields} name='work_as' onChange={handleChange} className="form-control p-0" value={profileData?.job}/>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Income</label>
                <input type="text" disabled={editFields} name='income' onChange={handleChange} className="form-control p-0" value={profileData?.annual_income}/>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Company Name</label>
                <input type="text" disabled={editFields} name='company_name' onChange={handleChange} className="form-control p-0" value={profileData?.company_name}/>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Working With</label>
                <input type="text" disabled={editFields} name='work_with' onChange={handleChange} className="form-control p-0" value={profileData?.working_with}/>
              </div>
              </div>
          </div>
              <div className="user-dashboard-info-box bg-white">
          <div className="section-title-02 mb-2 mt-4 d-grid">
            <h4>Location</h4>
          </div>
          <div className="row shadow rounded-lg p-3">
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Country</label>
                <input type="text" disabled={editFields} name='country' onChange={handleChange} className="form-control p-0" value={(profileData?.country==null)?'':profileData?.country.name}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">State</label>
                <input type="text" disabled={editFields} name='state' onChange={handleChange} className="form-control p-0" value=  {(profileData?.state==null)?'':profileData?.state.name}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">City</label>
                <input type="text" disabled={editFields} name='city' onChange={handleChange} className="form-control p-0" value=  {(profileData?.city==null)?'':profileData?.city.name}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Town</label>
                <input type="text" disabled={editFields} name='town' onChange={handleChange} className="form-control p-0" value={profileData?.town}/>
              </div>
              </div>
              </div>
              <div className="user-dashboard-info-box bg-white">
          <div className="section-title-02 mb-2 mt-4 d-grid">
            <h4>Islamic </h4>
          </div>
          <div className="row shadow rounded-lg p-3">
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Religion</label>
                <input type="text" disabled={editFields} name='religion' onChange={handleChange} className="form-control p-0" value=  {(profileData?.religion==null)?'':profileData?.religion.name}/>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Sector</label>
                <input type="text" disabled={editFields} name='sector' onChange={handleChange} className="form-control p-0" value=  {(profileData?.sector==null)?'':profileData?.sector.name}/>
              </div>


              <div className=" mb-0 col-md-12">
                <label className="form-label text-dark">Description</label>
                <textarea className="form-control p-0" name='description' disabled={editFields} onChange={handleChange} rows="5" placeholder={profileData?.about}>{profileData?.about}</textarea>
              </div>
            </div>
            </div>
            <button type='submit' className="btn btn-md btn-primary" >Edit Settings</button>
        </form>
         {/* <div className="user-dashboard-info-box bg-white">
          <div className=" mb-0 pt-5">
            <h4 className="mb-3">Address</h4>
            <div className=" mb-3 shadow rounded-lg p-3">
              <label className="form-label text-dark">Enter Your Location</label>
              <input type="text" disabled={editFields} onChange={handleChange} className="form-control p-0" value={profileData?.town+', '+  (profileData?.city==null)?'':profileData?.city.name+', '+  (profileData?.state==null)?'':profileData?.state.name+' '+  (profileData?.country==null)?'':profileData?.country.name}/>
            </div>
             <div className="company-address-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590414!3d-37.817323442021134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1559039794237!5m2!1sen!2sin"  height="400" allowfullscreen></iframe>
            </div>
          </div>
        </div> */}
        
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