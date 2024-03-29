import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./assets/style.css";
import axios from "axios";
import { Observer } from "mobx-react-lite";
import Header from "../../../../Components/SubHeader";
import Footer from "../../../../Components/Footer";
import { StoreContext } from "./../../../../store";
import { useParams } from "react-router-dom";
import { data } from "jquery";

import { Carousel } from "react-responsive-carousel";

const Profile = () => {
  const [profileData, setProfile] = useState();
  const [email, setEmail] = useState(null);
  const [number, setPhone] = useState(null);
  const [authUserData, setAuthUserData] = useState();
  const [userData, setUserData] = useState();
  const [preferencesMatch, setPreferencesMatch] = useState();
  const [qualification, setQualification] = useState()
  const [profiles, setProfiles] = useState()
  const [editFields, setEditFields] = useState(true);
  const fieldDisablity = () => {
    setEditFields(!editFields);
  };
  const store = useContext(StoreContext);
  const param = useParams();

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
        method: "get",
        url: `${store.url}get-today-profile`,
        data: userId,
        headers: headers,
      }).then((response) => {
        const data = response.data;
        console.log(data["data"]["auth_user"]);
        setProfile(data["data"]["user"][0]);
        setUserData(data["data"]["other_user"]);
        setAuthUserData(data["data"]["auth_user"]["image"][0]);
        setPreferencesMatch(data["data"]["data"]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  async function contactInfo() {
    const token = localStorage.getItem("accessToken");
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      };
      const response = await axios({
        method: "post",
        url: `${store.url}contact-no`,
        headers: headers,
      }).then((response) => {
        const data = response.data;
        setEmail(data[1]);
        setPhone(data[0]);
      });
    } catch (error) {
      console.log(error);
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
  const handleContact = () => {
    contactInfo();
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem('user')
    getProfiles(token, JSON.parse(user).id)
    getProfile(token, JSON.parse(user).id)
  }, []);
  return (
    <Observer>
      {() => (
        <>

          <div className="w-100 h-100 bg-grey pt-5">
            <div className="container mt-3">
              <div className="row">
                <div className="col-12 mt-3 d-sm-block d-none rounded shadow bg-white">
                  <div className="offset-5 d-flex p-2">
                    <div className="col-8">
                      <div className="col-12  d-flex">
                        <div className="col-8 d-flex">
                          <div className="col-7">
                            <h5>
                              {profileData?.user.first_name +
                                " " +
                                profileData?.user.last_name}
                            </h5>
                          </div>
                          <div className="col-1">
                            <i class="fa fa-lock" aria-hidden="true"></i>
                          </div>
                          <div className="col-4">
                            <span class="badge bg-secondary">New</span>
                          </div>
                        </div>
                        <div className="col-4 text-end">
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
                                <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
                                  Action
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 d-flex">

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
                              <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <hr className="col-12 m-2 d-block" />
                      <div className="col-12 d-block ">
                        <div className="col-6 d-flex pt-4">
                          <div className="col-6  ">Height</div>
                          <div className="col-6" style={{ fontWeight: "bold" }}>
                            {profileData?.age}/{profileData?.height}
                          </div>
                          <div className="col-6 ">Cast</div>
                          <div className="col-6" style={{ fontWeight: "bold" }}>
                            {profileData?.cast == null
                              ? ""
                              : profileData?.cast.name}
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

                    <div className="col-4 p-border">
                      <div className="h-100 b-left">
                        <div className="col-12 font-style-italic text-center">
                          <div className="text-primary">Upgrade</div>
                          to Contact her directly
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
                        <div className="col-12 text-center" style={editFields?{display:"none"}:{display:"block"}}>
                          <a href="Tel:923040227000" className="btn px-5 py-1 m-1 btn-white border rounded b-radius" >
                           <i className="fa fa-phone" aria-hidden="true"></i> Call
                          </a>
                          <a
                          target="_blank"
                          href="https://api.whatsapp.com/send?phone=923040227000&text=Hello this is the starting message"
                           className="btn px-4 py-1 m-1 btn-success border rounded b-radius">
                            <i class="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
                          </a>
                          <a className="btn px-5 py-1 m-1 btn-white border rounded b-radius">
                          <i class="fa fa-comment" aria-hidden="true"></i> Chat
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2  overlay d-sm-block d-none">
                  {profileData?.user.picture[0] == null ? (
                      <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
                  ) : (
                    <Carousel showThumbs={false}>
                      {profileData?.user.picture.map((image) => (
                        <div style={{width:'100%'}}>
                          <img
                            style={
                              profileData?.pictures_settings == "visible" ||
                              (data.pictures_settings == "premimum" &&
                                data.user_subscription != null)
                                ? { filter: "blur(0px)", width: "inherit" }
                                : { filter: "blur(8px)", width: "inherit" }
                            }
                            src={store.mediaUrl + image?.image_path}
                            className="img-fluid rounded"
                            alt=""
                          />
                        </div>
                      ))}
                    </Carousel>
                  )}
                </div>

                {/*  */}

                <div className="employers-list mb-5 shadow rounded p-0 pt-sm-0 d-sm-none d-block pt-5 bg-img">
                  <div className="d-sm-none d-block pt-sm-0 pt-5">
                    {" "}
                    &nbsp;
                    <br /> &nbsp;
                    <br />
                  </div>
                  <div className="col-4 offset-sm-0 offset-4 pt-sm-0 pt-5 ">

                    <img
                      className="w-75 b-sm-radius d-sm-none d-block m-auto  pt-sm-0 pt-5"
                      src={
                        window.location.origin + "/images/profile/default.png"
                      }
                      alt=""
                    />
                    <img
                      className="img-fluid b-sm-radius d-sm-block d-none"
                      src={
                        window.location.origin + "/images/profile/default.png"
                      }
                      alt=""
                    />
                    {/* </> */}

                    {/* } */}
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
                  <div className="col-sm-5 offset-12 p-2">
                    <div className="col-12 d-flex">
                      <div className="col-sm-8 col-12 d-flex">
                        <div className="col-sm-7 col-6 text-start">
                          <h5 className="d-sm-block d-none">
                            <Link
                              to={"/public/profile/" + profileData?.user_id}
                            >
                              {profileData?.user
                                ? ""
                                : profileData?.user.first_name +
                                  " " +
                                  profileData?.user.last_name}{" "}
                            </Link>
                          </h5>
                          <div
                            className="d-sm-none text-sm-dark text-white d-block"
                            style={{ fontSize: "18px" }}
                          >
                            <Link
                              to={"/public/profile/" + profileData?.user_id}
                            >
                              {" "}
                              {profileData?.user
                                ? ""
                                : profileData?.user.first_name +
                                  " " +
                                  profileData?.user.last_name}
                            </Link>
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
                              <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
                                Action
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
                                Another action
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
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
                            <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <hr className="col-12 m-2 d-sm-block d-none" />
                    <div className="col-12 d-block ">
                      <div className="col-12 d-flex pt-1">
                        <div className="col-6 text-start text-sm-dark text-white  ">
                          25 5.7ft
                        </div>
                        <div className="col-6 text-start text-sm-dark text-white ">
                          Bhatti
                        </div>
                      </div>
                      <div className="col-12 d-flex pt-1">
                        <div className="col-6 text-start text-sm-dark text-white ">
                          Pakistani
                        </div>
                        <div className="col-6 text-start text-sm-dark text-white ">
                          Islam
                        </div>
                      </div>

                      <div className="col-12 d-flex pt-1">
                        <div className="col-6 d-sm-block d-none ">BSCS</div>
                        <div className="col-6 d-sm-block d-none">Engineer</div>
                      </div>
                    </div>
                  </div>
                  <hr className="col-12 m-2 d-sm-none d-block" />
                  <div className="col-sm-3 d-sm-block d-none p-border text-center">
                    <div className="h-100 b-left text-center text-sm-dark text-white">
                      <div className="col-12 font-style-italic ">
                        Like This Profile
                      </div>
                      <h1>
                        <i
                          class="fa fa-check-circle text-success"
                          aria-hidden="true"
                        ></i>
                      </h1>
                      Connect Now
                    </div>
                  </div>
                  <div className="d-sm-none d-flex col-12">
                    <div className="col-6 text-left col-8 d-flex flex-column justify-content-center">
                      {" "}
                      Like This Profile
                    </div>
                    <div className="col-6 d-flex">
                      <div className="col-8 d-flex flex-column text-sm-dark text-white justify-content-center">
                        Connect Now
                      </div>
                      <div className="col-2">
                        <i
                          class="fa fa-check-circle text-success"
                          style={{ fontSize: "40px" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-sm-4 col-12 shadow bg-white mt-10-5 p-1 rounded"
                  style={{ height: "fit-content" }}
                >
                  <div className="bg-grey p-1 rounded">Similar Posts</div>
                  {profiles?.map((data) => (
                  <div className="col-12">
                    <div className="employers-list">
                      <div className="employers-list-logo">

                           {data.user.picture[0]==null?

              <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid' srcset="" />
              :
               <img src={store.mediaUrl+data?.user?.picture[0].image_path} alt="" style={data.pictures_settings=='visible' ||((data?.pictures_settings=='premimum') && (data?.user_subscription!=null))?{filter: 'blur(0px)'}:{filter: 'blur(8px)'}} className='img-fluid' srcset="" />
             }
                      </div>
                      <div className="employers-list-details">
                        <div className="employers-list-info">
                          <div className="employers-list-title">
                            <h5 className="mb-0">
                              <a href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile"> <b>{data?.user.first_name+' '+data?.user.last_name}</b></a>
                            </h5>
                          </div>
                          <div className="employers-list-option">
                            <ul className="list-unstyled">
                              <li className="m-0 p-0">{data?.working_with}</li>
                              <li className="m-0 p-0">       24 yr,{ data?.height}, Urdu, {data?.user?.country?.name}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}

                </div>
                <div className="col-sm-7 col-12  shadow bg-white rounded mb-5 mt-5 ms-sm-5 m-0">
                  <ul
                    className="nav nav-tabs d-flex col-12 nav-tabs-02 "
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="btn  active ms-0"
                        id="tab-01"
                        data-bs-toggle="tab"
                        href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#tab-10"
                        role="tab"
                        aria-controls="tab-10"
                        aria-selected="true"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="btn "
                        id="tab-02"
                        data-bs-toggle="tab"
                        href="src/web/Pages/LoggedIn/Matches/TodayProfile/Profile#tab-11"
                        role="tab"
                        aria-controls="tab-11"
                        aria-selected="false"
                      >
                        My Profile
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="tab-10"
                      role="tabpanel"
                      aria-labelledby="tab-01"
                    >
                      <div className="row">
                        <h4 className="d-flex">
                          <div className="b-radius">
                            <i
                              class="fa fa-paragraph px-1"
                              aria-hidden="true"
                            ></i>
                          </div>

                          <div className="flex-column justify-content-center d-flex px-3">
                            About{" "}
                            {profileData?.user.first_name +
                              " " +
                              profileData?.user.last_name}
                          </div>
                        </h4>
                        <div className="p-border-t-md">
                          <div className="col-11 p-sm-0  p-border-md b-left">
                            {profileData?.about}
                          </div>
                        </div>
                        <h4 className="d-flex">
                          <div className="b-radius">
                            <i class="fa fa-phone px-1" aria-hidden="true"></i>
                          </div>

                          <div className="flex-column justify-content-center d-flex px-3">
                            Contact
                          </div>
                        </h4>
                        <div className="p-border-t-md">
                          <div className="col-11 p-border-md b-left d-flex">
                            <div className="col-6 border rounded p-1">
                              <div className="col-12 d-flex">
                                <div className="col-2">
                                  <i class="fa fa-phone" aria-hidden="true"></i>
                                </div>
                                <div className="col-10">
                                  <div className="col-12">Contact Number</div>

                                  <div
                                    className="col-12"
                                    style={
                                      email == null && number == null
                                        ? { display: "block" }
                                        : { display: "none" }
                                    }
                                  >
                                    +92 3XXXX XXXX
                                  </div>
                                  <div
                                    className="col-12"
                                    style={
                                      email == null && number == null
                                        ? { display: "none" }
                                        : { display: "block" }
                                    }
                                  >
                                    {number}
                                  </div>
                                </div>
                              </div>
                              <div className="col-12 d-flex">
                                <div className="col-2">
                                  <i
                                    class="fa fa-mail-forward"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <div className="col-10">
                                  <div className="col-12">Email Id</div>
                                  <div
                                    className="col-12"
                                    style={
                                      email == null && number == null
                                        ? { display: "block" }
                                        : { display: "none" }
                                    }
                                  >
                                    XXXXXXXXXX@gmail.com
                                  </div>
                                  <div
                                    className="col-12"
                                    style={
                                      email == null && number == null
                                        ? { display: "none" }
                                        : { display: "block" }
                                    }
                                  >
                                    {email}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-6 d-flex flex-column justify-content-center"
                              onClick={handleContact}
                              style={
                                email == null && number == null
                                  ? { display: "block", margin: "-5px" }
                                  : { display: "none" }
                              }
                            >
                              <div className="d-flex">
                                <h6 className="p-2 b-radius px-3 ">
                                  <i class="fa fa-lock" aria-hidden="true"></i>
                                </h6>
                                <div className="text-primary">Click</div>
                                to view details
                              </div>
                            </div>
                          </div>
                        </div>
                        <h4 className="d-flex">
                          <div className="b-radius">
                            <i class="fa fa-book px-1" aria-hidden="true"></i>
                          </div>

                          <div className="flex-column justify-content-center d-flex px-3">
                            Background
                          </div>
                        </h4>
                        <div className="p-border-t-md">
                          <div className="col-11 p-border-md b-left">
                            <ul>
                              <li>
                                {" "}
                                {profileData?.religion == null
                                  ? ""
                                  : profileData?.religion.name}
                              </li>
                              <li>
                                {" "}
                                {profileData?.cast == null
                                  ? ""
                                  : profileData?.cast.name}
                              </li>
                              <li>
                                {" "}
                                {profileData?.hobbies}, {profileData?.interest}
                              </li>
                              <li>
                                {" "}
                                Lives in{" "}
                                {profileData?.city == null
                                  ? ""
                                  : profileData?.city.name}
                                ,{" "}
                                {profileData?.state == null
                                  ? ""
                                  : profileData?.state.name}
                                ,{" "}
                                {profileData?.country == null
                                  ? ""
                                  : profileData?.country.name}{" "}
                                (Citizen)
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h4 className="d-flex">
                          <div className="b-radius">
                            <i class="fa fa-users" aria-hidden="true"></i>
                          </div>

                          <div className="flex-column justify-content-center d-flex px-3">
                            Family Details
                          </div>
                        </h4>
                        <div className="p-border-t-md">
                          {/* <div className="col-11 p-border-md b-left">
        Her father is employed and her mother is a homemaker. She has 1 brother (unmarried) and 3 sisters (1 married).
        </div> */}
                        </div>
                        <h4 className="d-flex">
                          <div className="b-radius">
                            <i class="fa fa-book px-1" aria-hidden="true"></i>
                          </div>

                          <div className="flex-column justify-content-center d-flex px-3">
                            Education & Career
                          </div>
                        </h4>
                        <div className="p-border-t-md">
                          <div className="col-11 p-border-md b-left">
                            <ul>
                              <li>{profileData?.qualification}</li>
                              <li>
                                {profileData?.job == null
                                  ? "Currently Not Working"
                                  : profileData?.job}
                              </li>
                            </ul>
                          </div>
                        </div>

                        <h4 className="d-flex">
                          <div className="b-radius">
                            <i class="fa fa-book px-1" aria-hidden="true"></i>
                          </div>

                          <div className="flex-column justify-content-center d-flex px-3">
                            Preferences
                          </div>
                        </h4>
                        <div className="p-border-t-md">
                          <div className="col-11 p-sm-0 p-border-last-md b-left">
                            <div className="row">
                              <div className="col-3">
                                <div
                                  class="image-cropper"
                                  style={{
                                    width: " 100px",
                                    height: "100px",
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "50%",
                                  }}
                                >
                                  {profileData?.user.picture[0] == null ? (
                                    <img
                                      src="/images/profile/02.jpg"
                                      style={{
                                        height: "150px",
                                        display: "inline",
                                        margin: "0 auto",
                                        width: "auto",
                                        objectFit: 'cover',
                                      }}
                                      className="rounded img-fluid"
                                    />
                                  ) : (
                                    <Carousel showThumbs={false}>
                                      {profileData?.user.picture.map(
                                        (image) => (
                                          <div>
                                            <img
                                              src={
                                                store.mediaUrl +
                                                image?.image_path
                                              }
                                              style={{
                                                height: "150px",
                                                display: "inline",
                                                margin: "0 auto",
                                                width: "auto",
                                                objectFit:'cover',
                                              }}
                                              className="rounded img-fluid"
                                            />
                                          </div>
                                        )
                                      )}
                                    </Carousel>
                                  )}
                                </div>
                              </div>
                              <div className="col-6 d-flex flex-column justify-content-center">
                                <div
                                  className="bg-white p-3 pe-sm-0 justify-content-center"
                                  style={{ borderRadius: "50px" }}
                                >
                                  matches
                                </div>
                              </div>
                              <div className="col-3 ps-sm-0">
                                <div
                                  class="image-cropper"
                                  style={{
                                    width: " 100px",
                                    height: "100px",
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "50%",
                                  }}
                                >
                                  {authUserData?.image_path == null ? (
                                    <img
                                      src="/images/profile/03.jpg"
                                      style={{
                                        height: "150px",
                                        display: "inline",
                                        margin: "0 auto",
                                        width: "auto",
                                        objectFit: 'cover',
                                      }}
                                      className="rounded img-fluid"
                                    />
                                  ) : (
                                    <img
                                      src={
                                        store.mediaUrl +
                                        authUserData?.image_path
                                      }
                                      style={{
                                        height: "150px",
                                        display: "inline",
                                        margin: "0 auto",
                                        width: "auto",
                                        objectFit:'cover',
                                      }}
                                      className="rounded img-fluid"
                                    />
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-6 text-start text-dark">
                                Her Preferences
                              </div>

                              <div className="col-6 text-end text-dark">
                                Your Matchs
                              </div>
                            </div>
                            <div className="row pt-3">
                              <div className="col-10">
                                <div className="col-12 p-0 text-danger">
                                  Age
                                </div>
                                <div className="col-12 p-0">
                                  {userData?.min_age} to {userData?.max_age}
                                </div>
                              </div>
                              {preferencesMatch?.age == true ? (
                                <div className="col-2 text-success text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-check-circle"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              ) : (
                                <div className="col-2 text-danger text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-times-circle-o"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              )}
                            </div>
                            <hr className="m-2 p-0" />
                            <div className="row">
                              <div className="col-10">
                                <div className="col-12 p-0 text-danger">
                                  Height
                                </div>
                                <div className="col-12 p-0">
                                  {userData?.min_height} to{" "}
                                  {userData?.max_height}
                                </div>
                              </div>
                              {preferencesMatch?.height == true ? (
                                <div className="col-2 text-success text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-check-circle"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              ) : (
                                <div className="col-2 text-danger text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-times-circle-o"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              )}
                            </div>
                            <hr className="m-2 p-0" />
                            <div className="row">
                              <div className="col-10">
                                <div className="col-12 p-0 text-danger">
                                  Marital Status
                                </div>
                                <div className="col-12 p-0">
                                  {userData?.martial_status}
                                </div>
                              </div>
                              {preferencesMatch?.martial_status == true ? (
                                <div className="col-2 text-success text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-check-circle"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              ) : (
                                <div className="col-2 text-danger text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-times-circle-o"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              )}
                            </div>
                            <hr className="m-2 p-0" />
                            <div className="row">
                              <div className="col-10">
                                <div className="col-12 p-0 text-danger">
                                  Religion / Community
                                </div>
                                <div className="col-12 p-0">
                                  <span>
                                    {userData?.religion}:{userData?.community}
                                  </span>
                                  {/* <div className="more showMore"  tabindex="0">...<span className=" text-primary">More</span></div>
          <div className="less showLess" tabindex="0"><span className=" text-primary" tabindex="0">Less</span></div> */}
                                  <span class="span2 float-right" tabindex="0">
                                    <div className="text-primary">
                                      ... more{" "}
                                    </div>
                                  </span>

                                  <p class="alert p-0">
                                    {" "}
                                    Muslim: Syed, Muslim: Pathan, Muslim:
                                    Ansari, Muslim: Lebbai, Muslim: Dekkani,
                                    Muslim: Siddiqui, Muslim: Qureshi, Muslim:
                                    Arain, Muslim: Mughal, Muslim: Jat, Muslim:
                                    Maraicar, Muslim: Awan, Muslim: Dudekula
                                  </p>
                                </div>
                              </div>
                              {preferencesMatch?.religion == true ? (
                                <div className="col-2 text-success text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-check-circle"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              ) : (
                                <div className="col-2 text-danger text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-times-circle-o"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              )}
                            </div>
                            <hr className="m-2 p-0" />
                            <div className="row">
                              <div className="col-10">
                                <div className="col-12 p-0 text-danger">
                                  Mother Tongue
                                </div>
                                <div className="col-12 p-0">
                                  {userData?.mother_tongue}
                                </div>
                              </div>

                              {preferencesMatch?.mother_tongue == true ? (
                                <div className="col-2 text-success text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-check-circle"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              ) : (
                                <div className="col-2 text-danger text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-times-circle-o"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              )}
                            </div>

                            <hr className="m-2 p-0" />
                            <div className="row">
                              <div className="col-10">
                                <div className="col-12 p-0 text-danger">
                                  Country Living in
                                </div>
                                <div className="col-12 p-0">
                                  {userData?.country_living_in}
                                </div>
                              </div>
                              {preferencesMatch?.country_living_in == true ? (
                                <div className="col-2 text-success text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-check-circle"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              ) : (
                                <div className="col-2 text-danger text-end d-flex justify-content-center flex-column">
                                  {" "}
                                  <i
                                    class="fa fa-times-circle-o"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                              )}
                            </div>

                            <hr className="m-2 p-0" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Observer>
  );
};

export default Profile;
