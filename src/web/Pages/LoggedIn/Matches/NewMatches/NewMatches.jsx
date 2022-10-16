import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Observer } from "mobx-react-lite";
import { StoreContext } from "./../../../../store";
import "./../assets/css/style.css";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const NewMatches = () => {
  const [qualification, setQualification] = React.useState();
  const [religions, setReligions] = useState();
  const [countries, setCountries] = useState();
  const [states, setStates] = useState();
  const [cities, setCities] = useState();
  const [casts, setCasts] = useState();
  const [sectors, setSectors] = useState();
  const [profile,setProfile] = useState()

  const [editFields, setEditFields] = useState(true);
  const fieldDisablity = () => {
    setEditFields(!editFields);
  };
  const handleToast = ()=>{
    toast.error('You are not member')
  }
  const [formValue, setformValue] = React.useState({
    gender: "",
    marital_status: "",
    height: "",
    age: "",
    income:"",
    cast: "",
    edjucation: "",
    country: "",
    state:"",
    sector:"",
    religion:"",
    blood_group:"",
    working_with:"",
    city: "",
    on_behalf:"",
    qualification:"",
    days: "",
  });
  const store = useContext(StoreContext);
  const navigate = useNavigate();
  const [profileData, setProfiles] = useState();

  async function sendRequest(reciever_id){
    const token = localStorage.getItem("accessToken");
    const rec_id = new FormData();
    rec_id.append("rec_id", reciever_id );
    const response = await axios({
      method: "post",
      url: `${store.url}friend-request`,
      data:rec_id,
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {

      // const data = response.data;
      // navigate("/public/profile/" + viewed_id);
    });
  }

  const handleChange = (event) => {
    setformValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
    console.log('formValue==========>'. event.target.value);

  };
  async function filter(formValue) {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");
    const formData = new FormData();
    formData.append("days", formValue.days );
    formData.append("income", formValue.income);
    formData.append("qualification", formValue.qualification);
    formData.append("on_behalf", formValue.on_behalf);
    formData.append("height", formValue.height);
    formData.append("blood_group", formValue.blood_group);
    formData.append("working_with", formValue.working_with);
    formData.append("marital_status", formValue.marital_status);
    formData.append("gender", formValue.gender);
    formData.append("religion", formValue.religion);
    formData.append("cast", formValue.cast);
    formData.append("sector", formValue.sector);
    formData.append("country", formValue.country);
    formData.append("state", formValue.state);
    formData.append("city", formValue.city);
    try {

      console.log(formData);
      const response = await axios({
        method: "post",
        url: `${store.url}get-new-profiles`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {

        const data = response.data;
        setQualification(data[0]["qualification"]);
        setProfiles(data[0]["profiles"]);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function profileView(viewed_id) {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");
    const formData = new FormData();
    const viewer_id = JSON.parse(user)["id"];
    formData.append("viewer_id", viewer_id);
    formData.append("viewed_id", viewed_id);
    try {


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

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    const user = localStorage.getItem('user')
    const countries = JSON.parse(localStorage.getItem("countries"));
    const states = JSON.parse(localStorage.getItem("states"));
    const cities = JSON.parse(localStorage.getItem("cities"));
    const sectors = JSON.parse(localStorage.getItem("sectors"));
    const religions = JSON.parse(localStorage.getItem("religions"));
    const casts = JSON.parse(localStorage.getItem("casts"));

    setReligions(religions)
    // setCountries(countries)
    // setStates(states)
    // setCities(cities)
    setCasts(casts)
    setSectors(sectors)
    getProfile(token,JSON.parse(user).id)
    filter(formValue);
  }, [formValue]);

  return (
      <Observer>
        {() => (
            <>

              <section className="space-ptb">
                <div className="container mt-3">
                  <div className="row">
                    <div className="col-lg-3 d-sm-block d-none">
                      <div className="sidebar">
                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>Date Posted</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#dateposted"
                                role="button"
                                aria-expanded="false"
                                aria-controls="dateposted"
                            >
                              {" "}
                            </a>
                          </div>
                          <div className="collapse show" id="dateposted">
                            <div className="widget-content">
                              <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="days"
                                    value={1}
                                    onClick={handleChange}
                                    id="dateposted2"
                                />
                                <label
                                    className="form-check-label"
                                    for="dateposted2"
                                >
                                  Last 24 hour
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="days"
                                    value={7}
                                    onClick={handleChange}
                                    id="dateposted3"
                                />
                                <label
                                    className="form-check-label"
                                    for="dateposted3"
                                >
                                  Last 7 days
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="days"
                                    value={14}
                                    onClick={handleChange}
                                    id="dateposted4"
                                />
                                <label
                                    className="form-check-label"
                                    for="dateposted4"
                                >
                                  Last 14 days
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="days"
                                    value={30}
                                    onClick={handleChange}
                                    id="dateposted5"
                                />
                                <label
                                    className="form-check-label"
                                    for="dateposted5"
                                >
                                  Last 30 days
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr/>
                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>Religions</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#dateposted"
                                role="button"
                                aria-expanded="false"
                                aria-controls="dateposted"
                            >
                              {" "}
                            </a>
                          </div>
                          <div className="collapse show" id="dateposted">
                            <div className="widget-content">
                              {religions?.map((data) => (
                                  <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="religion"
                                        value={data.id}
                                        onClick={handleChange}
                                        id="dateposted2"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="dateposted2"
                                    >
                                      {data.name}
                                    </label>
                                  </div>
                              ))}

                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>Sector</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#dateposted"
                                role="button"
                                aria-expanded="false"
                                aria-controls="dateposted"
                            >
                              {" "}
                            </a>
                          </div>
                          <div className="collapse show" id="dateposted">
                            <div className="widget-content">
                              {sectors?.map((data) => (
                                  <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="sector"
                                        value={data.id}
                                        onClick={handleChange}
                                        id="dateposted2"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="dateposted2"
                                    >
                                      {data.name}
                                    </label>
                                  </div>
                              ))}

                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>Martial Status</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#experience"
                                role="button"
                                aria-expanded="false"
                                aria-controls="experience"
                            >
                              {" "}
                              <i className="fa fa-chevron-down"></i>{" "}
                            </a>
                          </div>
                          <div className="collapse show" id="experience">
                            <div className="widget-content">
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Single"}
                                    name="marital_status"
                                    onClick={handleChange}
                                    id="experience2"
                                />
                                <label
                                    className="form-check-label"
                                    for="experience2"
                                >
                                  Single
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Divorced"}
                                    name="marital_status"
                                    onClick={handleChange}
                                    id="experience2"
                                />
                                <label
                                    className="form-check-label"
                                    for="experience2"
                                >
                                  Divorced
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Window"}
                                    name="marital_status"
                                    onClick={handleChange}
                                    id="experience2"
                                />
                                <label
                                    className="form-check-label"
                                    for="experience2"
                                >
                                  Window
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Married"}
                                    name="marital_status"
                                    onClick={handleChange}
                                    id="experience2"
                                />
                                <label
                                    className="form-check-label"
                                    for="experience2"
                                >
                                  Married
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>OnBehalf</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#Offeredsalary"
                                role="button"
                                aria-expanded="false"
                                aria-controls="Offeredsalary"
                            >
                              {" "}
                              <i className="fa fa-chevron-down"></i>{" "}
                            </a>
                          </div>
                          <div className="collapse show" id="Offeredsalary">
                            <div className="widget-content">
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Son"}
                                    name="on_behalf"
                                    onClick={handleChange}
                                    id="Offeredsalary1"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary1"
                                >
                                  Son
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Myself"}
                                    name="on_behalf"
                                    onClick={handleChange}
                                    id="Offeredsalary2"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary2"
                                >
                                  Myself
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Daughter"}
                                    name="on_behalf"
                                    onClick={handleChange}
                                    id="Offeredsalary3"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary3"
                                >
                                  Daughter
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Sister"}
                                    name="on_behalf"
                                    onClick={handleChange}
                                    id="Offeredsalary4"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary4"
                                >
                                  Sister
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Brother"}
                                    name="on_behalf"
                                    onClick={handleChange}
                                    id="Offeredsalary5"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary5"
                                >
                                  Brother
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>Salary</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#Offeredsalary"
                                role="button"
                                aria-expanded="false"
                                aria-controls="Offeredsalary"
                            >
                              {" "}
                              <i className="fa fa-chevron-down"></i>{" "}
                            </a>
                          </div>
                          <div className="collapse show" id="Offeredsalary">
                            <div className="widget-content">
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"10000-20000"}
                                    name="income"
                                    onClick={handleChange}
                                    id="Offeredsalary1"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary1"
                                >
                                  10k - 20k
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"20000-30000"}
                                    name="income"
                                    onClick={handleChange}
                                    id="Offeredsalary2"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary2"
                                >
                                  20k - 30k
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"30000-40000"}
                                    name="income"
                                    onClick={handleChange}
                                    id="Offeredsalary3"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary3"
                                >
                                  30k - 40k
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"40000-50000"}
                                    name="income"
                                    onClick={handleChange}
                                    id="Offeredsalary4"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary4"
                                >
                                  40k - 50k
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"50000-60000"}
                                    name="income"
                                    onClick={handleChange}
                                    id="Offeredsalary5"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary5"
                                >
                                  50k - 60k
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr />
                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>Qualification</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#Offeredsalary"
                                role="button"
                                aria-expanded="false"
                                aria-controls="Offeredsalary"
                            >
                              {" "}
                              <i className="fa fa-chevron-down"></i>{" "}
                            </a>
                          </div>
                          <div className="collapse show" id="Offeredsalary">
                            <div className="widget-content">
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"PHd"}
                                    name="qualification"
                                    onClick={handleChange}
                                    id="Offeredsalary1"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary1"
                                >
                                  PHd
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"MS/M-Phil"}
                                    name="qualification"
                                    onClick={handleChange}
                                    id="Offeredsalary2"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary2"
                                >
                                  MS/M-Phil
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"BS Honrs"}
                                    name="qualification"
                                    onClick={handleChange}
                                    id="Offeredsalary3"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary3"
                                >
                                  BS Honrs
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"BSC"}
                                    name="qualification"
                                    onClick={handleChange}
                                    id="Offeredsalary4"
                                />
                                <label
                                    className="form-check-label"
                                    for="Offeredsalary4"
                                >
                                  BSC
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />


                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>Blood Group</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#gender"
                                role="button"
                                aria-expanded="false"
                                aria-controls="gender"
                            >
                              <i className="fa fa-chevron-down"></i>
                            </a>
                          </div>
                          <div className="collapse show" id="gender">
                            <div className="widget-content">
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"A+"}
                                    name="blood_group"
                                    onClick={handleChange}
                                    id="gender1"
                                />
                                <label className="form-check-label" for="gender1">
                                  A+
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"A-"}
                                    name="blood_group"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  A-
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"B-"}
                                    name="blood_group"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  B-
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"B+"}
                                    name="blood_group"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  B+
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"AB-"}
                                    name="blood_group"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  AB-
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"AB+"}
                                    name="blood_group"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  AB+
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"O-"}
                                    name="blood_group"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  O-
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"O+"}
                                    name="blood_group"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  O+
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>


                        <hr />
                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>Work</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#gender"
                                role="button"
                                aria-expanded="false"
                                aria-controls="gender"
                            >
                              <i className="fa fa-chevron-down"></i>
                            </a>
                          </div>
                          <div className="collapse show" id="gender">
                            <div className="widget-content">
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Govt Job"}
                                    name="working_with"
                                    onClick={handleChange}
                                    id="gender1"
                                />
                                <label className="form-check-label" for="gender1">
                                  Govt Job
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Private Job"}
                                    name="working_with"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  Private Job
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Business"}
                                    name="working_with"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  Business
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>Height</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#gender"
                                role="button"
                                aria-expanded="false"
                                aria-controls="gender"
                            >
                              <i className="fa fa-chevron-down"></i>
                            </a>
                          </div>
                          <div className="collapse show" id="gender">
                            <div className="widget-content">
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"5.5ft-5.12ft"}
                                    name="height"
                                    onClick={handleChange}
                                    id="gender1"
                                />
                                <label className="form-check-label" for="gender1">
                                  5.5ft-5.12ft
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"6.0ft-6.6ft"}
                                    name="height"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  6.0ft-6.6ft
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"6.6ft-6.12ft"}
                                    name="height"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  6.6ft-6.12ft
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"7.0ft-7.6ft"}
                                    name="height"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  7.0ft-7.6ft
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr />
                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>Gender</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#gender"
                                role="button"
                                aria-expanded="false"
                                aria-controls="gender"
                            >
                              <i className="fa fa-chevron-down"></i>
                            </a>
                          </div>
                          <div className="collapse show" id="gender">
                            <div className="widget-content">
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Male"}
                                    name="gender"
                                    onClick={handleChange}
                                    id="gender1"
                                />
                                <label className="form-check-label" for="gender1">
                                  Male
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    value={"Female"}
                                    name="gender"
                                    onClick={handleChange}
                                    id="gender2"
                                />
                                <label className="form-check-label" for="gender2">
                                  Female
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <hr />
                        <div className="widget bg-white p-1 shadow rounded">
                          <div className="widget-title widget-collapse bg-grey">
                            <h6>Cast</h6>
                            <a
                                className="ms-auto"
                                data-bs-toggle="collapse"
                                href="#dateposted"
                                role="button"
                                aria-expanded="false"
                                aria-controls="dateposted"
                            >
                              {" "}
                            </a>
                          </div>
                          <div className="collapse show" id="dateposted">
                            <div className="widget-content">
                              {casts?.map((data) => (
                                  <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="cast"
                                        value={data.id}
                                        onClick={handleChange}
                                        id="dateposted2"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="dateposted2"
                                    >
                                      {data.name}
                                    </label>
                                  </div>
                              ))}

                            </div>
                          </div>
                        </div>
                        <hr />

                      </div>
                    </div>

                    <div className="col-lg-9">
                      {profileData?.map((data,index) => (
                          <>
                            <div
                                className="employers-list mb-5 shadow rounded p-0 pt-sm-0 pt-5 "
                            >
                              <div className="d-sm-none d-block pt-sm-0 pt-5">
                                {" "}
                                &nbsp;
                                <br/> &nbsp;
                                <br/>
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
                                                        ? {filter: "blur(0px)"}
                                                        : {filter: "blur(8px)"}
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
                                                        ? {filter: "blur(0px)"}
                                                        : {filter: "blur(8px)"}
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
                                <span style={{curser: 'pointer'}}
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
                                          style={{fontSize: "1.125rem"}}
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
                                      <i className="fa fa-lock" aria-hidden="true"></i>
                                    </div>
                                    <div className="col-4 d-sm-block d-none">
                                      <span className="badge bg-secondary">New</span>
                                    </div>
                                    <div
                                        className="col-sm-3 text-sm-dark text-white col-6 d-sm-none d-block text-start">
                                      <i className="fa fa-male" aria-hidden="true"></i>
                                      <i className="fa fa-female" aria-hidden="true"></i>
                                      You & Her
                                    </div>
                                  </div>
                                  <div className="col-4 d-sm-block d-none text-end text-dark">
                                    <div className="dropdown">
                                      <a
                                          className=" dropdown-toggle"
                                          type="button"
                                          id="dropdownMenuButton1"
                                          data-bs-toggle="dropdown"
                                          aria-expanded="false"
                                      ></a>
                                      <ul
                                          className="dropdown-menu"
                                          aria-labelledby="dropdownMenuButton1"
                                      >
                                        <li>
                                          <a className="dropdown-item" href="#">
                                            Action
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item" href="#">
                                            Another action
                                          </a>
                                        </li>
                                        <li>
                                          <a className="dropdown-item" href="#">
                                            Something else here
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-12 d-sm-flex d-none">
                                  <div className="col-6 "></div>
                                  <div className="dropdown">
                                    <a
                                        className=" dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                      <i className="fa fa-male" aria-hidden="true"></i>
                                      <i className="fa fa-female" aria-hidden="true"></i>
                                      You & Her
                                    </a>
                                    <ul
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton1"
                                    >
                                      <li>
                                        <a className="dropdown-item" href="#">
                                          Action
                                        </a>
                                      </li>
                                      <li>
                                        <a className="dropdown-item" href="#">
                                          Another action
                                        </a>
                                      </li>
                                      <li>
                                        <a className="dropdown-item" href="#">
                                          Something else here
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>

                                <hr className="col-12 m-2 d-sm-block d-none"/>
                                <div className="col-12 d-block ">
                                  <div className="col-12 d-flex pt-1">
                                    <div className="col-6 text-start text-sm-white text-dark  ">
                                      {data.age}/ {data.height}
                                    </div>
                                    <div className="col-6 text-start text-sm-white text-dark ">
                                      {data.marital_status}
                                    </div>
                                  </div>
                                  <div className="col-12 d-flex pt-1">
                                    <div className="col-6 text-start text-sm-white text-dark  ">
                                      {data.religion == null ? "" : data.religion.name}
                                    </div>
                                    <div className="col-6 text-start text-sm-white text-dark ">
                                      {data.cast == null ? "" : data.cast.name}
                                    </div>
                                  </div>
                                  <div className="col-12 d-flex pt-1">
                                    <div className="col-6 text-start text-sm-white text-dark ">
                                      {data.state == null ? "" : data.state.name}
                                    </div>
                                    <div className="col-6 text-start text-sm-white text-dark ">
                                      {data.city == null ? "" : data.city.name}
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
                                  <div className="col-12 d-flex pt-1">
                                    About <br/>
                                    <div className="col-12 d-sm-block d-none "
                                         style={{overflow: 'hidden', whiteSpace: 'nowrap'}}>
                                      <br/>
                                      {data.about}...See More

                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr className="col-12 m-2 d-sm-none d-block"/>
                              <div className="col-sm-3 d-sm-block d-none p-border text-center">
                                <div className="h-100 b-left text-center text-sm-white text-dark">
                                  <div className="col-12 font-style-italic text-sm-white text-dark">
                                    Like This Profile
                                  </div>
                                  {data?.user?.friend_request != null ?

                                      <>
                                        <div data-bs-toggle="modal"
                                             data-bs-target={"#newMatches-" + index}
                                             style={editFields ? {
                                               display: "block",
                                               textAlign: "center",
                                               cursor: 'pointer',
                                             } : {display: "none"}}>
                                          <h1>
                                            <i
                                                className="fa fa-user text-success"
                                                aria-hidden="true"
                                            ></i>
                                          </h1>
                                          Friend
                                        </div>
                                      </>
                                      :
                                      <>
                                        <div onClick={() => {
                                          sendRequest(data.user_id);
                                        }}
                                             style={editFields ? {
                                               display: "block",
                                               textAlign: "center",
                                               cursor: 'pointer',
                                             } : {display: "none"}}>
                                          <h1>
                                            <i
                                                className="fa fa-check-circle text-success"
                                                aria-hidden="true"
                                            ></i>
                                          </h1>
                                          <div id={"connection_btn" + index}>
                                            Connect Now
                                          </div>
                                        </div>
                                      </>
                                  }

                                  {data.user?.user_plan != null ?
                                      <>
                                        <div className="col-12 text-center"
                                             style={editFields ? {display: "none"} : {display: "block"}}>
                                          {data.user?.user_plan.view_contacts != null ?
                                              <>
                                                <a href="Tel:923040227000"
                                                   className="btn px-5 py-1 m-1 btn-white border rounded b-radius">
                                                  <i className="fa fa-phone" aria-hidden="true"></i> Call
                                                </a>
                                              </>
                                              :
                                              <>
                                                <a onClick={handleToast}
                                                   className="btn px-5 py-1 m-1 btn-white border rounded b-radius">
                                                  <i className="fa fa-phone" aria-hidden="true"></i> Call
                                                </a>
                                              </>}
                                          {(data.user?.user_plan.view_contacts != null || data.user?.user_plan.messages != null) ? <>
                                            <a
                                                target="_blank"
                                                href="https://api.whatsapp.com/send?phone=923040227000&text=Hello this is the starting message"
                                                className="btn px-4 py-1 m-1 btn-success border rounded b-radius">
                                              <i className="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
                                            </a>
                                          </> : <>
                                            <a
                                                href="#" onClick={handleToast}
                                                className="btn px-4 py-1 m-1 btn-success border rounded b-radius">
                                              <i className="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
                                            </a>
                                          </>}
                                          {(data.user?.user_plan.messages != null) ? <>
                                                <a className="btn px-5 py-1 m-1 btn-white border rounded b-radius">
                                                  <i className="fa fa-comment" aria-hidden="true"></i> Chat
                                                </a>
                                              </> :
                                              <>
                                                <a
                                                    onClick={handleToast}
                                                    className="btn px-5 py-1 m-1 btn-white border rounded b-radius">
                                                  <i className="fa fa-comment" aria-hidden="true"></i> Chat
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
                                  <div
                                      className="col-8 d-flex flex-column text-sm-white text-dark justify-content-center">
                                    Connect Now
                                  </div>
                                  <div className="col-2">
                                    <i
                                        className="fa fa-check-circle text-success"
                                        style={{fontSize: "2.5rem"}}
                                        aria-hidden="true"
                                    ></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                                className="modal fade"
                                id={"newMatches-"+index}
                                tabIndex="-1"
                                aria-labelledby={"newMatches-"+index}
                                aria-hidden="true"

                            >
                              <div className="modal-dialog " >
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
                                          <strong> {profile?.user?.user_plan.length==0?'Phone: +0932-**** ***':'Phone: '+data?.number}</strong>
                                          <br/>
                                          <strong>{profile?.user?.user_plan.length==0?'Email: ****@gmail.com':'Email: '+data?.user?.email}</strong>
                                        </div>
                                        <hr style={{margin:'10px !important'}}/>
                                        <b className="d-flex col-12">
                                          <a href={profile?.user?.user_plan.length!=0?"https://api.whatsapp.com/send?phone="+data?.number+"&text=Hello this is the starting message":"#"} className="col text-success" style={{fontSize:'15px'}}>
                                            <i className="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp
                                          </a>
                                          <span className="col text-primary" style={{fontSize:'15px'}}>
                    <i className="fa fa-comment" aria-hidden="true"></i> Chat
                    </span>
                                          <a target="_blank" href={"tel:"+profile.user?.user_plan.length!=0?data?.number:"#"} className="col text-danger" style={{fontSize:'15px'}} >
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
              </section>
            </>
        )}
      </Observer>
  );
};

export default NewMatches;
