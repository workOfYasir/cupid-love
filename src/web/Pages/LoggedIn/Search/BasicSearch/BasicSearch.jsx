import React, { useState, useEffect, useContext } from "react";
import { Observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { StoreContext } from "./../../../../store";
import SearchedMatches from "../../Matches/SearchedMatches/SearchedMatches";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BasicSearch = () => {
  const [profileData, setProfile] = useState();
  const store = useContext(StoreContext);
  const [country, setCountries] = useState();
  const [state, setStates] = useState();
  const [city, setCities] = useState();
  const [cast, setCasts] = useState();
  const [religion, setReligions] = useState();
  const [sector, setSectors] = useState();

  const [editFields, setEditFields] = useState(true);
  const [formValue, setformValue] = React.useState({
    max_age: "",
    min_age: "",
    max_height: "",
    min_height: "",
    martial_status:"",
    religion: "",
    sector: "",
    country: "",
    state: "",
    city: "",
    photo_visibility:"",
  });
  const navigate = useNavigate();
  const handleSearch = () => {
      setTimeout(function() {
        navigate('/searched/profile')
    }, 500);
  };
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
    formData.append('marital_status',formValue.martial_status)
    formData.append('min_height',formValue.min_height)
    formData.append('max_height',formValue.max_height)
    formData.append('religion',formValue.religion)
    formData.append('sector',formValue.sector)
    formData.append('country',formValue.country)
    formData.append('state',formValue.state)
    formData.append('city',formValue.city)
    formData.append('photo_visibility',formValue.photo_visibility)
    console.log(formData);
    try {

  console.log(formData);
      const response =   await axios({

        method: "post",
        url: `${store.url}get-basic-search`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data", 'Authorization': `Bearer ${token}`  },
        
    }).then((response)=>{
        
            const data = response.data
            if(data[0]["profiles"][0]!=null){
              store.setMatchesVisibility(true)
              console.log('setSectors==================>',data[0]["profiles"][0]);
              setProfile(data[0]["profiles"]);
              toast.success('Data Found')
            }else{
              toast.error('Data Not Found')
            }

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
          <form onSubmit={handleSubmit} style={store.matchesVisibility==false?{display:"block"}:{display:"none"}}>
          <div className="row">
            <div className="col-4">
                Age
            </div>
            <div className="col-8 d-flex">
              <select className="col-2 form-control "onChange={handleChange} name="min_age" id="">
              <option>Doesn't Matter</option>
              <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
              </select>
              <span className='px-2 align-self-center' >To</span>
              <select className="col-2 form-control "onChange={handleChange} name="max_age" id="">
              <option>Doesn't Matter</option>
              <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
              </select>
            </div>
          </div> 
          <div className="row pt-1">
            <div className="col-4">
                Height
            </div>
            <div className="col-8 d-flex">
              <select className="col-2 form-control "onChange={handleChange} name="min_height" id="">
              <option>Doesn't Matter</option>
                <option value={'5.1ft'}>5.1ft</option>
                <option value={'5.2ft'}>5.2ft</option>
                <option value={'5.3ft'}>5.3ft</option>
                <option value={'5.4ft'}>5.4ft</option>
                <option value={'5.5ft'}>5.5ft</option>
                <option value={'5.6ft'}>5.6ft</option>
                <option value={'5.7ft'}>5.7ft</option>
                <option value={'5.8ft'}>5.8ft</option>
                <option value={'5.9ft'}>5.9ft</option>
                <option value={'6.0ft'}>6.0ft</option>
                <option value={'6.1ft'}>6.1ft</option>
                <option value={'6.2ft'}>6.2ft</option>
                <option value={'6.3ft'}>6.3ft</option>
                <option value={'6.4ft'}>6.4ft</option>
              </select>
              <span className='px-2 align-self-center' >To</span>
              <select className="col-2 form-control "onChange={handleChange} name="max_height" id="">
              <option>Doesn't Matter</option>
              <option value={'5.1ft'}>5.1ft</option>
                <option value={'5.2ft'}>5.2ft</option>
                <option value={'5.3ft'}>5.3ft</option>
                <option value={'5.4ft'}>5.4ft</option>
                <option value={'5.5ft'}>5.5ft</option>
                <option value={'5.6ft'}>5.6ft</option>
                <option value={'5.7ft'}>5.7ft</option>
                <option value={'5.8ft'}>5.8ft</option>
                <option value={'5.9ft'}>5.9ft</option>
                <option value={'6.0ft'}>6.0ft</option>
                <option value={'6.1ft'}>6.1ft</option>
                <option value={'6.2ft'}>6.2ft</option>
                <option value={'6.3ft'}>6.3ft</option>
                <option value={'6.4ft'}>6.4ft</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Martial Status
            </div>
            <div className="col-8">
              <select className="form-control "onChange={handleChange} name="martial_status" id="">      <option>Doesn't Matter</option>
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
              <select className="form-control "onChange={handleChange} name="religion" id="">      <option>Doesn't Matter</option>

                                    {religion?.map((data) => (
                                      <option value={data.id}>
                                        {data.name}
                                      </option>
                                    ))}
              </select>
            </div>
          </div>
          {/* <div className="row pt-1">
            <div className="col-4">
                Mother Tongue
            </div>
            <div className="col-8">
              <select className="form-control "onChange={handleChange} name="religion" id="">      <option>Doesn't Matter</option>
                <option>Urdu</option>
                <option>Punjabi</option>
                <option>English</option>
              </select>
            </div>
          </div> */}
          <div className="row pt-1">
            <div className="col-4">
                Sector
            </div>
            <div className="col-8">
              <select className="form-control "onChange={handleChange} name="sector" id="">      <option>Doesn't Matter</option>
              {sector?.map((data) => (
                                        <option value={data.id}>
                                          {data.name}
                                        </option>
                                      ))}
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Country Living In
            </div>
            <div className="col-8">
              <select className="form-control "onChange={handleChange} name="country" id="">      <option>Doesn't Matter</option>
              {country?.map((data) => (
                                        <option value={data.id}>
                                          {data.name}
                                        </option>
                                      ))}
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                State Living In
            </div>
            <div className="col-8">
              <select className="form-control "onChange={handleChange} name="state" id="">      <option>Doesn't Matter</option>
              {state?.map((data) => (
                                        <option value={data.id}>
                                          {data.name}
                                        </option>
                                      ))}
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                City / District
            </div>
            <div className="col-8">
              <select className="form-control "onChange={handleChange} name="city" id="">      <option>Doesn't Matter</option>
              {city?.map((data) => (
                                        <option value={data.id}>
                                          {data.name}
                                        </option>
                                      ))}
              </select>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4">
                  Photo Setting
              </div>
              <div className="col-8 d-flex">
                <div className="form-check form-check-inline">
                
                <input className="form-check-input" type="radio"onChange={handleChange} name="photo_visibility" id="" value="visible"/> Visible to all
            
                </div>
                <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio"onChange={handleChange} name="photo_visibility" id="" value="premimum"/> Protected Picture
                </div>
              </div>
           
          </div>
          {/* <div className="row pt-1">
            <div className="col-4">
            Do Not Show
              </div>
              <div className="col-8 d-flex">
                <div className="form-check form-check-inline">
                
                <input className="form-check-input" type="checkbox"onChange={handleChange} name="vistited_profiles" id="" value="checkedValue"/>  Profiles that I have already Viewed
            
                </div>
                <div className="form-check form-check-inline">
                  
                  <input className="form-check-input" type="checkbox"onChange={handleChange} name="profiles_visited_me" id="" value="checkedValue"/>  Profiles that have Filtered me out
              
                </div>
              </div>
           
          </div> */}
          {/* <div className="col-12">
            <b>Save upto 5 Searches</b>
          </div> */}
          {/* <div className="row pt-1">
            <div className="col-4">
            Save Search as
            </div>
            <div className="col-8 d-flex">
              <input type="text" placeholder='e.g Lahore, 20-22' className="form-control col-6" />
            </div>
          </div> */}
          {/* <div className="row pt-1">
            <div className="col-4">
            Email me new Results
            </div>
            <div className="col-8 d-flex">
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio"onChange={handleChange} name="email" id="" value="checkedValue" /> Daily
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio"onChange={handleChange} name="email" id="" value="checkedValue" /> Twice A Week
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio"onChange={handleChange} name="email" id="" value="checkedValue" /> Once A Week
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio"onChange={handleChange} name="email" id="" value="checkedValue" /> Never
                </label>
              </div>
            </div>onClick={handleSearch}
          </div> */}
          <div className="col-12 text-center pt-2">
            <button type="submit" className='button col-4 btn btn-theme rounded-sm animated right-icn' >Search</button>
          </div>
          </form>
          {/* <SearchedMatches data={data} style={matchesVisibility==true?{display:"block"}:{display:"none"}} /> */}
          <div className="col" style={store.matchesVisibility==true?{display:"block"}:{display:"none"}}>
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
                              name="submit"
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
                              name="submit"
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
                          <a href="Tel:923040227000" className="btn px-5 py-1 m-1 btn-white border rounded b-radius" >
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
                          href="https://api.whatsapp.com/send?phone=923040227000&text=Hello this is the starting message"
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

export default BasicSearch