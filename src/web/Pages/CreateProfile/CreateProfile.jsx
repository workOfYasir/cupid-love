import React ,{useEffect, useState, useContext}from 'react'

import { useNavigate } from "react-router-dom";

import { Observer } from "mobx-react-lite";
import './../../Components/Header'
import './../../Components/Footer'
import './assets/css/profile.css'
import { StoreContext } from "./../../store";
import axios from 'axios';
const CreateProfile = () => {
    const store = useContext(StoreContext);
    const [formValue, setformValue] = React.useState({
        gender: '',
        material_status: '',
        height: '',
        id:'',
        disability: '',
        blood_group: '',
        cast: '',
        star:'',
        hobbies: '',
        interest: '',
        edjucation: '',
        work_with: '',
        work_as: '',
        income: '',
        town:'',
        living_since: '',
        description: '',
        phone_number: '',
        whatsapp_number: ''
      });

      const [cast, setCasts] = useState();

      const navigate = useNavigate();
    const url=`${store.url}`;
    const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
        console.log(formValue);
      }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const token = localStorage.getItem('accessToken')
        const user = localStorage.getItem('user')
        const formData = new FormData();
// console.log('formValue',user['id']);
const user_id = JSON.parse(user)['id'];
        formData.append('data[id]',user_id)
        // formData.append('data[id]',user.id)
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
        console.log(formData);
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
            setformValue({ gender: '',
            material_status: '',
            height: '',
            id:'',
            disability: '',
            blood_group: '',
            cast: '',
            star:'',
            hobbies: '',
            interest: '',
            edjucation: '',
            work_with: '',
            work_as: '',
            income: '',
            town:'',
            living_since: '',
            description: '',
            phone_number: '',
            whatsapp_number: ''})
                const data = response.data
                
                // setProfile(data[0])
            })
            navigate('/pricing')
          } catch(error) {
            console.log(error)
          }
      }

 
      const casts = async(access_token)=>{
        try {
           console.log('access_token',access_token);
         axios.get(`${url}get-casts`,{
            headers: {
                'Authorization': `Bearer ${access_token}`
              }
         }).then((response)=>{
                const data = response.data
                setCasts(data[0].casts)
            })
          } catch(error) {
            console.log(error)
          }
      }

  
      useEffect(() => {
        const token = localStorage.getItem('accessToken')

        casts(token);

    }, []);
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
                        <div className="stepwizard-step"> <a href="#steps-1" className="btn btn-circle">1 <span><i className="fa fa-check" aria-hidden="true"></i></span></a>
                        <p className="text-dark">Basic And Lifestyle</p>
                        </div>
                        <div className="stepwizard-step"> <a href="#steps-2" className="btn btn-circle" disabled="disabled">2 <span><i className="fa fa-check" aria-hidden="true"></i></span></a>
                        <p className="text-dark">About you</p>
                        </div>
                        <div className="stepwizard-step"> <a href="#steps-3" className="btn btn-circle" disabled="disabled">3 <span><i className="fa fa-check" aria-hidden="true"></i></span></a>
                        <p className="text-dark">Account</p>
                        </div>
                        </div>
                        </div>
                        <form onSubmit={handleSubmit} className="text-center mt-3">

                            <div className="row  justify-content-center setup-content" id="steps-1">
                                <div className="col-md-12">
                                <h4 className="title text-dark divider-3 mb-5">Basic And Lifestyle</h4>
                                <div className="row justify-content-center">
                                        <div className="col-md-12 text-start">
                                        
                                        <div className="mb-3">
                                        <label className="form-label">Gender</label>
                                        <select className="form-select"  name="gender" onChange={handleChange} aria-label="Default select example" id="">
                                            <option selected hidden>Select one</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        
                                        </select>
                                        </div>
                                        <div className="mb-3">
                                        <label className="form-label">Material Status</label>
                                        <select className="form-select"  onChange={handleChange} name="material_status" aria-label="Default select example" id="">
                                            <option>Select one</option>
                                            <option value="Single">Single</option>
                                            <option value="Divorced">Divorced</option>
                                            <option value="Window">Window</option>
                                            <option value="Married">Married</option>
                                        
                                        </select>
                                        </div>
                                        
                                      
                                        <div className="mb-3">
                                        <label className="form-label">Height</label>
                                        <select className="form-select" aria-label="Default select example" onChange={handleChange} name="height" id="">
                                            <option>Select one</option>
                                            <option value="Birth">Birth</option>
                                            <option value="1900">1900</option>
                                            <option value="1950">1950</option>
                                            <option value="2000">2000</option>
                                        
                                        </select>
                                        </div>
                                        
                                        <div className="row mb-3">
                                        <label htmlFor="exampleInput">Disablity</label>
                                        <div className="form-group">
                                        <input type="text" className="form-control p-2   form-field" value={formValue.disability} onChange={handleChange} name='disability' id="exampleInput" placeholder="Enter Disablity if any" />
                                        </div>
                                        </div>
                                        <div className="row mb-3">
                                        <label htmlFor="exampleInput">Star</label>
                                        <div className="form-group">
                                        <input type="text" className="form-control p-2   form-field" value={formValue.star} onChange={handleChange} name='star' id="exampleInput" placeholder="Enter Star" />
                                        </div>
                                        </div>
                                        <div className="mb-3">
                                        <label htmlFor="" className="form-label">Blood Group</label>
                                        <select className="form-select"  onChange={handleChange} name="blood_group" id="">
                                            <option>Select one</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                        </div>
                                        <div className="mb-3">
                                        <label className="form-label">Cast</label>
                                        <select className="form-select"  onChange={handleChange} name="cast" aria-label="Default select example" id="">
                                            <option>Select one</option>
                                        {cast?.map((data) => (
                                    <option value={data.id}>{data.name}</option>
                                   ))}
                                        </select>
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
                                <div className=" col-12 mb-0 "> <a className="button col-4 btn btn-theme rounded-sm animated right-icn" href='/' data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  <a className=" col-4 button btn-theme rounded-sm btn nextBtn btn   animated right-icn"><span>Next<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a></div>
                                </div>
                            </div>
                            <div className="row setup-content" id="steps-2">
                            <div className="col-md-12">
                            <div className="row  justify-content-center">
                            <div className="col-md-12 text-start text-capitalize text-dark">
                            <div className="form-group mb-0">
                            <div className="mb-3">
                                <label className="form-label">Qualification</label>
                                <select className="form-select" aria-label="Default select example"  onChange={handleChange} name="edjucation" id="">
                                    <option>Select one</option>
                                    <option value="PHd">PHd</option>
                                    <option value="MS/M-Phil">MS/M-Phil</option>
                                    <option value="BS Honrs">BS Honrs</option>
                                    <option value="BSC">BSC</option>
                                
                                </select>
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
                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="work_as" id="">
                                    <option>Select one</option>
                                    <option value="Banking">Banking</option>
                                    <option value="Software Developer">Software Developer</option>
                                    <option value="Engineer">Engineer</option>
                                 
                                
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Monthly Income</label>
                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="income" id="">
                                    <option>Select one</option>
                                    <option value="20000">20,000</option>
                                    <option value="30000">30,000</option>
                                    <option value="40000">40,000</option>
                                    <option value="50000">50,000</option>
                                    <option value="60000">60,000</option>
                                    <option value="70000">70,000</option>
                                    <option value="80000">80,000</option>
                                    <option value="90000">90,000</option>
                                    <option value="100000">100,000</option>
                                    <option value="100000+">100,000 +</option>

                                </select>
                            </div>
                         
                            <div className="mb-3">
                                <label className="form-label">Living In This Country Since</label>
                                <select className="form-select" aria-label="Default select example"  onChange={handleChange} name="living_since" id="">
                                    <option>Select one</option>
                                    <option value="1900">1900</option>
                                    <option value="1950">1950</option>
                                    <option value="2000">2000</option>
                                
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
                            <div className="col-12 text-center mb-0"> <a className=" col-4 button  btn btn-theme rounded-sm animated right-icn" href='/' data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> <a className=" col-4 button btn-theme rounded-sm btn nextBtn btn   animated right-icn"><span>Next<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  </div>
                            </div>
                            </div>
                            </div>
                            <div className="row setup-content" id="steps-3">
                            <div className="col-md-12">
                            <div className="row  justify-content-center">
                            <div className="col-md-12 text-start text-capitalize text-white">
                           
                            {/* <div className="row">
                            <label htmlFor="exampleInput">Email ID</label>
                            <div className="form-group mb-3">

                            <input type="text" className="form-control form-field p-2  " id="exampleInput" placeholder="Enter Email ID" />
                            </div>

                           

                            </div> */}

                            <div className="row">
                            <label htmlFor="exampleInput">Number</label>
                            <div className="form-group mb-3">

                            <input type="text" className="form-control form-field p-2  " value={formValue.phone_number} onChange={handleChange} name='phone_number' id="exampleInput" placeholder="Enter Number" />
                            </div>

                           

                            </div>
                            <div className="row">
                            <label htmlFor="exampleInput">Number</label>
                            <div className="form-group mb-3">

                            <input type="text" className="form-control form-field p-2  " value={formValue.whatsapp_number} onChange={handleChange} name="whatsapp_number" id="exampleInput" placeholder="Enter WhatsApp Number" />
                            </div>

                           

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