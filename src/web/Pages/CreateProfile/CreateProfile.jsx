import React ,{useEffect, useState, useContext}from 'react'

import { useNavigate } from "react-router-dom";

import { Observer } from "mobx-react-lite";
import './../../Components/Header'
import './../../Components/Footer'
import './assets/css/profile.css'

import { StoreContext } from "./../../store";
import axios from 'axios';
const CreateProfile = () => {

    const [isActive, setIsActive] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);

    async function handleClick(data){
      if(data==1){
        setIsActive2(current => !current);
        setIsActive(current => !current);

      }else if(data==2){
        setIsActive3(current => !current);
        setIsActive2(current => !current);
      }

    };

    const store = useContext(StoreContext);
    const [formValue, setformValue] = React.useState({
        gender: '',
        marital_status: '',
        height: '',
        id:'',
        disability: '',
        cast: '',
        hobbies: '',
        interest: '',
        edjucation: '',
        edjucation_type: '',
        language:'',
        work_with: '',
        job: '',
        income: '',
        town:'',
        living_since: '',
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
        family_address:'',
        living_with_family:'',
      });

      const [cast, setCasts] = useState();

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
        const token = localStorage.getItem('accessToken')
        const user = localStorage.getItem('user')
        const formData = new FormData();
// console.log('formValue',user['id']);
const user_id = JSON.parse(user)['id'];
        formData.append('data[id]',user_id)
        // formData.append('data[id]',user.id)
        formData.append('data[gender]',formValue.gender)
        // formData.append('data[gender]','male')
        formData.append('data[marital_status]',formValue.marital_status)
        formData.append('data[height]',formValue.height)
        formData.append('data[disability]',formValue.disability)
        formData.append('data[cast_id]',formValue.cast)
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
        formData.append('data[family_type]',formValue.family_type)
        formData.append('data[father_status]',formValue.father_status)
        formData.append('data[mother_status]',formValue.mother_status)
        formData.append('data[brother_marital_status]',formValue.brother_marital_status)
        formData.append('data[living_with_family]',formValue.living_with_family)
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
            living_since: '',
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
                // const data = response.data
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
                        <div className="stepwizard-step stepwizard-step-1"> <a href="#steps-1" className="btn btn-circle step-01">1 <span><i className="fa fa-check" aria-hidden="true" style={{ disabled: isActive ? "disabled":"" }}></i></span></a>
                        <p className="text-dark">Basic And Lifestyle</p>
                        </div>
                        <div className="stepwizard-step stepwizard-step-2"> <a href="#steps-2" className="btn btn-circle step-02" >2 <span><i className="fa fa-check" aria-hidden="true"  style={{ disabled: isActive2 ? "":"disabled" }}></i></span></a>
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
                                        <label className="form-label">Gender</label>
                                        <select className="form-select"  name="gender" onChange={handleChange} aria-label="Default select example" id="">
                                            <option selected hidden>Select one</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        
                                        </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Mother Tongue</label>
                                            <select className="form-select"  onChange={handleChange} name="Language" aria-label="Default select example" id="">
                                                <option>Select one</option>
                                                <option value="Urdu">Urdu</option>
                                                <option value="English">English</option>
                                                <option value="Punjabi">Punjabi</option>

                                            </select>
                                            {/*<input type="text" className="form-control p-2   form-field" value={formValue.language} onChange={handleChange} name='Language' id="exampleInput" placeholder="Enter Language" />*/}
                                        </div>
                                        <div className="mb-3">
                                        <label className="form-label">Material Status</label>
                                        <select className="form-select"  onChange={handleChange} name="marital_status" aria-label="Default select example" id="">
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
                                    <option value="Medical">Medical</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="IT">IT</option>

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
                            <div className="col-12 text-center mb-0"> <a className=" col-4 button  btn btn-theme rounded-sm animated right-icn" href='/' data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> <a className=" col-4 button btn-theme rounded-sm btn nextBtn btn   animated right-icn" onClick={()=>handleClick(2)}><span>Next<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  </div>
                            </div>
                            </div>
                            </div>
                            <div className="row setup-content setup-content-3" style={{ display: isActive3 ? "block":"none" }} id="steps-3">
                            <div className="col-md-12">
                            <div className="row  justify-content-center">
                            <div className="col-md-12 text-start text-capitalize text-white">


                            <div className="row">
                            <label htmlFor="exampleInput">Number</label>
                            <div className="form-group mb-3">

                            <input type="text" className="form-control form-field p-2  " value={formValue.phone_number} onChange={handleChange} name='phone_number' id="exampleInput" placeholder="Enter Number" />
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
                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="father_status" id="">
                                    <option>Select one</option>
                                    <option value="Job Holder">Job Holder</option>
                                    <option value="Business Man">Business Man</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Expired">Expired</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Mother Status</label>
                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="mother_status" id="">
                                    <option>Select one</option>
                                    <option value="Job Holder">Job Holder</option>
                                    <option value="Business Woman">Business Woman</option>
                                    <option value="Retired">Retired</option>
                                    <option value="Expired">Expired</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Brother Martial Status</label>
                                <select className="form-select" aria-label="Default select example" onChange={handleChange} name="brother_marital_status" id="">
                                    <option>Select one</option>
                                    <option value="Married">Married</option>
                                    <option value="Divorced">Divorced</option>
                                    <option value="Single">Single</option>
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