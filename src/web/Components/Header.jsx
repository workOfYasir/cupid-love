import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation } from "react-router-dom";
import { Observer } from "mobx-react-lite";
import axios from "axios";
import { StoreContext } from "./../store";

const Header = () => {
  const [picture, setPicture] = useState();
  const [email, setEmail] = useState();
  const resolveAfter3Sec = new Promise((resolve) => setTimeout(resolve, 3000));
  const store = useContext(StoreContext);
  const [isActive, setActive] = useState(false);
  const [countries, setCountries] = useState();
  const [state, setStates] = useState();
  const [city, setCities] = useState();
  const [casts, setCasts] = useState([]);
  const [requests, setRequests] = useState([]);
  const [requestsAction, setRequestAction] = useState([]);
  const [req,setReq] = useState();
  const [forgotPasswordCheck,setForgotPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [religions, setReligions] = useState();
  const [sectors, setSectors] = useState();

  const [formValue, setformValue] = React.useState({
    gender:"",
    password: "",
    first_name: "",
    last_name: "",
    On_behalf: "",
    religion_id: "",
    sector_id: "",
    email: "",
    date_of_Birth_day: "",
    date_of_Birth_month: "",
    date_of_Birth_year: "",
    country: "",
    state: "",
    city: "",
  });
  const forgotPassowrd = async (e)=> {
  e.preventDefault()
  const forgotPasswordFormData = new FormData();
  forgotPasswordFormData.append("email", formValue.email);
    forgotPasswordFormData.append("password", formValue.password);
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const response = await axios({
    method: "post",
    url: `${store.url}forgot-password`,
    headers: headers,
    data:forgotPasswordFormData,
  }).then((response) => {
    const data = response.data;
    if(data!=null){
      setEmail(data);
    }
  })
  }
  const forgotPasswordEmailMatch = async (e)=> {
    e.preventDefault()
    const forgotPasswordFormData = new FormData();
    forgotPasswordFormData.append("email", formValue.email);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const response = await axios({
      method: "post",
      url: `${store.url}forgot-password-email-match`,
      headers: headers,
      data:forgotPasswordFormData,
    }).then((response) => {
      const data = response.data;
      if(data!=null){
        setEmail(data);
      }
    })
  }
  const requestAction = async (sender_id,status)=> {
    const token = localStorage.getItem("accessToken");
    const reqFormData = new FormData();
    reqFormData.append("status", status);

    reqFormData.append("sender_id", sender_id);
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    const response = await axios({
      method: "post",
      url: `${store.url}request-action`,
      headers: headers,
      data:reqFormData,
    }).then((response) => {
      const data = response.data;

      setRequests([]);
      if(requestsAction.length!=0){

        setRequestAction([]);
      }

    });
  }
  const getRequests = async (access_token) => {
    try {

      const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${access_token}`,
      };
      const response = await axios({
        method: "get",
        url: `${store.url}request-list`,
        headers: headers,
      }).then((response) => {
        const data = response.data;

        if(JSON.stringify(requests)!=JSON.stringify(data)){
          setRequests(data)
        }
        if(requestsAction.length===0){
          setRequestAction([0]);
        }

      });
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    document.body.classList.remove("model-open");
    document.body.style.overflow = "unset";
    document.body.style.paddingRight = "0px";

    const loginFormData = new FormData();
    loginFormData.append("email", formValue.email);
    loginFormData.append("password", formValue.password);

    try {
      const response = await axios({
        method: "post",
        url: `${store.url}login`,
        data: loginFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
        toast.success("LoggedIn Successfully");
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        store.setToken(true)
        setformValue({
          email: "",
          password: "",
        });
        document.getElementById("exampleModalLabel").classList.remove("show");
        document.body.classList.remove("model-open");
        document.body.style.overflow = "unset";
        document.body.style.paddingRight = "0px";
        navigate("/pricing");


      }).catch(function (error) {
        if (error.response) {
          toast.error("Credentials not exist check your email and password");
        }
      });

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
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

  const data = async (access_token) => {
    try {

      axios({
        method: "get",
        url: `${store.url}get-data`,
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${access_token}`
        },
      }).then((response) => {
        const data = response.data;
        setCountries(data.country)
        setCasts(data.cast)
        setReligions(data.religion)
        setSectors(data.sector)
        localStorage.setItem('casts',JSON.stringify(data.cast))
        localStorage.setItem('countries',JSON.stringify(data.country))
        localStorage.setItem('cities',JSON.stringify(data.city))
        localStorage.setItem('states',JSON.stringify(data.state))
        localStorage.setItem('sectors',JSON.stringify(data.sector))
        localStorage.setItem('religions',JSON.stringify(data.religion))

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
  const getPicture = async (access_token) => {
    try {

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      };
      const response = await axios({
        method: "post",
        url: `${store.url}get-picture`,
        headers: headers,
      }).then((response) => {
        const data = response.data;
        setPicture(data);
        
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    if(formValue.email!=''||formValue.first_name!=''||formValue.last_name!=''||formValue.On_behalf!='') {
      console.log('formValue.email',formValue.email)


      const registerFormData = new FormData();

      registerFormData.append("userData[email]", formValue.email);
      registerFormData.append("userData[first_name]", formValue.first_name);
      registerFormData.append("userData[last_name]", formValue.last_name);
      registerFormData.append('userProfile[gender]',formValue.gender)
      registerFormData.append("userData[password]", formValue.password);
      registerFormData.append("userProfile[On_behalf]", formValue.On_behalf);
      registerFormData.append(
          "userProfile[date_of_Birth]",
          formValue.date_of_Birth_year +
          "-" +
          formValue.date_of_Birth_month +
          "-" +
          formValue.date_of_Birth_day
      );
      registerFormData.append("userProfile[sector_id]", formValue.sector_id);
      registerFormData.append("userProfile[religion_id]", formValue.religion_id);
      registerFormData.append("userProfile[country_id]", formValue.country);
      registerFormData.append("userProfile[state_id]", formValue.state);
      registerFormData.append("userProfile[city_id]", formValue.city);
      // console.log(registerFormData,formValue);
      try {
        const loginResponse = await axios({
          method: "post",
          url: `${store.url}register`,
          data: registerFormData,
          headers: {"Content-Type": "multipart/form-data"},
        }).catch(function (error) {
          if (error.response) {
            toast.error("required fields are missing");
          }
        });
        localStorage.setItem("accessToken", loginResponse.data.token);
        localStorage.setItem("user", JSON.stringify(loginResponse.data.user));
        setformValue({
          password: "",
          first_name: "",
          last_name: "",
          On_behalf: "",
          religion_id: "",
          sector_id: "",
          email: "",
          date_of_Birth_day: "",
          date_of_Birth_month: "",
          date_of_Birth_year: "",
          country: "",
          state: "",
          city: "",
        });
        document.getElementById("exampleModal2").classList.remove("show");
        document.body.classList.remove("model-open");
        document.body.style.overflow = "unset";
        document.body.style.paddingRight = "0px";


        navigate("/createProfile");

      } catch (error) {
        // console.log(error);
      }
    }else{
      toast.error("required fields are missing2");
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    // console.log('token=>',token)
    if(token!=null){
        // if(requestsAction.length===0){
          getRequests(token)
        // }
      data()
      getPicture(token)
    }
  }, [requests]);
  return (
    <Observer>
      {() => (
        <>
          <header id="header" className="dark">


            <div
              className="modal fade"
              id="exampleModal"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              {forgotPasswordCheck==false
                  ?
                  <div className="modal-dialog">
                <form onSubmit={handleSubmitLogin}>
                  <div className="modal-content login-1-form clearfix text-center">
                    <h4
                      className="modal-title title divider-3 text-dark"
                      id="exampleModalLabel"
                    >
                      <div className="col-12">
                      <img
                          className="w-25 mb-2 offset-sm-0 offset-4 m-0"
                          src={window.location.origin + "/images/logo.png"}
                          alt="logo"
                      /></div>
                      Sign In
                    </h4>

                    <div className="modal-body">
                      <div className="">
                        <div className="row">
                          <div className="section-field mb-3 ">
                            <div className="field-widget d-inline-flex">
                              {" "}
                              <i className="glyph-icon flaticon-user p-1"></i>
                              <input
                                id="name"
                                className="web form-control"
                                type="text"
                                placeholder="Email"
                                required
                                name="email"
                                value={formValue.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="section-field mb-3 ">
                            <div className="field-widget d-inline-flex">
                              {" "}
                              <i className="glyph-icon flaticon-padlock p-1"></i>
                              <input
                                id="Password"
                                className="Password form-control"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formValue.password}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="section-field text-uppercase">

                          <span style={{cursor:'pointer'}} onClick={()=>{setForgotPassword(true)}}
                                className="float-end text-dark">
                            Forgot Password?
                          </span>
                        </div>
                        <div className="clearfix"></div>

                        <div className="clearfix"></div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <div className="col-12 text-center">
                        <div className="section-field text-uppercase col-12  ">
                          {" "}
                          <a
                            className="button  btn btn-theme rounded-sm animated right-icn"
                            data-bs-dismiss="modal"
                          >
                            <span>
                              Close
                              <i
                                className="glyph-icon flaticon-hearts"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </a>
                          <button
                            type="submit"
                            className="button  btn btn-theme rounded-sm animated right-icn pl-2"
                          >
                            sign in
                          </button>

                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
                  :
                  <div className="modal-dialog">
                    {email==null?
                        <form onSubmit={forgotPasswordEmailMatch}>
                          <div className="modal-content login-1-form clearfix text-center">
                            <h4
                                className="modal-title title divider-3 text-dark"
                                id="exampleModalLabel"
                            >
                              <div className="col-12">
                                <img
                                    className="w-25 mb-2 offset-sm-0 offset-4 m-0"
                                    src={window.location.origin + "/images/logo.png"}
                                    alt="logo"
                                /></div>
                              Forgot Password
                            </h4>

                            <div className="modal-body">
                              <div className="">
                                <div className="row">
                                  <div className="section-field mb-3 ">
                                    <div className="field-widget d-inline-flex">
                                      {" "}
                                      <i className="glyph-icon flaticon-user p-1"></i>
                                      <input
                                          id="name"
                                          className="web form-control"
                                          type="text"
                                          placeholder="Email"
                                          required
                                          name="email"
                                          value={formValue.email}
                                          onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="clearfix"></div>

                                <div className="clearfix"></div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <div className="col-12 text-center">
                                <div className="section-field text-uppercase col-12  ">
                                  {" "}
                                  <a
                                      className="button  btn btn-theme rounded-sm animated right-icn"
                                      data-bs-dismiss="modal"
                                  >
                            <span>
                              Close
                              <i
                                  className="glyph-icon flaticon-hearts"
                                  aria-hidden="true"
                              ></i>
                            </span>
                                  </a>
                                  <button
                                      type="submit"
                                      className="button  btn btn-theme rounded-sm animated right-icn pl-2"
                                  >
                                    sign in
                                  </button>
                                  {/* <Link to='/pricing' className="button  btn btn-theme rounded-sm animated right-icn pl-2"data-bs-dismiss="modal"><span>sign in<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></Link> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                        :
                        <form onSubmit={forgotPassowrd}>
                          <div className="modal-content login-1-form clearfix text-center">
                            <h4
                                className="modal-title title divider-3 text-dark"
                                id="exampleModalLabel"
                            >
                              <div className="col-12">
                                <img
                                    className="w-25 mb-2 offset-sm-0 offset-4 m-0"
                                    src={window.location.origin + "/images/logo.png"}
                                    alt="logo"
                                /></div>
                              Forgot Password
                            </h4>

                            <div className="modal-body">
                              <div className="">
                                <input type="hidden" value="email"/>
                                <div className="row">
                                  <div className="section-field mb-3 ">
                                    <div className="field-widget d-inline-flex">
                                      {" "}
                                      <i className="glyph-icon flaticon-padlock p-1"></i>
                                      <input
                                          id="Password"
                                          className="Password form-control"
                                          type="password"
                                          placeholder="Password"
                                          name="password"
                                          value={formValue.password}
                                          onChange={handleChange}
                                      />
                                    </div>
                                  </div>
                                </div>

                                <div className="clearfix"></div>

                                <div className="clearfix"></div>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <div className="col-12 text-center">
                                <div className="section-field text-uppercase col-12  ">
                                  {" "}
                                  <a
                                      className="button  btn btn-theme rounded-sm animated right-icn"
                                      data-bs-dismiss="modal"
                                  >
                            <span>
                              Close
                              <i
                                  className="glyph-icon flaticon-hearts"
                                  aria-hidden="true"
                              ></i>
                            </span>
                                  </a>
                                  <button
                                      type="submit"
                                      className="button  btn btn-theme rounded-sm animated right-icn pl-2"
                                  >
                                    sign in
                                  </button>
                                  {/* <Link to='/pricing' className="button  btn btn-theme rounded-sm animated right-icn pl-2"data-bs-dismiss="modal"><span>sign in<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></Link> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                    }
                  </div>
              }
            </div>

            <div
              className="modal fade"
              id="exampleModal2"
              tabIndex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >

                  <div className="modal-dialog">
                    <div className="modal-content login-1-form clearfix text-center">
                      <h4
                          className="modal-title title divider-2 text-dark"
                          id="exampleModalLabel"
                      > <div className="col-12">
                        <img
                            className="w-25 mb-2 offset-sm-0 offset-4 m-0"
                            src={window.location.origin + "/images/logo.png"}
                            alt="logo"
                        /></div>
                        Sign Up
                      </h4>

                      <div className="modal-body">
                        <div className="step-forms">
                          <form
                              method="post"
                              onSubmit={handleSubmitRegister}
                              className="text-center mt-3"
                          >
                            <div
                                className={
                                  isActive
                                      ? "row ref-1 d-none"
                                      : "row ref-1  justify-content-center d-block"
                                }
                                id="step-1"
                            >
                              <div className="col-md-12">
                                <h4 className="title text-dark divider-3 mb-5">
                                  Profile
                                </h4>
                                <div className="row justify-content-center">
                                  <div className="col-md-12 text-start">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Profile For
                                      </label>
                                      <select
                                          className="form-select"
                                          name="On_behalf"
                                          aria-label="Default select example"
                                          value={formValue.On_behalf}
                                          required
                                          onChange={handleChange}
                                          id=""
                                      >
                                        <option>Select one</option>
                                        <option value="Myself">Myself</option>
                                        <option value="Son">Son</option>
                                        <option value="Daughter">Daughter</option>
                                        <option value="Sister">Sister</option>
                                        <option value="Brother">Brother</option>
                                      </select>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="exampleInput">
                                        First Name
                                      </label>
                                      <div className="form-group">
                                        <input
                                            type="text"
                                            name="first_name"
                                            value={formValue.first_name}
                                            onChange={handleChange}

                                            className="form-control p-2 form-field"
                                            id="exampleInput"
                                            placeholder="Enter First Name"
                                        />
                                      </div>
                                    </div>
                                    <div className="row mb-3">
                                      <label htmlFor="exampleInput">
                                        Last Name
                                      </label>
                                      <div className="form-group">
                                        <input
                                            type="text"
                                            name="last_name"
                                            value={formValue.last_name}
                                            onChange={handleChange}
                                            className="form-control p-2 form-field"
                                            id="exampleInput"
                                            placeholder=" Enter Last Name"
                                        />
                                      </div>
                                    </div>
                                    <div className="mb-3">
                                      <label className="form-label">Gender</label>
                                      <select className="form-select"  name="gender" onChange={handleChange} aria-label="Default select example" id="">
                                        <option selected hidden>Select one</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>

                                      </select>
                                    </div>
                                    <div className="mb-3">
                                      <label htmlFor="" className="form-label">
                                        Religion
                                      </label>
                                      <select
                                          className="form-select"
                                          value={formValue.religion_id}
                                          onChange={handleChange}
                                          required
                                          name="religion_id"
                                          id=""
                                      >
                                        <option>Select one</option>
                                        {religions?.map((data) => (
                                            <option value={data.id}>
                                              {data.name}
                                            </option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="mb-3">
                                      <label htmlFor="" className="form-label">
                                        Sectors
                                      </label>
                                      <select
                                          className="form-select"
                                          value={formValue.sector_id}
                                          onChange={handleChange}
                                          required
                                          name="sector_id"
                                          id=""
                                      >
                                        {sectors?.map((data) => (
                                            <option value={data.id}>
                                              {data.name}
                                            </option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="mb-3">
                                      <label className="form-label">Cast</label>
                                      <select className="form-select"  onChange={handleChange} name="cast" aria-label="Default select example" id="">
                                        <option>Select one</option>
                                        {casts?.map((data) => (
                                            <option value={data.id}>{data.name}</option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                </div>
                                <div className="form-group mb-3">
                                  <div className="profile-info text-start">
                                    <p className="mb-0  text-dark">
                                      <i
                                          className="fa fa-info-circle"
                                          aria-hidden="true"
                                      ></i>{" "}
                                      Let's set up your account, while we find
                                      Matches for you!
                                    </p>
                                  </div>
                                </div>
                                <div className=" col-12 mb-0 ">
                                  {" "}
                                  <a
                                      className="button col-4 btn btn-theme rounded-sm animated right-icn"
                                      data-bs-dismiss="modal"
                                  >
                                <span>
                                  Close
                                  <i
                                      className="glyph-icon flaticon-hearts"
                                      aria-hidden="true"
                                  ></i>
                                </span>
                                  </a>{" "}
                                  <span
                                      className=" col-4 button btn-theme rounded-sm btn  animated right-icn   "
                                      onClick={() => {
                                        setActive(!isActive);
                                      }}
                                  >
                                <span>
                                  Next
                                  <i
                                      className="glyph-icon flaticon-hearts"
                                      aria-hidden="true"
                                  ></i>
                                </span>
                              </span>
                                </div>
                              </div>
                            </div>

                            <div
                                className={
                                  isActive == false
                                      ? "row ref-2 d-none"
                                      : "row ref-2 d-block"
                                }
                                id="step-2"
                            >
                              <div className="col-md-12">
                                <div className="row  justify-content-center">
                                  <div className="col-md-12 text-start text-capitalize text-white">
                                    <div className="row">
                                      <label htmlFor="exampleInput">Email ID</label>
                                      <div className="form-group mb-3">
                                        <input
                                            type="text"
                                            name="email"
                                            value={formValue.email}
                                            onChange={handleChange}
                                            className="form-control form-field p-2 "
                                            id="exampleInput"
                                            placeholder="Enter Email ID"
                                        />
                                      </div>
                                      <label htmlFor="exampleInput">Password</label>
                                      <div className="form-group mb-3">
                                        {/* <input type="hidden" name='password' value='test123' /> */}
                                        <input
                                            type="text"
                                            name="password"
                                            value={formValue.password}
                                            onChange={handleChange}
                                            className="form-control form-field p-2 "
                                            id="exampleInput"
                                            placeholder="Enter Password"
                                        />
                                      </div>

                                      <div className="form-group mb-3 text-center">
                                        <label
                                            htmlFor="my-select"
                                            className="col-4 text-grey"
                                        >
                                          Day
                                          <select
                                              id="my-select"
                                              name="date_of_Birth_day"
                                              value={formValue.date_of_Birth_day}
                                              onChange={handleChange}
                                              required
                                              className="form-select"
                                          >
                                            <option>Select one</option>
                                            <option value="01">01</option>
                                            <option value="02">02</option>
                                            <option value="03">03</option>
                                            <option value="04">04</option>
                                            <option value="05">05</option>
                                            <option value="06">06</option>
                                            <option value="07">07</option>
                                            <option value="08">08</option>
                                            <option value="09">09</option>
                                            <option value="10">10</option>
                                            <option value="11">11</option>
                                            <option value="12">12</option>
                                            <option value="13">13</option>
                                            <option value="14">14</option>
                                            <option value="15">15</option>
                                            <option value="16">16</option>
                                            <option value="17">17</option>
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
                                            <option value="30">30</option>
                                            <option value="31">31</option>
                                          </select>
                                        </label>
                                        <label
                                            htmlFor="my-select"
                                            className="col-4 text-grey"
                                        >
                                          Month
                                          <select
                                              id="my-select"
                                              className="form-select"
                                              value={formValue.date_of_Birth_month}
                                              onChange={handleChange}required

                                              name="date_of_Birth_month"
                                          >
                                            <option>Select one</option>
                                            <option vlaue="Jan">Jan</option>
                                            <option vlaue="Feb">Feb</option>
                                            <option vlaue="Mar">Mar</option>
                                            <option vlaue="Apr">Apr</option>
                                            <option vlaue="May">May</option>
                                            <option vlaue="Jun">Jun</option>
                                            <option vlaue="Jul">Jul</option>
                                            <option vlaue="Aug">Aug</option>
                                            <option vlaue="Sep">Sep</option>
                                            <option vlaue="Oct">Oct</option>
                                            <option vlaue="Nov">Nov</option>
                                            <option vlaue="Dec">Dec</option>
                                          </select>
                                        </label>
                                        <label
                                            htmlFor="my-select"
                                            className="col-4 text-grey"
                                        >
                                          Year
                                          <select
                                              id="my-select"
                                              className="form-select"
                                              value={formValue.date_of_Birth_year}
                                              onChange={handleChange}
                                              required
                                              name="date_of_Birth_year"
                                          > <option>Select one</option>
                                            <option value="2001">2001</option>
                                            <option value="2000">2000</option>
                                            <option value="1999">1999</option>
                                            <option value="1998">1998</option>
                                            <option value="1997">1997</option>
                                            <option value="1996">1996</option>
                                            <option value="1995">1995</option>
                                            <option value="1994">1994</option>
                                            <option value="1993">1993</option>
                                            <option value="1992">1992</option>
                                            <option value="1991">1991</option>
                                            <option value="1990">1990</option>
                                            <option value="1989">1989</option>
                                            <option value="1988">1988</option>
                                            <option value="1987">1987</option>
                                            <option value="1986">1986</option>
                                            <option value="1985">1985</option>
                                            <option value="1984">1984</option>
                                            <option value="1983">1983</option>
                                            <option value="1982">1982</option>
                                            <option value="1981">1981</option>
                                            <option value="1980">1980</option>
                                            <option value="1979">1979</option>
                                            <option value="1978">1978</option>
                                            <option value="1977">1977</option>
                                            <option value="1976">1976</option>
                                            <option value="1975">1975</option>
                                            <option value="1974">1974</option>
                                            <option value="1973">1973</option>
                                            <option value="1972">1972</option>
                                            <option value="1971">1971</option>
                                            <option value="1970">1970</option>
                                            <option value="1969">1969</option>
                                            <option value="1968">1968</option>
                                            <option value="1967">1967</option>
                                            <option value="1966">1966</option>
                                            <option value="1965">1965</option>
                                            <option value="1964">1964</option>
                                            <option value="1963">1963</option>
                                            <option value="1962">1962</option>
                                            <option value="1961">1961</option>
                                            <option value="1960">1960</option>
                                            <option value="1959">1959</option>
                                            <option value="1958">1958</option>
                                            <option value="1957">1957</option>
                                            <option value="1956">1956</option>
                                            <option value="1955">1955</option>
                                            <option value="1954">1954</option>
                                            <option value="1953">1953</option>
                                            <option value="1952">1952</option>
                                            <option value="1951">1951</option>
                                            <option value="1950">1950</option>
                                          </select>
                                        </label>
                                      </div>

                                      <div className="form-group mb-3">
                                        <label
                                            htmlFor="my-select"
                                            className="text-grey"
                                        >
                                          Living In
                                        </label>
                                        <select
                                            id="my-select"
                                            className="form-select"
                                            value={formValue.country}
                                            onChange={handleChange}
                                            name="country"
                                            required
                                        >
                                          <option select hidden>
                                            Select Country
                                          </option>
                                          {countries?.map((data) => (
                                              <option value={data.id}>
                                                {data.name}
                                              </option>
                                          ))}
                                          {/* <option>Australia</option><option>Canada</option><option>India</option><option>Kuwait</option><option>New Zealand</option><option>Pakistan</option><option>Saudi Arabia</option><option>South Africa</option><option>USA</option><option>UAE</option><option>UK</option> */}
                                        </select>
                                      </div>
                                      <div className="form-group mb-3">
                                        <label
                                            htmlFor="my-select"
                                            className="text-grey"
                                        >
                                          Living In
                                        </label>
                                        <select
                                            id="my-select"
                                            name="state"
                                            value={formValue.state}
                                            onChange={handleChange}
                                            className="form-select"
                                            required
                                        >
                                          <option select hidden>
                                            Select State
                                          </option>
                                          {state?.map((data) => (
                                              <option value={data.id}>
                                                {data.name}
                                              </option>
                                          ))}
                                          {/* <option>Australia</option><option>Canada</option><option>India</option><option>Kuwait</option><option>New Zealand</option><option>Pakistan</option><option>Saudi Arabia</option><option>South Africa</option><option>USA</option><option>UAE</option><option>UK</option> */}
                                        </select>
                                      </div>
                                      <div className="form-group mb-3">
                                        <label
                                            htmlFor="my-select"
                                            className="text-grey"
                                        >
                                          Living In
                                        </label>
                                        <select
                                            id="my-select"
                                            required
                                            name="city"
                                            value={formValue.city}
                                            onChange={handleChange}
                                            className="form-select"
                                        >
                                          <option select hidden>
                                            Select City
                                          </option>
                                          {city?.map((data) => (
                                              <option value={data.id}>
                                                {data.name}
                                              </option>
                                          ))}
                                          {/* <option>Australia</option><option>Canada</option><option>India</option><option>Kuwait</option><option>New Zealand</option><option>Pakistan</option><option>Saudi Arabia</option><option>South Africa</option><option>USA</option><option>UAE</option><option>UK</option> */}
                                        </select>
                                      </div>
                                    </div>

                                    <div className="form-group mb-3">
                                      <div className="profile-info">
                                        <p className="mb-0 text-dark">
                                          <Link to="/terms" className="text-dark">
                                            <i
                                                className="fa fa-info-circle"
                                                aria-hidden="true"
                                            ></i>{" "}
                                            by clicking submit you are agreeing to our
                                            terms and conditions of use.
                                          </Link>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className=" col-12 mb-0 ">
                                  {" "}
                                  <a
                                      className="button col-4 btn btn-theme rounded-sm animated right-icn"
                                      data-bs-dismiss="modal"
                                  >
                                <span>
                                  Close
                                  <i
                                      className="glyph-icon flaticon-hearts"
                                      aria-hidden="true"
                                  ></i>
                                </span>
                                  </a>
                                  <button
                                      type="submit"
                                      className="button col-4 btn-theme rounded-sm btn btn animated right-icn"

                                  >
                                <span>
                                  submit
                                  <i
                                      className="glyph-icon flaticon-hearts"
                                      aria-hidden="true"
                                  ></i>
                                </span>
                                  </button>
                                  {/* <a href='/createProfile' className="button col-4 btn-theme rounded-sm btn btn   animated right-icn" data-bs-dismiss="modal"><span>submit<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  */}
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>

            </div>

            <div className="menu">
              <nav id="menu" className="">
                <section className="menu-list-items">
                  <div className="container-fluid mt-3">
                    <div className="row position-relative">
                      <div
                        className={
                          location.pathname == "/" || location.pathname == ""
                            ? "col-12 position-relative d-flex"
                            : "col-12 position-relative d-sm-flex d-block"
                        }
                      >
                        <div
                          className={
                            location.pathname == "/" || location.pathname == ""
                              ? "col-1 p-0"
                              : "col-sm-1 col-12  text-left text-sm-center p-0 d-none"
                          }
                        >
                          <Link to="/">
                            <img
                              className="col-sm-12 col-4 offset-sm-0 offset-4 m-0"
                              src={window.location.origin + "/images/logo.png"}
                              alt="logo"
                            />
                          </Link>
                        </div>
                        <div
                          className={
                            location.pathname == "/" || location.pathname == ""
                              ? "col"
                              : "col-12 col-sm-8"
                          }
                        >
                          <ul
                            className={
                              location.pathname == "/" ||
                              location.pathname == ""
                                ? "float-right d-flex pt-4 text-white"
                                : "p-sm-4 p-0 pt-4 d-flex w-100 justify-content-center primary-text"
                            }
                          >
                            {location.pathname == "/" ||
                            location.pathname == "" ? (
                              <>

                                <li>
                                  <a
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal2"
                                    id="register"
                                  >
                                    Register
                                  </a>
                                </li>
                                <li>
                                  <af
                                    href="#"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  >
                                    Login
                                  </af>
                                </li>
                                <li>
                                  <Link
                                     to="/createProfile"
                                  >
                                    Login
                                  </Link>
                                </li>
                              </>
                            ) : (
                              <>
                                <li className="active col-1">
                                  <img
                                      className=" img-fluid offset-sm-0 offset-4 m-0"
                                      src={window.location.origin + "/images/logo.png"}
                                      alt="logo"
                                  />
                                </li>
                                <li className="col text-center d-flex flex-column justify-content-center h5">
                                  <Link
                                    className="primary-text mx-2 "
                                    to="/myaccount"
                                  >
                                    {" "}
                                    Profile{" "}
                                    <i className="fa fa-angle-down fa-indicator"></i>
                                  </Link>
                                </li>
                                <li className="col text-center d-flex flex-column justify-content-center h5">
                                  <Link
                                    className="primary-text mx-2 "
                                    to="/matches"
                                  >
                                    Matches{" "}
                                    <i className="fa fa-angle-down fa-indicator"></i>
                                  </Link>
                                </li>
                                <li className="col text-center d-flex flex-column justify-content-center h5">
                                  <Link
                                    className="primary-text mx-2"
                                    to="/search"
                                  >
                                    Search{" "}
                                    <i className="fa fa-angle-down fa-indicator"></i>
                                  </Link>
                                </li>
                                <li className="col text-center d-flex flex-column justify-content-center h5">
                                  <div
                                    className="menu d-sm-none d-block"
                                    onClick={() => {
                                      store.subHeader == false
                                        ? store.setSubHeader(true)
                                        : store.setSubHeader(false);
                                    }}
                                  >
                                    <i
                                      class="fa fa-bars"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                </li>
                              </>
                            )}
                          </ul>
                        </div>
                        {location.pathname == "/" || location.pathname == "" ? (
                          ""
                        ) : (
                          <>
                            <div className=" col d-sm-flex d-none flex-column justify-content-center">
                              <Link
                                to="/pricing"
                                className="btn btn-outline border"
                              >
                                <i class="fa fa-diamond" aria-hidden="true"></i> Upgrade
                              </Link>
                            </div>
                            <div className="col  d-flex flex-column justify-content-center">
                              {picture?.image_path==null?<>
                                <img
                                src={
                                  window.location.origin +
                                  "/images/counter/04.png"
                                }
                                className="rounded"
                                style={{ 
                                  width:"60px",
                                  height:"60px",  
                                  display: "inline",
                                  margin: "0 auto",
                                  objectFit:"cover",
                                  borderRadius:"50%",

                                 }}
                              /></>:<>

                                <div className="dropdown m-auto">
                                  <a
                                      className=" dropdown-toggle logo-toggle"
                                      type="button"
                                      id="dropdownMenuButton1"
                                      data-bs-toggle="dropdown"
                                      aria-expanded="false"
                                  >
                                    <img
                                        src={
                                            store.mediaUrl+picture?.image_path
                                        }
                                        style={{
                                          width:"70px",
                                          height:"70px",
                                          display: "inline",
                                          margin: "0 auto",
                                          borderRadius:"50%",
                                          objectFit:'cover', }}
                                    />
                                  </a>
                                  <ul
                                      className="dropdown-menu dropdown-logo-menu"
                                      aria-labelledby="dropdownMenuButton1"
                                  >
                                    {requests?.map((data)=>(
                                        <> <li>
                                          <a className="dropdown-item" href="#" >
                                            {data?.sender_name}
                                          </a>
                                          <button className="btn btn-sm btn-primary" onClick={()=>{requestAction(data?.sender_id,'Rejected')}}>Cancel</button>
                                          <button className="btn btn-sm btn-primary" onClick={()=>{requestAction(data?.sender_id,'Accepted')}}>Accept</button>
                                        </li></>
                                    ))}



                                  </ul>
                                </div>

                              </>}
                             
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </section>
              </nav>
            </div>
          </header>
        </>
      )}
    </Observer>
  );
};

export default Header;
