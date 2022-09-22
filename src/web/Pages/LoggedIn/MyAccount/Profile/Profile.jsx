import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Observer } from "mobx-react-lite";
import { StoreContext } from "./../../../../store";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from "react-toastify";
const Profile = () => {
  const store = useContext(StoreContext);

  const [editFields, setEditFields] = useState(true);
  const [birthDay,setBirthDay]=useState();
  const [birthMonth,setBirthMonth]=useState();
  const [birthYear,setBirthYear]=useState();
  const [countries, setCountries] = useState();
  const [state, setStates] = useState();
  const [city, setCities] = useState();
  const [casts, setCasts] = useState();
  const [religions, setReligions] = useState();
  const [sectors, setSectors] = useState();

  const fieldDisablity = () => {
    setEditFields(!editFields);
  };
  const [profileData, setProfile] = useState();
  const [formValue, setformValue] = React.useState({
    id: profileData?.id,
    // gender: "",
    marital_status: "",
    first_name: "",
    last_name: "",
    email:"",
    dob: "",
    height: "",
    disability: "",
    cast: "",
    hobbies: "",
    interest: "",
    qualification: "",
    company_name: "",
    work_with: "",
    job: "",
    income: "",
    country: "",
    state: "",
    city: "",
    town: "",
    religion: "",
    date_of_Birth_day: '',//birthDay,
    date_of_Birth_month: '',//birthMonth,
    date_of_Birth_year: '',//birthYear,
    sector: "",
    living_since: "",
    description: "",
    phone_number: "",
    whatsapp_number: "",
    no_of_brothers:'',
    no_of_sister:'',
    family_type:'',
    father_status:'',
    mother_status:'',
    brother_marital_status:'',
    family_address:'',
    living_with_family:'',
    language:'',
  });
  const url = `${store.url}`;
  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
    if (event.target.name == "country") {
      console.log(event.target.value);
      states(event.target.value);
    } else if (event.target.name == "state") {
      cities(event.target.value);
    }
  };
  const handleSubmit = async (e) => {

    e.preventDefault();
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");
    const formData = new FormData();
    // console.log('formValue',user['id']);
    const user_id = JSON.parse(user)["id"];
    formData.append("data[id]", profileData?.id);
    formData.append("user[first_name]", formValue.first_name);
    formData.append("user[last_name]", formValue.last_name);
    formData.append("user[email]", formValue.email);
    // formData.append("data[gender]", formValue.gender);
    formData.append("data[marital_status]", formValue.marital_status);
    formData.append("data[height]", formValue.height);
    formData.append("data[disability]", formValue.disability);
    formData.append("data[blood_group]", formValue.blood_group);
    formData.append("data[date_of_Birth]", formValue.date_of_Birth_year + "-" + formValue.date_of_Birth_month + "-" + formValue.date_of_Birth_day);
    formData.append("data[cast_id]", formValue.cast);
    formData.append("data[hobbies]", formValue.hobbies);
    formData.append("data[interest]", formValue.interest);
    formData.append("data[qualification]", formValue.qualification);
    formData.append("data[working_with]", formValue.work_with);
    formData.append("data[job]", formValue.job);
    formData.append("data[annual_income]", formValue.income);
    formData.append("data[town]", formValue.town);
    formData.append("data[about]", formValue.description);
    formData.append("data[number]", formValue.phone_number);
    formData.append("data[whatsapp_number]", formValue.whatsapp_number);
    formData.append('data[no_of_brothers]',formValue.no_of_brothers)
    formData.append('data[no_of_sister]',formValue.no_of_sister)
    formData.append('data[family_type]',formValue.family_type)
    formData.append('data[father_status]',formValue.father_status)
    formData.append('data[mother_status]',formValue.mother_status)
    formData.append('data[brother_marital_status]',formValue.brother_marital_status)
    formData.append('data[living_with_family]',formValue.living_with_family)
    formData.append('data[company_name]',formValue.company_name)
    formData.append('data[language]',formValue.language)

    console.log("formData=============================>", formData);
    try {
     
      console.log(formData);
      const response = await axios({
        method: "post",
        url: `${store.url}update-profile`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
        const data = response.data;
  toast.success("Profile Data Updated Successfully");
      });
      // navigate('/pricing')
    } catch (error) {
      console.log(error);
    }
  };

  const getProfile = async (access_token, user_id) => {
    try {
      const userId = new FormData();
      userId.append("user_id", user_id);
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      };
      const response = await axios({
        method: "post",
        url: `${store.url}get-profile`,
        data: userId,
        headers: headers,
      }).then((response) => {
        const data = response.data;
        console.log("data", data["data"]);
        setProfile(data["data"]["user"][0]);
      
        const dob=data["data"]["user"][0]['date_of_Birth'].split('-');
        setBirthDay(dob[2])
        setBirthMonth(dob[1])
        setBirthYear(dob[0])
        console.log('birthDay'.birthDay);
        states(data["data"]["user"][0]['country_id']);
        cities(data["data"]["user"][0]['state_id']);
        setformValue({
              id: data["data"]['user'][0].id,
              // gender: data["data"]['user'][0].gender,
              marital_status: data["data"]['user'][0].marital_status,
              first_name: data["data"]['user'][0].user.first_name,
              last_name: data["data"]['user'][0].user.last_name,
              email:data["data"]['user'][0].user.email,
              dob: data["data"]['user'][0].date_of_Birth,
              height: data["data"]['user'][0].height,
              disability: data["data"]['user'][0].disability,
              blood_group: data["data"]['user'][0].blood_group,
              cast: data["data"]['user'][0]?.cast_id,
              hobbies: data["data"]['user'][0].hobbies,
              interest: data["data"]['user'][0].interest,
              qualification: data["data"]['user'][0].qualification,
              company_name: data["data"]['user'][0].company_name,
              work_with: data["data"]['user'][0].working_with,
              date_of_Birth_day: dob[2],
              date_of_Birth_month: dob[1],
              date_of_Birth_year: dob[0],
              job: data["data"]['user'][0].job,
              income: data["data"]['user'][0].annual_income,
              country: data["data"]['user'][0].country_id,
              state: data["data"]['user'][0].state_id,
              city: data["data"]['user'][0].city_id,
              town: data["data"]['user'][0].town,
              religion: data["data"]['user'][0].religion_id,
              sector: data["data"]['user'][0].sector_id,
              language: data["data"]['user'][0].language,
              living_since: data["data"]['user'][0].living_since,
              description: data["data"]['user'][0].about,
              phone_number: data["data"]['user'][0].number,
              whatsapp_number: data["data"]['user'][0].whatsapp_number,
              no_of_brothers: data["data"]['user'][0].no_of_brothers,
              no_of_sister: data["data"]['user'][0].no_of_sister,
              family_type: data["data"]['user'][0].family_type,
              father_status: data["data"]['user'][0].father_status,
              mother_status: data["data"]['user'][0].mother_status,
              brother_marital_status: data["data"]['user'][0].brother_marital_status,
              family_address: data["data"]['user'][0].family_address,
              living_with_family: data["data"]['user'][0].living_with_family,
              edjuction_sector:data["data"]['user'][0].edjuction_sector,
              })
                  // toast.success("Profile Data Updated Successfully");
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


  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");

    const countries = JSON.parse(localStorage.getItem("countries"));
    const sectors = JSON.parse(localStorage.getItem("sectors"));
    const religions = JSON.parse(localStorage.getItem("religions"));
    const casts = JSON.parse(localStorage.getItem("casts"));

    setReligions(religions)
    setCountries(countries)
    setCasts(casts)
    setSectors(sectors)
    getProfile(token, JSON.parse(user).id);
  }, []);
  return (
    <Observer>
      {() => (
        <>
          <div className="col-12 p-3 h4 shadow rounded bg-white">
            <div className="container mt-3">
              {profileData?.user.first_name + " " + profileData?.user.last_name}
            </div>
          </div>
          <div className="container mt-3 pt-5">
            <div className="col-12 d-sm-flex d-block">
              <div className="col-sm-4 col-12">
                <div className="card bg-dark text-white">
                  {profileData?.user.picture[0] == null ? (

                      <img className="card-img-top" src={window.location.origin + "/images/profile/default.png"} alt="" />
                  ) : (
                    <Carousel showThumbs={false}>
                      {profileData?.user.picture.map((image) => (
                        <div>
                          <img
                            src={store.mediaUrl + image?.image_path}
                            style={
                              profileData?.pictures_settings == "visible" ||
                              (profileData?.pictures_settings == "premimum" &&
                                profileData?.user_subscription != null)
                                ? { filter: "blur(0rem)" }
                                : { filter: "blur(.5rem)" }
                            }
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                      ))}
                    </Carousel>
                  )}

                  <div className="card-img-overlay"></div>
                  <a href="#" className="card-link">
                    Browser
                  </a>
                </div>
              </div>
              <div className="col-sm-8 col-12 text-center p-4 rounded shadow rounded-sm bg-white">
                <div className="col-12">
                  <div className="col-6 d-flex pt-4">
                    <div className="col-6  ">Height</div>
                    <div className="col-6" style={{ fontWeight: "bold" }}>
                      {profileData?.height}
                    </div>
                    <div className="col-6 ">Cast</div>
                    <div className="col-6" style={{ fontWeight: "bold" }}>
                      {profileData?.cast == null ? "" : profileData?.cast.name}
                    </div>
                  </div>
                  <div className="col-6 d-flex pt-4">
                    <div className="col-6 ">National</div>
                    <div className="col-6" style={{ fontWeight: "bold" }}>
                      {profileData?.country == null
                        ? ""
                        : profileData?.country.name}
                    </div>
                    <div className="col-6 ">Religion</div>
                    <div className="col-6" style={{ fontWeight: "bold" }}>
                      {profileData?.religion == null
                        ? ""
                        : profileData?.religion.name}
                    </div>
                  </div>
                  <div className="col-6 d-flex pt-4">
                    <div className="col-6 ">Education</div>
                    <div className="col-6" style={{ fontWeight: "bold" }}>
                      {profileData?.qualification}
                    </div>
                    <div className="col-6 ">Job</div>
                    <div className="col-6" style={{ fontWeight: "bold" }}>
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

                      <button type="button"  onClick={fieldDisablity} className="btn btn-md btn-primary">
                        Edit Settings
                      </button>
                      <div className="user-dashboard-info-box bg-white">
                        <div className="section-title-02 mb-2 mt-4 d-grid">
                          <h4>Basic Information</h4>
                        </div>

                        <div className="row shadow rounded-lg p-3">
                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Your First Name
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              onChange={handleChange}
                              name="first_name"
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue.first_name}
                            />
                          </div>
                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Your Last Name
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              onChange={handleChange}
                              name="last_name"
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue.last_name}
                            />
                          </div>
                          <div className="d-flex mb-3 col-md-6">
                            <label
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color:'#D6358',
                                  justifyContent: "center",
                                }}
                                className="form-label col text-dark"
                            >
                              Language
                            </label>
                            <input
                                type="text"
                                disabled={editFields}
                                onChange={handleChange}
                                name="language"
                                style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                                className="form-control p-0 col"
                                value={formValue?.language}
                            />
                          </div>
                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              disabled={editFields}
                              onChange={handleChange}
                              name="email"
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue.email}
                            />
                          </div>
                       
                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Material Status
                            </label>
                            <select
                              className="form-select"
                              style={
                                editFields == true
                                  ? { display: "none" }
                                  : { display: "block",width:'inherit' }
                              }
                              onChange={handleChange}
                              name="marital_status"
                              aria-label="Default select example"
                              id=""
                            >
                              <option >Select one</option>
                              <option value="Single" selected={profileData?.marital_status=="Single"? true:false}>Single</option>
                              <option value="Divorced" selected={profileData?.marital_status=="Divorced"? true:false}>Divorced</option>
                              <option value="Window" selected={profileData?.marital_status=="Window"? true:false}>Window</option>
                              <option value="Married" selected={profileData?.marital_status=="Married"? true:false}>Married</option>
                            </select>
                            <input
                              type="text"
                              disabled={true}
                              onChange={handleChange}
                              style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                              className="form-control p-0 col"
                              value={profileData?.marital_status}
                            />
                          </div>
                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Phone
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="phone_number"
                              onChange={handleChange}
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue?.whatsapp_number}
                            />
                          </div>
                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Hobbies
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="hobbies"
                              onChange={handleChange}
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue?.hobbies}
                            />
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Interest
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="interest"
                              onChange={handleChange}
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue?.interest}
                            />
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Disability
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="disability"
                              onChange={handleChange}
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue?.disability}
                            />
                          </div>


                          <div className="d-flex mb-3 col datetimepickers">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Date of birth
                            </label>
                            <div
                              className="input-group date col"
                              id="datetimepicker-01"
                              data-target-input="nearest"
                            >
                              <input
                                type="text"
                                disabled={editFields}
                                onChange={handleChange}
                                name="dob"
                                style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                                className="form-control p-0 datetimepicker-input"
                                value={formValue.dob}
                                data-target="#datetimepicker-01"
                              />
                                  <div className="form-group mb-3 d-flex text-center"
                                     style={
                                      editFields == true
                                        ? { display: "none" }
                                        : { display: "block",width:'inherit' }
                                    }
                                  >
                                    
                                      <select
                                        id="my-select"
                                     
                                        name="date_of_Birth_day"
                                        style={
                                          editFields == true
                                            ? { display: "none" }
                                            : { display: "block",width:'inherit' }
                                        }
                                        value={formValue?.date_of_Birth_day}
                                        onChange={handleChange}
                                        className="form-select"
                                      >
                                        <option selected={birthDay=="01"? true:false} value="01">{birthDay}01</option>
                                        <option selected={birthDay=="02"? true:false} value="02">02</option>
                                        <option selected={birthDay=="03"? true:false} value="03">03</option>
                                        <option selected={birthDay=="04"? true:false} value="04">04</option>
                                        <option selected={birthDay=="05"? true:false} value="05">05</option>
                                        <option selected={birthDay=="06"? true:false} value="06">06</option>
                                        <option selected={birthDay=="07"? true:false} value="07">07</option>
                                        <option selected={birthDay=="08"? true:false} value="08">08</option>
                                        <option selected={birthDay=="09"? true:false} value="09">09</option>
                                        <option selected={birthDay=="10"? true:false} value="10">10</option>
                                        <option selected={birthDay=="11"? true:false} value="11">11</option>
                                        <option selected={birthDay=="12"? true:false} value="12">12</option>
                                        <option selected={birthDay=="13"? true:false} value="13">13</option>
                                        <option selected={birthDay=="14"? true:false} value="14">14</option>
                                        <option selected={birthDay=="15"? true:false} value="15">15</option>
                                        <option selected={birthDay=="16"? true:false} value="16">16</option>
                                        <option selected={birthDay=="17"? true:false} value="17">17</option>
                                        <option selected={birthDay=="18"? true:false} value="18">18</option>
                                        <option selected={birthDay=="19"? true:false} value="19">19</option>
                                        <option selected={birthDay=="20"? true:false} value="20">20</option>
                                        <option selected={birthDay=="21"? true:false} value="21">21</option>
                                        <option selected={birthDay=="22"? true:false} value="22">22</option>
                                        <option selected={birthDay=="23"? true:false} value="23">23</option>
                                        <option selected={birthDay=="24"? true:false} value="24">24</option>
                                        <option selected={birthDay=="25"? true:false} value="25">25</option>
                                        <option selected={birthDay=="26"? true:false} value="26">26</option>
                                        <option selected={birthDay=="27"? true:false} value="27">27</option>
                                        <option selected={birthDay=="28"? true:false} value="28">28</option>
                                        <option selected={birthDay=="29"? true:false} value="29">29</option>
                                        <option selected={birthDay=="30"? true:false} value="30">30</option>
                                        <option selected={birthDay=="31"? true:false} value="31">31</option>
                                      </select>
                                 
                                    
                                      <select
                                        id="my-select"
                                        className="form-select"
                                        style={
                                          editFields == true
                                            ? { display: "none" }
                                            : { display: "block",width:'inherit' }
                                        }
                                        value={formValue?.date_of_Birth_month}
                                        onChange={handleChange}
                                        name="date_of_Birth_month"
                                      >
                                        <option selected={birthMonth=="Jan"? true:false} value="Jan">Jan</option>
                                        <option selected={birthMonth=="Feb"? true:false} value="Feb">Feb</option>
                                        <option selected={birthMonth=="Mar"? true:false} value="Mar">Mar</option>
                                        <option selected={birthMonth=="Apr"? true:false} value="Apr">Apr</option>
                                        <option selected={birthMonth=="May"? true:false} value="May">May</option>
                                        <option selected={birthMonth=="Jun"? true:false} value="Jun">Jun</option>
                                        <option selected={birthMonth=="Jul"? true:false} value="Jul">Jul</option>
                                        <option selected={birthMonth=="Aug"? true:false} value="Aug">Aug</option>
                                        <option selected={birthMonth=="Sep"? true:false} value="Sep">Sep</option>
                                        <option selected={birthMonth=="Oct"? true:false} value="Oct">Oct</option>
                                        <option selected={birthMonth=="Nov"? true:false} value="Nov">Nov</option>
                                        <option selected={birthMonth=="Dec"? true:false} value="Dec">Dec</option>
                                      </select>
                                    
                                      <select
                                        id="my-select"
                                        style={
                                          editFields == true
                                            ? { display: "none" }
                                            : { display: "block",width:'inherit' }
                                        }
                                        className="form-select"
                                        value={formValue?.date_of_Birth_year}
                                        onChange={handleChange}
                                        name="date_of_Birth_year"
                                      >
                                        <option selected={birthYear=="2001"? true:false} value="2001">2001</option>
                                        <option selected={birthYear=="2000"? true:false} value="2000">2000</option>
                                        <option selected={birthYear=="1999"? true:false} value="1999">1999</option>
                                        <option selected={birthYear=="1998"? true:false} value="1998">1998</option>
                                        <option selected={birthYear=="1997"? true:false} value="1997">1997</option>
                                        <option selected={birthYear=="1996"? true:false} value="1996">1996</option>
                                        <option selected={birthYear=="1995"? true:false} value="1995">1995</option>
                                        <option selected={birthYear=="1994"? true:false} value="1994">1994</option>
                                        <option selected={birthYear=="1993"? true:false} value="1993">1993</option>
                                        <option selected={birthYear=="1992"? true:false} value="1992">1992</option>
                                        <option selected={birthYear=="1991"? true:false} value="1991">1991</option>
                                        <option selected={birthYear=="1990"? true:false} value="1990">1990</option>
                                        <option selected={birthYear=="1989"? true:false} value="1989">1989</option>
                                        <option selected={birthYear=="1988"? true:false} value="1988">1988</option>
                                        <option selected={birthYear=="1987"? true:false} value="1987">1987</option>
                                        <option selected={birthYear=="1986"? true:false} value="1986">1986</option>
                                        <option selected={birthYear=="1985"? true:false} value="1985">1985</option>
                                        <option selected={birthYear=="1984"? true:false} value="1984">1984</option>
                                        <option selected={birthYear=="1983"? true:false} value="1983">1983</option>
                                        <option selected={birthYear=="1982"? true:false} value="1982">1982</option>
                                        <option selected={birthYear=="1981"? true:false} value="1981">1981</option>
                                        <option selected={birthYear=="1980"? true:false} value="1980">1980</option>
                                        <option selected={birthYear=="1979"? true:false} value="1979">1979</option>
                                        <option selected={birthYear=="1978"? true:false} value="1978">1978</option>
                                        <option selected={birthYear=="1977"? true:false} value="1977">1977</option>
                                        <option selected={birthYear=="1976"? true:false} value="1976">1976</option>
                                        <option selected={birthYear=="1975"? true:false} value="1975">1975</option>
                                        <option selected={birthYear=="1974"? true:false} value="1974">1974</option>
                                        <option selected={birthYear=="1973"? true:false} value="1973">1973</option>
                                        <option selected={birthYear=="1972"? true:false} value="1972">1972</option>
                                        <option selected={birthYear=="1971"? true:false} value="1971">1971</option>
                                        <option selected={birthYear=="1970"? true:false} value="1970">1970</option>
                                        <option selected={birthYear=="1969"? true:false} value="1969">1969</option>
                                        <option selected={birthYear=="1968"? true:false} value="1968">1968</option>
                                        <option selected={birthYear=="1967"? true:false} value="1967">1967</option>
                                        <option selected={birthYear=="1966"? true:false} value="1966">1966</option>
                                        <option selected={birthYear=="1965"? true:false} value="1965">1965</option>
                                        <option selected={birthYear=="1964"? true:false} value="1964">1964</option>
                                        <option selected={birthYear=="1963"? true:false} value="1963">1963</option>
                                        <option selected={birthYear=="1962"? true:false} value="1962">1962</option>
                                        <option selected={birthYear=="1961"? true:false} value="1961">1961</option>
                                        <option selected={birthYear=="1960"? true:false} value="1960">1960</option>
                                        <option selected={birthYear=="1959"? true:false} value="1959">1959</option>
                                        <option selected={birthYear=="1958"? true:false} value="1958">1958</option>
                                        <option selected={birthYear=="1957"? true:false} value="1957">1957</option>
                                        <option selected={birthYear=="1956"? true:false} value="1956">1956</option>
                                        <option selected={birthYear=="1955"? true:false} value="1955">1955</option>
                                        <option selected={birthYear=="1954"? true:false} value="1954">1954</option>
                                        <option selected={birthYear=="1953"? true:false} value="1953">1953</option>
                                        <option selected={birthYear=="1952"? true:false} value="1952">1952</option>
                                        <option selected={birthYear=="1951"? true:false} value="1951">1951</option>
                                        <option selected={birthYear=="1950"? true:false} value="1950">1950</option>
                                      </select>
                                    
                                  </div>
                              <div
                                className="input-group-append d-flex"
                                data-target="#datetimepicker-01"
                                data-toggle="datetimepicker"
                              >
                              
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="user-dashboard-info-box bg-white">
                        <div className="section-title-02 mb-2 mt-4 d-grid">
                          <h4>Education & Career</h4>
                        </div>
                        <div className="row shadow rounded-lg p-3">
                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Job Title
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="job"
                              onChange={handleChange}
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue?.job}
                            />
                          </div>
                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Income
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="income"
                              onChange={handleChange}
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue?.income}
                            />
                          </div>
                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="company_name"
                              onChange={handleChange}
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue?.company_name}
                            />
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Working With
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="work_with"
                              onChange={handleChange}
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue?.work_with}
                            />
                          </div>
                          <div className="d-flex mb-3 col-md-6">
                            <label
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color:'#D6358',
                                  justifyContent: "center",
                                }}
                                className="form-label col text-dark"
                            >
                              Eduction Type
                            </label>
                            <input
                                type="text"
                                disabled={editFields}

                                onChange={handleChange}
                                style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                                className="form-control p-0 col"
                                value={
                                  formValue?.edjuction_sector
                                }
                            />
                            <select
                                className="form-select"
                                style={
                                  editFields == true
                                      ? { display: "none" }
                                      : { display: "block",width:'inherit' }
                                }
                                onChange={handleChange}
                                name="education_sector"
                                aria-label="Default select example"
                                id=""
                            >
                              <option hidden >Select</option>


                              <option selected={profileData?.education_sector=='Medical'? true:false} value="Medical">Medical</option>
                              <option selected={profileData?.education_sector=='Engineering'? true:false} value="Engineering">Engineering</option>
                              <option selected={profileData?.education_sector=='IT'? true:false} value="IT">IT</option>

                            </select>
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color:'#D6358',
                                  justifyContent: "center",
                                }}
                                className="form-label col text-dark"
                            >
                              Qualification
                            </label>
                          <input
                              type="text"
                              disabled={editFields}
                              name="qualifiction"
                              onChange={handleChange}
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={
                                profileData?.qualification
                              }
                          />
                          </div>

                        </div>
                      </div>

                      <div className="user-dashboard-info-box bg-white">
                        <div className="section-title-02 mb-2 mt-4 d-grid">
                          <h4>Family </h4>
                        </div>
                        <div className="row shadow rounded-lg p-3">
                          <div className="d-flex mb-3 col-md-6">
                            <label
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color:'#D6358',
                                  justifyContent: "center",
                                }}
                                className="form-label col text-dark"
                            >
                              No Of Brothers
                            </label>
                            <input
                                type="text"
                                disabled={editFields}

                                onChange={handleChange}
                                style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                                className="form-control p-0 col"
                                value={
                                  profileData?.no_of_brothers
                                }
                            />
                            <select
                                className="form-select"
                                style={
                                  editFields == true
                                      ? { display: "none" }
                                      : { display: "block",width:'inherit' }
                                }
                                onChange={handleChange}
                                name="no_of_brothers"
                                aria-label="Default select example"
                                id=""
                            >
                              <option hidden >Select</option>


                            <option selected={profileData?.no_of_brothers=='1'? true:false} value="1">1</option>
                            <option selected={profileData?.no_of_brothers=='2'? true:false} value="2">2</option>
                            <option selected={profileData?.no_of_brothers=='3'? true:false} value="3">3</option>
                            <option selected={profileData?.no_of_brothers=='4'? true:false} value="4">4</option>
                            <option selected={profileData?.no_of_brothers=='5'? true:false} value="5">5</option>
                            <option selected={profileData?.no_of_brothers=='6'? true:false} value="6">6</option>
                            <option selected={profileData?.no_of_brothers=='7'? true:false} value="7">7</option>
                            <option selected={profileData?.no_of_brothers=='8'? true:false} value="8">8</option>
                            <option selected={profileData?.no_of_brothers=='9'? true:false} value="9">9</option>
                            <option selected={profileData?.no_of_brothers=='10'? true:false} value="10">10</option>

                            </select>
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color:'#D6358',
                                  justifyContent: "center",
                                }}
                                className="form-label col text-dark"
                            >
                              No Of Sister
                            </label>
                            <input
                                type="text"
                                disabled={editFields}

                                onChange={handleChange}
                                style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                                className="form-control p-0 col"
                                value={
                                  profileData?.no_of_sister
                                }
                            />
                            <select
                                className="form-select"
                                style={
                                  editFields == true
                                      ? { display: "none" }
                                      : { display: "block",width:'inherit' }
                                }
                                onChange={handleChange}
                                name="no_of_sister"
                                aria-label="Default select example"
                                id=""
                            >
                              <option hidden >Select</option>
                              <option selected={profileData?.no_of_sister=='1'? true:false} value="1">1</option>
                              <option selected={profileData?.no_of_sister=='2'? true:false} value="2">2</option>
                              <option selected={profileData?.no_of_sister=='3'? true:false} value="3">3</option>
                              <option selected={profileData?.no_of_sister=='4'? true:false} value="4">4</option>
                              <option selected={profileData?.no_of_sister=='5'? true:false} value="5">5</option>
                              <option selected={profileData?.no_of_sister=='6'? true:false} value="6">6</option>
                              <option selected={profileData?.no_of_sister=='7'? true:false} value="7">7</option>
                              <option selected={profileData?.no_of_sister=='8'? true:false} value="8">8</option>
                              <option selected={profileData?.no_of_sister=='9'? true:false} value="9">9</option>
                              <option selected={profileData?.no_of_sister=='10'? true:false} value="10">10</option>

                            </select>
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color:'#D6358',
                                  justifyContent: "center",
                                }}
                                className="form-label col text-dark"
                            >
                             Family Type
                            </label>
                            <input
                                type="text"
                                disabled={editFields}

                                onChange={handleChange}
                                style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                                className="form-control p-0 col"
                                value={
                                  profileData?.family_type
                                }
                            />
                            <select
                                className="form-select"
                                style={
                                  editFields == true
                                      ? { display: "none" }
                                      : { display: "block",width:'inherit' }
                                }
                                onChange={handleChange}
                                name="family_type"
                                aria-label="Default select example"
                                id=""
                            >
                              <option hidden >Select</option>
                              <option selected={profileData?.family_type=='Joint'? true:false} value="Joint">Joint</option>
                              <option selected={profileData?.family_type=='Seperate'? true:false} value="Seperate">Seperate</option>
                            </select>
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color:'#D6358',
                                  justifyContent: "center",
                                }}
                                className="form-label col text-dark"
                            >
                              Father Status
                            </label>
                            <input
                                type="text"
                                disabled={editFields}

                                onChange={handleChange}
                                style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                                className="form-control p-0 col"
                                value={
                                  profileData?.father_status
                                }
                            />
                            <select
                                className="form-select"
                                style={
                                  editFields == true
                                      ? { display: "none" }
                                      : { display: "block",width:'inherit' }
                                }
                                onChange={handleChange}
                                name="father_status"
                                aria-label="Default select example"
                                id=""
                            >
                              <option hidden >Select</option>
                              <option selected={profileData?.father_status==='Job Holder'? true:false} value="Job Holder">Job Holder</option>
                              <option selected={profileData?.father_status==='Business Man'? true:false} value="Business Man">Business Man</option>
                              <option selected={profileData?.father_status==='Retired'? true:false} value="Retired">Retired</option>
                              <option selected={profileData?.father_status==='Expired'? true:false} value="Expired">Expired</option>
                            </select>
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color:'#D6358',
                                  justifyContent: "center",
                                }}
                                className="form-label col text-dark"
                            >
                              Mother Status
                            </label>
                            <input
                                type="text"
                                disabled={editFields}

                                onChange={handleChange}
                                style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                                className="form-control p-0 col"
                                value={
                                  formValue?.mother_status
                                }
                            />
                            <select
                                className="form-select"
                                style={
                                  editFields == true
                                      ? { display: "none" }
                                      : { display: "block",width:'inherit' }
                                }
                                onChange={handleChange}
                                name="mother_status"
                                aria-label="Default select example"
                                id=""
                            >
                              <option hidden >Select</option>
                              <option selected={profileData?.mother_status==='Job Holder'? true:false} value="Job Holder">Job Holder</option>
                              <option selected={profileData?.mother_status==='Business Woman'? true:false} value="Business Woman">Business Man</option>
                              <option selected={profileData?.mother_status==='Retired'? true:false} value="Retired">Retired</option>
                              <option selected={profileData?.mother_status==='Expired'? true:false} value="Expired">Expired</option>
                            </select>
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color:'#D6358',
                                  justifyContent: "center",
                                }}
                                className="form-label col text-dark"
                            >
                              Brother Martial Status
                            </label>
                            <input
                                type="text"
                                disabled={editFields}

                                onChange={handleChange}
                                style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                                className="form-control p-0 col"
                                value={
                                  profileData?.brother_marital_status
                                }
                            />
                            <select
                                className="form-select"
                                style={
                                  editFields == true
                                      ? { display: "none" }
                                      : { display: "block",width:'inherit' }
                                }
                                onChange={handleChange}
                                name="brother_marital_status"
                                aria-label="Default select example"
                                id=""
                            >
                              <option hidden >Select</option>
                              <option selected={profileData?.brother_marital_status==='Married'? true:false} value="Married">Married</option>
                              <option selected={profileData?.brother_marital_status==='Divorced'? true:false} value="Divorced">Divorced</option>
                              <option selected={profileData?.brother_marital_status==='Single'? true:false} value="Single">Single</option>
                            </select>
                          </div>



                          <div className="d-flex mb-3 col-md-6">
                            <label
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color:'#D6358',
                                  justifyContent: "center",
                                }}
                                className="form-label col text-dark"
                            >
                              Living WIth Family
                            </label>
                            <input
                                type="text"
                                disabled={editFields}

                                onChange={handleChange}
                                style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                                className="form-control p-0 col"
                                value={
                                  profileData?.living_with_family
                                }
                            />
                            <select
                                className="form-select"
                                style={
                                  editFields == true
                                      ? { display: "none" }
                                      : { display: "block",width:'inherit' }
                                }
                                onChange={handleChange}
                                name="mother_status"
                                aria-label="Default select example"
                                id=""
                            >
                              <option hidden >Select</option>
                              <option selected={profileData?.living_with_family==='Yes'? true:false} value="Yes">Yes</option>
                              <option selected={profileData?.living_with_family==='No'? true:false} value="No">No</option>
                            </select>
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  color:'#D6358',
                                  justifyContent: "center",
                                }}
                                className="form-label col text-dark"
                            >
                              Family Address
                            </label>
                            <input
                                type="text"
                                disabled={editFields}
                                name="family_address"
                                onChange={handleChange}
                                style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                                className="form-control p-0 col"
                                value={formValue?.family_address}
                            />
                          </div>

                        </div>
                      </div>

                      <div className="user-dashboard-info-box bg-white">
                        <div className="section-title-02 mb-2 mt-4 d-grid">
                          <h4>Location</h4>
                        </div>
                        <div className="row shadow rounded-lg p-3">
                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Country
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="country"
                              onChange={handleChange}
                              style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                              className="form-control p-0 col"
                              value={
                                profileData?.country?.name
                              }
                            />
                              <select
                              className="form-select"
                              style={
                                editFields == true
                                  ? { display: "none" }
                                  : { display: "block",width:'inherit' }
                              }
                              onChange={handleChange}
                              name="country"
                              aria-label="Default select example"
                              id=""
                            > <option hidden >Select</option>
                               {countries?.map((data) => (
                                    <option selected={profileData?.country_id==data.id? true:false} value={data.id}>{data.name}</option>
                                ))}
                            </select>
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              State
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="state"
                              onChange={handleChange}
                              style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                              className="form-control p-0 col"
                              value={
                                profileData?.state?.name 
                              }
                            />
                              <select
                              
                              className="form-select"
                              style={
                                editFields == true
                                  ? { display: "none" }
                                  : { display: "block",width:'inherit' }
                              }
                              onChange={handleChange}
                              name="state"
                              aria-label="Default select example"
                              id=""
                            >
                              <option hidden >{profileData?.state_id}</option>
                                {state?.map((data) => (
                                    <option selected={profileData?.state_id==data.id? true:false} value={data.id}>{data.name}</option>
                                ))}
                            </select>
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              City
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="city"
                              onChange={handleChange}
                              style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                              className="form-control p-0 col"
                              value={
                                profileData?.city?.name
                              }
                            />
                              <select
                              className="form-select"
                              style={
                                editFields == true
                                  ? { display: "none" }
                                  : { display: "block",width:'inherit' }
                              }
                              onChange={handleChange}
                              name="city"
                              aria-label="Default select example"
                              id=""
                            >
                              <option hidden >Select</option>
                                {city?.map((data) => (
                                    <option selected={profileData?.city_id==data.id? true:false} value={data.id}>{data.name}</option>
                                ))}
                            </select>
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Town
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="town"
                              onChange={handleChange}
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0 col"
                              value={formValue?.town}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="user-dashboard-info-box bg-white">
                        <div className="section-title-02 mb-2 mt-4 d-grid">
                          <h4>Religious Background </h4>
                        </div>
                        <div className="row shadow rounded-lg p-3">
                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Religion
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                              name="religion"
                              onChange={handleChange}
                              style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                              className="form-control p-0 col"
                              value={
                                profileData?.religion?.name
                              }
                            />
                              <select
                              className="form-select"
                              style={
                                editFields == true
                                  ? { display: "none" }
                                  : { display: "block",width:'inherit' }
                              }
                              onChange={handleChange}
                              name="religion"
                              aria-label="Default select example"
                              id=""
                            >
                              <option hidden >Select</option>
                            {religions?.map((data) => (
                                <option selected={profileData?.religion_id==data.id? true:false} value={data.id}>{data.name}</option>
                            ))}
                            </select>
                          </div>

                          <div className="d-flex mb-3 col-md-6">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Sector
                            </label>
                            <input
                              type="text"
                              disabled={editFields}
                          
                              onChange={handleChange}
                              style={editFields?{ display: "block",fontWeight: "normal",borderBottom:".125rem solid pink" }:{ display: "none"}}
                              className="form-control p-0 col"
                              value={
                                profileData?.sector?.name 
                              }
                            />
                              <select
                              className="form-select"
                              style={
                                editFields == true
                                  ? { display: "none" }
                                  : { display: "block",width:'inherit' }
                              }
                              onChange={handleChange}
                              name="sector"
                              aria-label="Default select example"
                              id=""
                            >
                              <option hidden >Select</option>
                                {sectors?.map((data) => (
                                    <option selected={profileData?.sector_id==data.id? true:false} value={data.id}>{data.name}</option>
                                ))}
                            </select>
                          </div>

                          <div className=" mb-0 col-md-12">
                            <label
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                color:'#D6358',
                                justifyContent: "center",
                              }}
                              className="form-label col text-dark"
                            >
                              Description
                            </label>
                            <textarea
                              style={editFields?{ fontWeight: "normal",borderBottom:".125rem solid pink" }:{ fontWeight: "normal",border:".0625rem solid pink",borderRadius:".375rem"}}
                              className="form-control p-0"
                              name="description"
                              disabled={editFields}
                              onChange={handleChange}
                              rows="5"
                            
                            >
                              {formValue?.about}
                            </textarea>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-md btn-primary">
                        Save Changes
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      )}
    </Observer>
  );
};

export default Profile;
