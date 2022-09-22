import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "./../../../../store";
import SearchedMatches from "../../Matches/SearchedMatches/SearchedMatches";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Observer } from "mobx-react-lite";

const AdvanceSearch = () => {  
  const [profileData, setProfile] = useState();
  const [editFields, setEditFields] = useState(true);
  const store = useContext(StoreContext);
  const [country, setCountries] = useState();
  const [state, setStates] = useState();
  const [city, setCities] = useState();
  const [cast, setCasts] = useState();
  const [religion, setReligions] = useState();
  const [sector, setSectors] = useState();

  const [formValue, setformValue] = React.useState({
    min_age:"",
    max_age:"",
    country:"",
    state:"",
    religion:"",
    sector:"",
    cast:"",
    first_name:"",
    last_name:"",
    gender:"",
    age:"",
    date_of_Birth:"",
    min_height:"",
    max_height:"",
    On_behalf:"",
    star:"",
    disability:"",
    blood_group:"",
    current_residency_country:"",
    city:"",
    town:"",
    number:"",
    whatsapp_number:"",
    hobbies:"",
    interest:"",
    qualification:"",
    working_with:"",
    company_name:"",
    job:"",
    no_of_brothers:"",
    no_of_sister:"",
    family_type:"",
    father_status:"",
    marital_status:"",
    mother_status:"",
    brother_marital_status:"",
    family_address:"",
    martial_status:"",
    living_witjobh_family:"",
    income:"",
    about:"",
    profile_viewed:"",
    living_with_family:"",
    view_contacts:"",
    pictures_settings:"",
  });

  const navigate = useNavigate();
  const handleSearch = () => {
    setTimeout(function() {
      navigate('/searched/profile')
   }, 500);
  }
  const fieldDisablity = () => {
    setEditFields(!editFields);
  };
  const handleToast = ()=>{
    toast.error('You are not member')
  }
  async function profileView(viewed_id) {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");
    const formData = new FormData();
    const viewer_id = JSON.parse(user)["id"];
    formData.append("viewer_id", viewer_id);
    formData.append("viewed_id", viewed_id);
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      };
      console.log(formData);
      const response = await axios({
        method: "post",
        url: `${store.url}recent-visit`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
     
        const data = response.data;
        navigate("/public/profile/" + viewed_id);
      });
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    const token = localStorage.getItem('accessToken')

    const formData = new FormData();
    formData.append('min_age',formValue.min_age)
    formData.append('max_age',formValue.max_age)    
    formData.append('min_height',formValue.min_height)
    formData.append('max_height',formValue.max_height)
    formData.append("country_id",formValue.country_id)
    formData.append("state_id",formValue.state_id)
    formData.append("city_id",formValue.city_id)
    formData.append("religion_id",formValue.religion_id)
    formData.append("sector_id",formValue.sector_id)
    formData.append("cast_id",formValue.cast_id)
    formData.append("first_name",formValue.first_name)
    formData.append("last_name",formValue.last_name)
    formData.append("gender",formValue.gender)
    formData.append("date_of_Birth",formValue.date_of_Birth)
    formData.append("marital_status",formValue.marital_status)
    formData.append("min_height",formValue.min_height)
    formData.append("max_height",formValue.max_height)
    formData.append("On_behalf",formValue.On_behalf)
    formData.append("star",formValue.star)
    formData.append("disability",formValue.disability)
    formData.append("blood_group",formValue.blood_group)
    formData.append("current_residency_country",formValue.current_residency_country)
    formData.append("city",formValue.city)
    formData.append("town",formValue.town)
    formData.append("number",formValue.number)
    formData.append("whatsapp_number",formValue.whatsapp_number)
    formData.append("hobbies",formValue.hobbies)
    formData.append("interest",formValue.interest)
    formData.append("qualification",formValue.qualification)
    formData.append("working_with",formValue.working_with)
    formData.append("company_name",formValue.company_name)
    formData.append("job",formValue.job)
    formData.append("no_of_brothers",formValue.no_of_brothers)
    formData.append("no_of_sister",formValue.no_of_sister)
    formData.append("family_type",formValue.family_type)
    formData.append("father_status",formValue.father_status)
    formData.append("mother_status",formValue.mother_status)
    formData.append("brother_marital_status",formValue.brother_marital_status)
    formData.append("family_address",formValue.family_address)
    formData.append("martial_status",formValue.martial_status)
    formData.append("living_with_family",formValue.living_with_family)
    formData.append("income",formValue.income)
    formData.append("about",formValue.about)
    formData.append("profile_viewed",formValue.profile_viewed)
    formData.append("view_contacts",formValue.view_contacts)
    formData.append("pictures_settings",formValue.pictures_settings)

    console.log(formData);
    try {

  console.log(formData);
      const response =   await axios({

        method: "post",
        url: `${store.url}get-advance-search`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data", 'Authorization': `Bearer ${token}`  },
        
    }).then((response)=>{
       
            const data = response.data

            if(data[0]["profiles"][0]!=null){
              store.setMatchesAdvanceVisibility(true)
              console.log('setSectors==================>',data[0]["profiles"][0]);
              setProfile(data[0]["profiles"]);
              toast.success('Data Found')
            }else{
              toast.error('Data Not Found')
            }
            // setProfile(data[0])
        })
        // navigate('/pricing')
      } catch(error) {
        console.log(error)
      }
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
    if (event.target.name == "country") {
      console.log(event.target.value);

      states(event.target.value);
    } else if (event.target.name == "state") {
      cities(event.target.value);
    }
  };
  const religions = async () => {
    try {
      axios.get(`${store.url}get-religions`, {}).then((response) => {
        const data = response.data.religions;
        setReligions(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const countries = async () => {
    try {
      axios.get(`${store.url}get-countrys`, {}).then((response) => {
        const data = response.data[0].countrys;
        setCountries(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const states = async (country_id) => {
    try {
      console.log("in function", country_id);
      var statesFormData = new FormData();
      statesFormData.append("country_id", country_id);
      axios({
        method: "post",
        url: `${store.url}get-states-by-country`,
        data: statesFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        const data = response.data.states;
        setStates(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const cities = async (state_id) => {
    try {
      var citiesFormData = new FormData();
      citiesFormData.append("state_id", state_id);
      axios({
        method: "post",
        url: `${store.url}get-cities-by-state`,
        data: citiesFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        const data = response.data.cities;
        setCities(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  const sectors = async () => {
    try {
      axios.get(`${store.url}get-sectors`, {}).then((response) => {
        const data = response.data.sectors;
        setSectors(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(formValue);
    const token = localStorage.getItem("accessToken");

    countries();
    sectors();
    religions();
  }, []);
  return (
    <Observer>
    {()=>(
        <>
             <div className="container mt-3">
              <form onSubmit={handleSubmit} style={store.matchesAdvanceVisibility==false?{display:"block"}:{display:"none"}}>
          <div className="row">
            <div className="col-4">
                Age
            </div>
            <div className="col-8 d-flex">
              <select className="col-2 form-control " onChange={handleChange} name="min_age" id="">
                <option>Doesn't Matter</option>
              <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
              </select>
              <span className='px-2 align-self-center' >To</span>
              <select className="col-2 form-control " onChange={handleChange} name="max_age" id="">
              <option>Doesn't Matter</option>
              <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Height
            </div>
            <div className="col-8 d-flex">
              <select className="col-2 form-control " onChange={handleChange} name="min_height" id="">
              <option>Doesn't Matter</option>
                <option value="5.1ft">5.1ft</option>
                <option value="5.2ft">5.2ft</option>
                <option value="5.3ft">5.3ft</option>
                <option value="5.4ft">5.4ft</option>
                <option value="5.5ft">5.5ft</option>
                <option value="5.6ft">5.6ft</option>
                <option value="5.7ft">5.7ft</option>
                <option value="5.8ft">5.8ft</option>
                <option value="5.9ft">5.9ft</option>
                <option value="6.0ft">6.0ft</option>
                <option value="6.1ft">6.1ft</option>
                <option value="6.2ft">6.2ft</option>
                <option value="6.3ft">6.3ft</option>
                <option value="6.4ft">6.4ft</option>
              </select>
              <span className='px-2 align-self-center' >To</span>
              <select className="col-2 form-control " onChange={handleChange} name="max_height" id="">
              <option>Doesn't Matter</option>
                <option value="5.1ft">5.1ft</option>
                <option value="5.2ft">5.2ft</option>
                <option value="5.3ft">5.3ft</option>
                <option value="5.4ft">5.4ft</option>
                <option value="5.5ft">5.5ft</option>
                <option value="5.6ft">5.6ft</option>
                <option value="5.7ft">5.7ft</option>
                <option value="5.8ft">5.8ft</option>
                <option value="5.9ft">5.9ft</option>
                <option value="6.0ft">6.0ft</option>
                <option value="6.1ft">6.1ft</option>
                <option value="6.2ft">6.2ft</option>
                <option value="6.3ft">6.3ft</option>
                <option value="6.4ft">6.4ft</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Martial Status
            </div>
            <div className="col-8">
              <select className="form-control " onChange={handleChange} name="martial_status" id=""><option>Doesn't Matter</option>
              <option value="Single">Single</option>
              <option value="Divorced">Divorced</option>
              <option value="Window">Window</option>
              <option value="Married">Married</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Religion
            </div>
            <div className="col-8">
              <select className="form-control " onChange={handleChange} name="religion" id=""><option>Doesn't Matter</option>
              {religion?.map((data) => (
                <option value={data.id}>
                  {data.name}
                </option>
              ))}
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Mother Tongue
            </div>
            <div className="col-8">
              <select className="form-control " onChange={handleChange} name="" id=""><option>Doesn't Matter</option>
                <option>Urdu</option>
                <option>Punjabi</option>
                <option>English</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Sector
            </div>
            <div className="col-8">
              <select className="form-control " onChange={handleChange} name="sector" id=""><option>Doesn't Matter</option>
              {sector?.map((data) => (
                <option value={data.id}>
                  {data.name}
                </option>
              ))}
              </select>
            </div>
          </div>
          <div className="row">  
            <div className="accordion accordion-style" id="accordion-Two">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Location & Grew up in Details <i className="fas fa-chevron-down fa-xs"></i></button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion-Two">
                  <div className="accordion-body row p-0">
                  <div className="col-4 pt-2">
                Country Living In
                </div>
                <div className="col-8 pt-2">
                  <select className="form-control " onChange={handleChange} name="country" id=""><option>Doesn't Matter</option>
                  {country?.map((data) => (
                    <option value={data.id}>
                      {data.name}
                    </option>
                  ))}
                  </select>
                </div>
                <div className="col-4 pt-2">
                State Living In
                </div>
                <div className="col-8 pt-2">
                  <select className="form-control " onChange={handleChange} name="state" id=""><option>Doesn't Matter</option>
                  {state?.map((data) => (
                    <option value={data.id}>
                      {data.name}
                    </option>
                  ))}
                  </select>
                </div>
                <div className="col-4 pt-2">
                City / District
                </div>
                <div className="col-8 pt-2">
                  <select className="form-control " onChange={handleChange} name="city" id=""><option>Doesn't Matter</option>
                  {city?.map((data) => (
                    <option value={data.id}>
                      {data.name}
                    </option>
                  ))}
                  </select>
                </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Education & Professional Details <i className="fas fa-chevron-down fa-xs"></i></button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion-Two">
                  <div className="accordion-body row p-0">
                  <div className="col-4 pt-2">
                  Qualification
                  </div>
                  <div className="col-8 pt-2">
                    <select className="form-control " onChange={handleChange} name="qualification" id=""><option>Doesn't Matter</option>
                    <option value="PHd">PHd</option>
                                    <option value="MS/M-Phil">MS/M-Phil</option>
                                    <option value="BS Honrs">BS Honrs</option>
                                    <option value="BSC">BSC</option>
                    </select>
                  </div>
                  <div className="col-4 pt-2">
                  Education Area
                  </div>
                  <div className="col-8 pt-2">
                    <select className="form-control " onChange={handleChange} name="" id=""><option>Doesn't Matter</option>
                      <option>Art</option>
                      <option>Science</option>
                      <option>Computer</option>
                      <option>Math</option>
                      <option>Chemistry</option>
                      <option>Physics</option>
                    </select>
                  </div>
                  <div className="col-4 pt-2">
                  Working With
                  </div>
                  <div className="col-8 pt-2">
                    <select className="form-control " onChange={handleChange} name="working_with" id=""><option>Doesn't Matter</option>
                    <option value="Govt Job">Govt Job</option>
                    <option value="Private Job">Private Job</option>
                    <option value="Business">Business</option>
                    </select>
                  </div>
                  <div className="col-4 pt-2">
                  Profession
                  </div>
                  <div className="col-8 pt-2">
                    <select className="form-control " onChange={handleChange} name="job" id=""><option>Doesn't Matter</option>
                    <option value="Banking">Banking</option>
                    <option value="Software Developer">Software Developer</option>
                    <option value="Engineer">Engineer</option>
                    
                    </select>
                  </div>
                  <div className="col-4 pt-2">
                  Income 
                  </div>
                  <div className="col-8 pt-2">
                    <select className="form-control " onChange={handleChange} name="income" id=""><option>Doesn't Matter</option>
                    <option value="10000-20000">10000-20000</option>
                    <option value="20000-30000">20000-30000</option>
                    <option value="30000-40000">30000-40000</option>
                    <option value="40000-50000">40000-50000</option>
                    <option value="50000-60000">50000-60000</option>
                    <option value="60000-70000">60000-70000</option>
                    <option value="70000-80000">70000-80000</option>
                    <option value="80000-90000">80000-90000</option>
                    <option value="90000-100000">90000-100000</option>
                    <option value="100000+">100000 +</option>
                    </select>
                  </div>
                  </div>
                </div>
              </div>
               {/*   <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Search using Keywords <i className="fas fa-chevron-down fa-xs"></i></button>
                </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion-Two">
                  <div className="accordion-body row p-0 d-block">
                  <div className="col-12 pt-2">
                  For very specific results, filter your search using keywords.
                  </div>
                  <div className="col-12 pt-2">
                    <input type="text" className="form-control" placeholder="e.g Lahore, 20-22, MBA"/>
                  </div>
                  </div>
                </div>
              </div> */}
              <div className="row pt-3">
            <div className="col-4">
                  Photo Setting
              </div>
              <div className="col-8 d-flex">
                <div className="form-check form-check-inline">
                
                <input className="form-check-input" type="checkbox" onChange={handleChange} name="photo_visibility" id="" value="checkedValue"/> Visible to all
            
                </div>
                <div className="form-check form-check-inline">
                  
                  <input className="form-check-input" type="checkbox" onChange={handleChange} name="photo_visibility" id="" value="checkedValue"/> Protected Picture
              
                </div>
              </div>
           
          </div>
              <div className="row pt-1">
            <div className="col-4">
            Do Not Show
              </div>
              <div className="col-8 d-flex">
                <div className="form-check form-check-inline">
                
                <input className="form-check-input" type="checkbox" onChange={handleChange} name="visited_profiles" id="" value="checkedValue"/>  Profiles that I have already Viewed
            
                </div>
                <div className="form-check form-check-inline">
                  
                  <input className="form-check-input" type="checkbox" onChange={handleChange} name="profiles_visited_me" id="" value="checkedValue"/>  Profiles that have Filtered me out
              
                </div>
              </div>
           
          </div>
          <div className="col-12">
            <b>Save upto 5 Searches</b>
          </div>
          {/* <div className="row pt-1">
            <div className="col-4">
            Save Search as
            </div>
            <div className="col-8 d-flex">
              <input type="text" placeholder='e.g Lahore, 20-22' className='form-control col-6. />
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
            Email me new Results
            </div>
            <div className="col-8 d-flex">
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" onChange={handleChange} name="email" id="" value="checkedValue" /> Daily
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" onChange={handleChange} name="email" id="" value="checkedValue" /> Twice A Week
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" onChange={handleChange} name="email" id="" value="checkedValue" /> Once A Week
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" onChange={handleChange} name="email" id="" value="checkedValue" /> Never
                </label>
              </div>
            </div> onClick={handleSearch}
          </div> */}
            </div>
          </div>
          <div className="col-12 text-center pt-2">
            <button type="submit" className='button col-4 btn btn-theme rounded-sm animated right-icn'>Search</button>
          </div>
          </form>
          <div className="col" style={store.matchesAdvanceVisibility==true?{display:"block"}:{display:"none"}}>
                  {profileData?.map((data) => (
                    <div
                      className="employers-list mb-5 shadow rounded p-0 pt-sm-0 pt-5 "
                    >
                      <div className="d-sm-none d-block pt-sm-0 pt-5">
                        {" "}
                        &nbsp;
                        <br /> &nbsp;
                        <br />
                      </div>

                      {data.user.picture[0] != null ? (
                        <>
                          <div className="col-4 offset-sm-0 offset-4 pt-sm-0 pt-5 ">
                            <Carousel showThumbs={false}>
                              {data?.user.picture.map((image) => (
                                <div>
                                  <img
                                    className="w-75 b-sm-radius d-sm-none d-block m-auto  pt-sm-0 pt-5"
                                    style={
                                      data.pictures_settings == "visible" ||
                                      (data.pictures_settings == "premimum" &&
                                        data.user_subscription != null)
                                        ? { filter: "blur(0px)" }
                                        : { filter: "blur(8px)" }
                                    }
                                    src={store.mediaUrl + image?.image_path}
                                    alt=""
                                  />
                                  <img
                                    className="img-fluid b-sm-radius d-sm-block d-none"
                                    style={
                                      data.pictures_settings == "visible" ||
                                      (data.pictures_settings == "premimum" &&
                                        data.user_subscription != null)
                                        ? { filter: "blur(0px)" }
                                        : { filter: "blur(8px)" }
                                    }
                                    src={store.mediaUrl + image?.image_path}
                                    alt=""
                                  />
                                </div>
                              ))}
                            </Carousel>
                          </div>
                          <div className="d-block d-sm-none">
                            <div className="text-sm-dark text-white m-auto">
                              No Photo Added
                            </div>
                            <button
                              id="submit"
                              onChange={handleChange} name="submit"
                              type="submit"
                              value="Send"
                              className="button btn-lg btn-theme rouneded-sm animated right-icn mb-0"
                            >
                              <span>
                                Request a Photo{" "}
                                <i
                                  className="glyph-icon flaticon-hearts"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="col-4 offset-sm-0 offset-4 pt-sm-0 pt-5 ">
                            <img
                              className="w-75 b-sm-radius d-sm-none d-block m-auto  pt-sm-0 pt-5"
                              src={
                                window.location.origin +
                                "/images/profile/default.png"
                              }
                              alt=""
                            />
                            <img
                              className="img-fluid b-sm-radius d-sm-block d-none"
                              src={
                                window.location.origin +
                                "/images/profile/default.png"
                              }
                              alt=""
                            />
                          </div>
                          <div className="d-block d-sm-none">
                            <div className="text-sm-dark text-white m-auto">
                              No Photo Added
                            </div>
                            <button
                              id="submit"
                              onChange={handleChange} name="submit"
                              type="submit"
                              value="Send"
                              className="button btn-lg btn-theme rouneded-sm animated right-icn mb-0"
                            >
                              <span>
                                Request a Photo
                                <i
                                  className="glyph-icon flaticon-hearts"
                                  aria-hidden="true"
                                ></i>
                              </span>
                            </button>
                          </div>
                        </>
                      )}
                      <div className="col-sm-5 offset-12 p-2">
                        <div className="col-12 d-flex">
                          <div className="col-sm-8 col-12 d-flex">
                            <div className="col-sm-7 col-6 text-start">
                              <h5 className="d-sm-block d-none">
                                <span style={{ curser:'pointer' }}
                                  onClick={() => {
                                    profileView(data.user_id);
                                  }}
                                >
                                  {data.user.first_name +
                                    " " +
                                    data.user.last_name}
                                </span>
                                {/* <Link to={"/public/profile/"+data.user_id}>{data.user.first_name+' '+data.user.last_name}</Link> */}
                              </h5>
                              <div
                                className="d-sm-none text-sm-dark text-white d-block"
                                style={{ fontSize: "1.125rem" }}
                              >
                                <span
                                  onClick={() => {
                                    profileView(data.user_id);
                                  }}
                                >
                                  {data.user.first_name +
                                    " " +
                                    data.user.last_name}
                                </span>
                                {/* <Link to={"/public/profile/"+data.user_id}> a {data.user.first_name+' '+data.user.last_name}</Link> */}
                              </div>
                            </div>
                            <div className="col-1 d-sm-block d-none">
                              <i class="fa fa-lock" aria-hidden="true"></i>
                            </div>
                            <div className="col-4 d-sm-block d-none">
                              <span class="badge bg-secondary">New</span>
                            </div>
                            <div className="col-sm-3 text-sm-dark text-white col-6 d-sm-none d-block text-start">
                              <i class="fa fa-male" aria-hidden="true"></i>
                              <i class="fa fa-female" aria-hidden="true"></i>
                              You & Her
                            </div>
                          </div>
                          <div className="col-4 d-sm-block d-none text-end text-dark">
                            <div class="dropdown">
                              <a
                                class=" dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              ></a>
                              <ul
                                class="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <li>
                                  <a class="dropdown-item" href="#">
                                    Action
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">
                                    Another action
                                  </a>
                                </li>
                                <li>
                                  <a class="dropdown-item" href="#">
                                    Something else here
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 d-sm-flex d-none">
                          <div className="col-6 "> </div>
                          <div class="dropdown">
                            <a
                              class=" dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="fa fa-male" aria-hidden="true"></i>
                              <i class="fa fa-female" aria-hidden="true"></i>
                              You & Her
                            </a>
                            <ul
                              class="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <a class="dropdown-item" href="#">
                                  Action
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <hr className="col-12 m-2 d-sm-block d-none" />
                        <div className="col-12 d-block ">
                          <div className="col-12 d-flex pt-1">
                            <div className="col-6 text-start text-sm-white text-dark  ">
                              {data.age}
                            </div>
                            <div className="col-6 text-start text-sm-white text-dark ">
                              {data.cast == null ? "" : data.cast.name}
                            </div>
                          </div>
                          <div className="col-12 d-flex pt-1">
                            <div className="col-6 text-start text-sm-white text-dark ">
                              {data.country == null ? "" : data.country.name}
                            </div>
                            <div className="col-6 text-start text-sm-white text-dark ">
                              {data.religion == null ? "" : data.religion.name}
                            </div>
                          </div>

                          <div className="col-12 d-flex pt-1">
                            <div className="col-6 d-sm-block d-none ">
                              {data.qualification}
                            </div>
                            <div className="col-6 d-sm-block d-none">
                              {data.job}
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="col-12 m-2 d-sm-none d-block" />
                      <div className="col-sm-3 d-sm-block d-none p-border text-center">
                        <div className="h-100 b-left text-center text-sm-white text-dark">
                          <div className="col-12 font-style-italic text-sm-white text-dark">
                            Like This Profile
                          </div>
                          <div onClick={fieldDisablity}  style={editFields?{display:"block",textAlign:"center"}:{display:"none"}}>
                          <h1>
                            <i
                              class="fa fa-check-circle text-success"
                              aria-hidden="true"
                            ></i>
                          </h1>
                          Connect Now
                        </div> 
                          {data.user?.user_plan!=null?
                          <>
                        <div className="col-12 text-center" style={editFields?{display:"none"}:{display:"block"}}>
                          { data.user?.user_plan.view_contacts!=null?
                          <>
                          <a href="Tel:923324010410" className="btn px-5 py-1 m-1 btn-white border rounded b-radius" >
                           <i className="fa fa-phone" aria-hidden="true"></i> Call
                          </a>
                          </>
                          :
                          <>
                          <a onClick={handleToast} className="btn px-5 py-1 m-1 btn-white border rounded b-radius" >
                           <i className="fa fa-phone" aria-hidden="true"></i> Call
                          </a>
                          </>}
                          { (data.user?.user_plan.view_contacts!=null || data.user?.user_plan.messages!=null)?<>
                            <a
                          target="_blank"
                          href="https://api.whatsapp.com/send?phone=923324010410&text=Hello this is the starting message"
                           className="btn px-4 py-1 m-1 btn-success border rounded b-radius">
                            <i class="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
                          </a>
                          </>:<>
                          <a
                          href="#" onClick={handleToast}
                           className="btn px-4 py-1 m-1 btn-success border rounded b-radius">
                            <i class="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
                          </a>
                          </>}
                          { ( data.user?.user_plan.messages!=null)?<>
                          <a className="btn px-5 py-1 m-1 btn-white border rounded b-radius">
                          <i class="fa fa-comment" aria-hidden="true"></i> Chat
                          </a>
                          </>:
                          <>
                           <a 
                           onClick={handleToast}
                           className="btn px-5 py-1 m-1 btn-white border rounded b-radius">
                          <i class="fa fa-comment" aria-hidden="true"></i> Chat
                          </a>
                          </>}
                        </div>  
                          </>
                          :
                          <>
                          </>
                          }
                          
                        
                        </div>
                      </div>
                      <div className="d-sm-none d-flex col-12">
                        <div className="col-6 text-left col-8 d-flex flex-column justify-content-center">
                          {" "}
                          Like This Profile
                        </div>
                        <div className="col-6 d-flex">
                          <div className="col-8 d-flex flex-column text-sm-white text-dark justify-content-center">
                            Connect Now
                          </div>
                          <div className="col-2">
                            <i
                              class="fa fa-check-circle text-success"
                              style={{ fontSize: "2.5rem" }}
                              aria-hidden="true"
                            ></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
        </div>
        </>
    )}
    </Observer>
  )
}

export default AdvanceSearch