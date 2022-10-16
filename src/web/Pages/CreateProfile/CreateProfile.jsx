import React ,{useEffect, useState, useContext}from 'react'

import { useNavigate } from "react-router-dom";

import { Observer } from "mobx-react-lite";
import './../../Components/Header'
import './../../Components/Footer'
import './assets/css/profile.css'

import { StoreContext } from "./../../store";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreateProfile = () => {

    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    const [isCompleted, setIsCompleted] = useState(false);
    const [isCompleted2, setIsCompleted2] = useState(false);

    async function handleClick(data){
        if(data==1){
            setIsCompleted(current => !current);
            setIsActive2(current => !current);
            setIsActive(current => !current);

        }else if(data==2){
            setIsCompleted2(current => !current);
            setIsActive3(current => !current);
            setIsActive2(current => !current);
        }

    };

    const store = useContext(StoreContext);
    const [formValue, setformValue] = React.useState({
        gender: '',
        house_size:'',
        house_owner:'',
        university:'',
        marital_status: '',
        height: '',
        id:'',
        disability: '',
        hobbies: '',
        interest: '',
        edjucation: '',
        edjucation_type: '',
        language:'',
        work_with: '',
        job: '',
        income: '',
        town:'',
        description: '',
        phone_number: '',
        whatsapp_number: '',
        no_of_brothers:'',
        no_of_sister:'',
        company_name:'',
        family_type:'',
        father_status:'',
        mother_status:'',
        brother_marital_status:'',
        sister_marital_status:'',
        family_address:'',
        living_with_family:'',
    });


    const navigate = useNavigate();
    const url=`${store.url}`;
    const handleChange = (event) => {
        setformValue({
            ...formValue,
            [event.target.name]: event.target.value
        });

    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        if(formValue.phone_number===''){
            toast.error("Phone number can not be null");
        }else if(((formValue.phone_number).match("[a-zA-z]") || (formValue.phone_number).match("[!@#$%&*()_+=|<>?{}\\[\\]~-]"))){
            toast.error('Phone number can not be other than number')
        }else if((  formValue.phone_number).length < 10  ){
            toast.error('phone number can not be of '+ (  formValue.phone_number).length +' length')
        }else if((formValue.phone_number).length > 13 ){
            toast.error('phone number can not be of '+ (  formValue.phone_number).length +' length')
        }else{
        const token = localStorage.getItem('accessToken')
        const user = localStorage.getItem('user')
        const formData = new FormData();
        const user_id = JSON.parse(user)['id'];
        formData.append('data[id]',user_id)
        formData.append('data[marital_status]',formValue.marital_status)
        formData.append('data[height]',formValue.height)
        formData.append('data[disability]',formValue.disability)
        formData.append('data[hobbies]',formValue.hobbies)
        formData.append('data[interest]',formValue.interest)
        formData.append('data[qualification]',formValue.edjucation)
        formData.append('data[edjuction_sector]',formValue.edjucation_type)
        formData.append('data[working_with]',formValue.work_with)
        formData.append('data[job]',formValue.job)
        formData.append('data[annual_income]',formValue.income)
        formData.append('data[family_address]',formValue.family_address)
        formData.append('data[town]',formValue.town)
        formData.append('data[about]',formValue.description)
        formData.append('data[number]',formValue.phone_number)
        formData.append('data[whatsapp_number]',formValue.whatsapp_number)
        formData.append('data[no_of_brothers]',formValue.no_of_brothers)
        formData.append('data[company_name]',formValue.company_name)
        formData.append('data[language]',formValue.language)
        formData.append('data[no_of_sister]',formValue.no_of_sister)
        formData.append('data[university]',formValue.university)
        formData.append('data[house_size]',formValue.house_size)
        formData.append('data[house_owner]',formValue.house_owner)
        formData.append('data[family_type]',formValue.family_type)
        formData.append('data[father_status]',formValue.father_status)
        formData.append('data[mother_status]',formValue.mother_status)
        formData.append('data[brother_marital_status]',formValue.brother_marital_status)
        formData.append('data[sister_marital_status]',formValue.sister_marital_status)
        formData.append('data[living_with_family]',formValue.living_with_family)
        try {


            const response =   await axios({

                method: "post",
                url: `${store.url}update-profile`,
                data: formData,
                headers: { "Content-Type": "multipart/form-data", 'Authorization': `Bearer ${token}`  },

            }).then((response)=>{
                setformValue({
                    gender: '',
                    marital_status: '',
                    height: '',
                    id:'',
                    disability: '',
                    cast: '',
                    hobbies: '',
                    interest: '',
                    edjucation: '',
                    edjucation_type:'',
                    language: '',
                    company_name:'',
                    work_with: '',
                    job: '',
                    income: '',
                    town:'',
                    description: '',
                    phone_number: '',
                    whatsapp_number: '',
                    no_of_brothers:'',
                    no_of_sister:'',
                    family_type:'',
                    father_status:'',
                    mother_status:'',
                    brother_marital_status:'',
                    family_address:'',
                    living_with_family:'',
                })

            })
            navigate('/pricing')

        } catch(error) {
            console.log(error)
        }
    }
    }

    return (
        <Observer>
            {() => (
                <>
                    <div className="w-100 h-100 bg-content pb-20 pt-4">

                        <div className="container mt-3 bg-white" >

                            <div className="modal-body">
                                <div className="step-form">
                                    <div className="stepwizard">
                                        <div className="stepwizard-row setup-panel">
                                            <div className="stepwizard-step stepwizard-step-1"> <a href="#steps-1" className="btn btn-circle step-01">{isCompleted?"✔":"1"} <span><i className="fa fa-check" aria-hidden="true" style={{ disabled: isActive ? "disabled":"" }}></i></span></a>
                                                <p className="text-dark">Basic And Lifestyle</p>
                                            </div>
                                            <div className="stepwizard-step stepwizard-step-2"> <a href="#steps-2" className="btn btn-circle step-02" >{isCompleted2?"✔":"2"} <span><i className="fa fa-check" aria-hidden="true"  style={{ disabled: isActive2 ? "":"disabled" }}></i></span></a>
                                                <p className="text-dark">About you</p>
                                            </div>
                                            <div className="stepwizard-step stepwizard-step-3"> <a href="#steps-3" className="btn btn-circle step-03" >3 <span><i className="fa fa-check" aria-hidden="true" style={{ disabled: isActive3 ? "":"disabled" }}></i></span></a>
                                                <p className="text-dark">Personal</p>
                                            </div>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit} className="text-center mt-3">

                                        <div className="row  justify-content-center setup-content setup-content-1" style={{ display: isActive ? "none":"block" }} id="steps-1">
                                            <div className="col-md-12">
                                                <h4 className="title text-dark divider-3 mb-5">Basic And Lifestyle</h4>
                                                <div className="row justify-content-center">
                                                    <div className="col-md-12 text-start">


                                                        <div className="mb-3">
                                                            <label className="form-label">Mother Tongue</label>
                                                            <select className="form-select"  onChange={handleChange} name="Language" aria-label="Default select example" id="">
                                                                <option>Select one</option>


                                                                <option value="Balochi">Balochi</option>
                                                                <option value="Brahui">Brahui</option>
                                                                <option value="English">English</option>
                                                                <option value="Gujrati">Gujrati</option>
                                                                <option value="Hindko">Hindko</option>
                                                                <option value="Kashmiri">Kashmiri</option>
                                                                <option value="Marwari">Marwari</option>
                                                                <option value="Pashto">Pashto</option>
                                                                <option value="Persian">Persian</option>
                                                                <option value="Punjabi">Punjabi</option>
                                                                <option value="Saraiki">Saraiki</option>
                                                                <option value="Shina" >Shina</option>
                                                                <option value="Sindhi">Sindhi</option>
                                                                <option value="Urdu">Urdu</option>
                                                                <option value="Other">Other</option>

                                                            </select>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="form-label">Material Status</label>
                                                            <select className="form-select"  onChange={handleChange} name="marital_status" aria-label="Default select example" id="">
                                                                <option>Select one</option>
                                                                <option value="Single">Single</option>
                                                                <option value="Divorced">Divorced</option>
                                                                <option value="Window">Window</option>
                                                                <option value="Married">Married</option>
                                                                <option value="Seperated">Seperated</option>
                                                            </select>
                                                        </div>


                                                        <div className="mb-3">
                                                            <label className="form-label">Height</label>
                                                            <select className="form-select" aria-label="Default select example" onChange={handleChange} name="height" id="">
                                                                <option>Select one</option>
                                                                <option value="4.1ft">4.1ft</option>
                                                                <option value="4.2ft">4.2ft</option>
                                                                <option value="4.3ft">4.3ft</option>
                                                                <option value="4.4ft">4.4ft</option>
                                                                <option value="4.5ft">4.5ft</option>
                                                                <option value="4.6ft">4.6ft</option>
                                                                <option value="4.7ft">4.7ft</option>
                                                                <option value="4.8ft">4.8ft</option>
                                                                <option value="4.9ft">4.9ft</option>
                                                                <option value="4.10ft">4.10ft</option>
                                                                <option value="4.11ft">4.11ft</option>
                                                                <option value="4.12ft">4.12ft</option>
                                                                <option value="5.1ft">5.1ft</option>
                                                                <option value="5.2ft">5.2ft</option>
                                                                <option value="5.3ft">5.3ft</option>
                                                                <option value="5.4ft">5.4ft</option>
                                                                <option value="5.5ft">5.5ft</option>
                                                                <option value="5.6ft">5.6ft</option>
                                                                <option value="5.7ft">5.8ft</option>
                                                                <option value="5.8ft">5.8ft</option>
                                                                <option value="5.9ft">5.9ft</option>
                                                                <option value="5.10ft">5.10ft</option>
                                                                <option value="5.11ft">5.11ft</option>
                                                                <option value="5.12ft">5.12ft</option>
                                                                <option value="6.1ft">6.1ft</option>
                                                                <option value="6.2ft">6.2ft</option>
                                                                <option value="6.3ft">6.3ft</option>
                                                                <option value="6.4ft">6.4ft</option>
                                                                <option value="6.5ft">6.5ft</option>
                                                                <option value="6.6ft">6.6ft</option>
                                                                <option value="6.7ft">6.7ft</option>
                                                                <option value="6.8ft">6.8ft</option>
                                                                <option value="6.9ft">6.9ft</option>
                                                                <option value="6.10ft">6.10ft</option>
                                                                <option value="6.11ft">6.11ft</option>
                                                                <option value="6.12ft">6.12ft</option>
                                                                <option value="7.1ft">7.1ft</option>
                                                                <option value="7.2ft">7.2ft</option>
                                                                <option value="7.3ft">7.3ft</option>
                                                                <option value="7.4ft">7.4ft</option>
                                                                <option value="7.5ft">7.5ft</option>
                                                                <option value="7.7ft">7.6ft</option>
                                                                <option value="7.7ft">7.7ft</option>
                                                                <option value="7.8ft">7.8ft</option>
                                                                <option value="7.9ft">7.9ft</option>
                                                                <option value="7.10ft">7.10ft</option>
                                                                <option value="7.11ft">7.11ft</option>
                                                                <option value="7.12ft">7.12ft</option>
                                                            </select>
                                                        </div>


                                                        <div className="row mb-3">
                                                            <label htmlFor="exampleInput">Disablity</label>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control p-2   form-field" value={formValue.disability} onChange={handleChange} name='disability' id="exampleInput" placeholder="Enter Disablity if any" />
                                                            </div>
                                                        </div>



                                                        <div className="row mb-3">
                                                            <label htmlFor="exampleInput">Hobbies</label>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control p-2   form-field" value={formValue.hobbies} onChange={handleChange} name='hobbies' id="exampleInput" placeholder="Enter Hobbies" />
                                                            </div>
                                                        </div>
                                                        <div className="row mb-3">
                                                            <label htmlFor="exampleInput">Interest</label>
                                                            <div className="form-group">
                                                                <input type="text" className="form-control p-2   form-field" value={formValue.interest} onChange={handleChange} name='interest' id="exampleInput" placeholder="Enter Interest" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <div className="profile-info text-start">
                                                        <p className="mb-0  text-dark"><i className="fa fa-info-circle" aria-hidden="true"></i> Let's set up your account, while
                                                            we find Matches for you!</p>
                                                    </div>
                                                </div>
                                                <div className=" col-12 mb-0 "> <a className="button col-4 btn btn-theme rounded-sm animated right-icn" href='/' data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  <a className=" col-4 button btn-theme rounded-sm btn nextBtn btn   animated right-icn" onClick={()=>handleClick(1)}><span>Next<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a></div>
                                            </div>
                                        </div>
                                        <div className="row setup-content setup-content-2" style={{ display: isActive2 ? "block":"none" }} id="steps-2">
                                            <div className="col-md-12">
                                                <div className="row  justify-content-center">
                                                    <div className="col-md-12 text-start text-capitalize text-dark">
                                                        <div className="form-group mb-0">

                                                            <div className="mb-3">
                                                                <label className="form-label">Eduction</label>

                                                                <input name="edjucation" type="text" onChange={handleChange} className="form-control p-2 form-field" />

                                                            </div>

                                                            <div className="mb-3">
                                                                <label className="form-label">Eduction Sector</label>

                                                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="edjucation_type" id="">
                                                                    <option>Select one</option>

                                                                                    <option value="Accounting/Finance">Accounting/Finance</option>
                                                                                    <option value="Advertising/Media">Advertising/Media</option>
                                                                                    <option value="Arts/Culture/Music">Arts/Culture/Music</option>
                                                                                    <option value="Builder/Farmer">Builder/Farmer</option>
                                                                                    <option value="Software Eng/Computer">Software Eng/Computer</option>
                                                                                    <option value="Beauty/Cosmetics/Fashion">Beauty/Cosmetics/Fashion</option>
                                                                                    <option value="Logistics/Warehouse">Logistics/Warehouse</option>
                                                                                    <option value="Defense/Forces/Security">Defense/Forces/Security</option>
                                                                                    <option value="Doctor/Medical Officer">Doctor/Medical Officer</option>
                                                                                    <option value="Education/Academic">Education/Academic</option>
                                                                                    <option value="Engineering/Architecture">Engineering/Architecture</option>
                                                                                    <option value="Health Care/Nurse">Health Care/Nurse</option>
                                                                                    <option value="Hospitality/Tourism/Chef">Hospitality/Tourism/Chef</option>
                                                                                    <option value="Manager/Human Resources">Manager/Human Resources</option>
                                                                                    <option value="Banking/Insurance">Banking/Insurance</option>
                                                                                    <option value="Internet/New Media">Internet/New Media</option>
                                                                                    <option value="Lawyer/Legal">Lawyer/Legal</option>
                                                                                    <option value="Marketing/Sales">Marketing/Sales</option>
                                                                                    <option value="Political/Professor">Political/Professor</option>
                                                                                    <option value="Business/Entrepreneur">Business/Entrepreneur</option>
                                                                                    <option value="Public/Customer">Public/Customer</option>
                                                                                    <option value="Relations">Relations</option>
                                                                                    <option value="Publishing/Print/Graphics">Publishing/Print/Graphics</option>
                                                                                    <option value="Research/Scientist">Research/Scientist</option>
                                                                                    <option value="Retired/Charity">Retired/Charity</option>
                                                                                    <option value="Secretary/Office">Secretary/Office</option>
                                                                                    <option value="Student">Student</option>
                                                                                    <option value="Teacher/Lecturer">Teacher/Lecturer</option>
                                                                                    <option value="IT/Telecommunications">IT/Telecommunications</option>
                                                                                    <option value="Transport/Manufacturing">Transport/Manufacturing</option>
                                                                                    <option value="Government/Department">Government/Department</option>
                                                                                    <option value="Writer/Journalist">Writer/Journalist</option>
                                                                                    <option value="Other/Self Employed">Other/Self Employed</option>
                                                                                    <option value="Unemployed/Housewife">Unemployed/Housewife</option>
                                                                                                                    </select>
                                                            </div>
                                                            <div className="row mb-3">
                                                                <label htmlFor="exampleInput">University</label>
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control p-2   form-field" value={formValue.university} onChange={handleChange} name='university' id="exampleInput" placeholder="Enter University" />
                                                                </div>
                                                            </div>

                                                            <div className="mb-3">
                                                                <label className="form-label">Work With</label>
                                                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="work_with" id="">
                                                                    <option>Select one</option>
                                                                    <option value="Govt Job">Govt Job</option>
                                                                    <option value="Private Job">Private Job</option>
                                                                    <option value="Business">Business</option>

                                                                </select>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="form-label">As</label>
                                                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="job" id="">
                                                                    <option>Select one</option>
                                                                    <option value="Banking">Banking</option>
                                                                    <option value="Software Developer">Software Developer</option>
                                                                    <option value="Engineer">Engineer</option>

                                                                </select>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="form-label">In</label>
                                                                <input type="text" className="form-control form-field p-2  " value={formValue.company_name} onChange={handleChange} name='company_name' id="exampleInput" placeholder="Enter Company Name" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="form-label">Monthly Income</label>
                                                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="income" id="">
                                                                    <option>Select one</option>
                                                                    <option value="25000">20,000-30,000</option>
                                                                    <option value="35000">30,000-40,000</option>
                                                                    <option value="45000">40,000-50,000</option>
                                                                    <option value="55000">50,000-60,000</option>
                                                                    <option value="65000">60,000-70,000</option>
                                                                    <option value="75000">70,000-80,000</option>
                                                                    <option value="85000">80,000-90,000</option>
                                                                    <option value="95000">90,000-100,000</option>
                                                                    <option value="125000">100,000-150,000</option>
                                                                    <option value="175000">150,000-200,000</option>
                                                                    <option value="225000">200,000-250,000</option>
                                                                    <option value="275000">250,000-300,000</option>
                                                                    <option value="350000">300,000-400,000</option>
                                                                    <option value="450000">400,000-500,000</option>
                                                                    <option value="550000">500,000-600,000</option>
                                                                    <option value="650000">600,000-700,000</option>
                                                                    <option value="750000">700,000-800,000</option>
                                                                    <option value="850000">800,000-900,000</option>
                                                                    <option value="950000">900,000-1000,000</option>
                                                                    <option value="1500000">1000,000-1500,000</option>
                                                                </select>
                                                            </div>
                                                            <div className="mb-3">
                                                                <label className="form-label">Town</label>

                                                                <input type="text" className="form-control form-field p-2  " value={formValue.town} onChange={handleChange} name='town' id="exampleInput" placeholder="Enter Town" />
                                                            </div>
                                                            <div className="form-group mb-3">
                                                                <label className="title divider-3 text-dark mb-3">about me</label>
                                                                <textarea className="form-control bg-white form-field" value={formValue.description} onChange={handleChange} name='description' rows="3"></textarea>
                                                            </div>


                                                            <div className="form-group mb-3">
                                                                <div className="profile-info">
                                                                    <p className="mb-0 text-dark"><i className="fa fa-info-circle" aria-hidden="true"></i> by clicking submit you are agreeing to our terms and conditions of use.</p>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-12 text-center mb-0"> <a className=" col-4 button  btn btn-theme rounded-sm animated right-icn" href='/' data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> <a className=" col-4 button btn-theme rounded-sm btn nextBtn btn   animated right-icn" onClick={()=>handleClick(2)}><span>Next<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row setup-content setup-content-3" style={{ display: isActive3 ? "block":"none" }} id="steps-3">
                                            <div className="col-md-12">
                                                <div className="row  justify-content-center">
                                                    <div className="col-md-12 text-start text-capitalize text-white">

                                                        <div className="row">
                                                            <label htmlFor="exampleInput">House Size</label>
                                                            <div className="form-group mb-3">

                                                                <input type="text" className="form-control form-field p-2  " value={formValue.house_size} onChange={handleChange} name='house_size' id="exampleInput" placeholder="Enter House Size" />
                                                            </div>

                                                        </div>
                                                        <div className="row">
                                                            <label htmlFor="exampleInput">House Owner</label>
                                                            <div className="form-group mb-3">

                                                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="house_owner" id="">
                                                                    <option>Select one</option>
                                                                    <option value="Owner">Owner</option>
                                                                    <option value="Rental">Rental</option>

                                                                </select>
                                                            </div>

                                                        </div>

                                                        <div className="row">
                                                            <label htmlFor="exampleInput">Number</label>
                                                            <div className="form-group mb-3">

                                                                <input type="text" className="form-control form-field p-2 "  value={formValue.phone_number} onChange={handleChange} name='phone_number' id="exampleInput" placeholder="Enter Number" />
                                                            </div>



                                                        </div>
                                                        <div className="row">
                                                            <label htmlFor="exampleInput">WhatsApp</label>
                                                            <div className="form-group mb-3">

                                                                <input type="text" className="form-control form-field p-2  " value={formValue.whatsapp_number} onChange={handleChange} name="whatsapp_number" id="exampleInput" placeholder="Enter WhatsApp Number" />
                                                            </div>

                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">No Of Brothers</label>
                                                            <select className="form-select" aria-label="Default select example" onChange={handleChange} name="no_of_brothers" id="">
                                                                <option>Select one</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                                <option value="9">9</option>
                                                                <option value="10">10</option>
                                                            </select>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">No Of Sisters</label>
                                                            <select className="form-select" aria-label="Default select example" onChange={handleChange} name="no_of_sister" id="">
                                                                <option>Select one</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                                <option value="3">3</option>
                                                                <option value="4">4</option>
                                                                <option value="5">5</option>
                                                                <option value="6">6</option>
                                                                <option value="7">7</option>
                                                                <option value="8">8</option>
                                                                <option value="9">9</option>
                                                                <option value="10">10</option>
                                                            </select>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Family Type</label>
                                                            <select className="form-select" aria-label="Default select example" onChange={handleChange} name="family_type" id="">
                                                                <option>Select one</option>
                                                                <option value="Joint">Joint</option>
                                                                <option value="Seperate">Seperate</option>
                                                            </select>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Father Status</label>
                                                            <input type="text" className="form-control form-field p-2  " value={formValue.father_status} onChange={handleChange} name='father_status' id="exampleInput" placeholder="Enter Father Status" />

                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Mother Status</label>
                                                            <input type="text" className="form-control form-field p-2  " value={formValue.mother_status} onChange={handleChange} name='mother_status' id="exampleInput" placeholder="Enter Mother Status" />

                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Brother Martial Status</label>
                                                            <select className="form-select" aria-label="Default select example" onChange={handleChange} name="brother_marital_status" id="">
                                                                <option>Select one</option>
                                                                <option value="Married">Married</option>
                                                                <option value="Divorced">Divorced</option>
                                                                <option value="Single">Single</option>
                                                                <option value="Seperated">Seperated</option>
                                                            </select>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Sister Martial Status</label>
                                                            <select className="form-select" aria-label="Default select example" onChange={handleChange} name="sister_marital_status" id="">
                                                                <option>Select one</option>
                                                                <option value="Married">Married</option>
                                                                <option value="Divorced">Divorced</option>
                                                                <option value="Single">Single</option>
                                                                <option value="Seperated">Seperated</option>
                                                            </select>
                                                        </div>


                                                        <div className="mb-3">
                                                            <label className="form-label">Family Address</label>
                                                            <div className="form-group mb-3">
                                                                <input type="text" className="form-control form-field p-2  " value={formValue.family_address} onChange={handleChange} name="family_address" id="exampleInput" placeholder="Enter Family Address" />
                                                            </div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Living With Family</label>
                                                            <select className="form-select" aria-label="Default select example" onChange={handleChange} name="living_with_family" id="">
                                                                <option>Select one</option>
                                                                <option value="Yes">Yes</option>
                                                                <option value="No">No</option>
                                                            </select>
                                                        </div>


                                                        <div className="form-group mb-3">
                                                            <div className="profile-info">
                                                                <p className="mb-0 text-dark"><i className="fa fa-info-circle" aria-hidden="true"></i> by clicking submit you are agreeing to our terms and conditions of use.</p>
                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>
                                                <div className=" col-12 mb-0 "> <a href='/' className="button col-4 btn btn-theme rounded-sm animated right-icn" data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>
                                                    <button type='submit' data-bs-dismiss="modal" className="button col-4 btn-theme rounded-sm btn btn   animated right-icn"><span>submit<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></button> </div>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Observer>
    )


}

export default CreateProfile