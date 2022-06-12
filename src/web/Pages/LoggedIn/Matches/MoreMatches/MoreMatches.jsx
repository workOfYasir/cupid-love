import React from 'react'
import { Link } from "react-router-dom";
import './../assets/css/style.css'
import { Observer } from "mobx-react-lite";

const MoreMatches = () => {
  return (
    <Observer>
    {()=>(
        <>
<section className="space-ptb">
  <div className="container mt-3">
    <div className="row">
       
      <div className="col-lg-3">
        <div className="sidebar">
        
          <div className="widget bg-white p-1 shadow rounded">
            <div className="widget-title widget-collapse bg-grey">
              <h6>Date Posted</h6>
              <a className="ms-auto" data-bs-toggle="collapse" href="#dateposted" role="button" aria-expanded="false" aria-controls="dateposted">  </a>
            </div>
            <div className="collapse show" id="dateposted">
              <div className="widget-content">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="dateposted1" />
                  <label className="form-check-label" for="dateposted1">Last hour</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="dateposted2" />
                  <label className="form-check-label" for="dateposted2">Last 24 hour</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="dateposted3" />
                  <label className="form-check-label" for="dateposted3">Last 7 days</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="dateposted4" />
                  <label className="form-check-label" for="dateposted4">Last 14 days</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="dateposted5" />
                  <label className="form-check-label" for="dateposted5">Last 30 days</label>
                </div>
              </div>
            </div>
          </div>
          < hr/>
          <div className="widget bg-white p-1 shadow rounded">
            <div className="widget-title widget-collapse bg-grey" >
              <h6>Specialism</h6>
              <a className="ms-auto" data-bs-toggle="collapse" href="#specialism" role="button" aria-expanded="false" aria-controls="specialism"> <i className="fa fa-chevron-down"></i> </a>
            </div>
            <div className="collapse show" id="specialism">
              <div className="widget-content">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="specialism1" />
                  <label className="form-check-label" for="specialism1">IT Contractor</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="specialism2" />
                  <label className="form-check-label" for="specialism2">Charity & Voluntary</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="specialism3" />
                  <label className="form-check-label" for="specialism3">Digital & Creative</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="specialism4" />
                  <label className="form-check-label" for="specialism4">Estate Agency</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="specialism5" />
                  <label className="form-check-label" for="specialism5">Graduate</label>
                </div>
              </div>
            </div>
          </div>
          < hr/>
        
          < hr/>
          <div className="widget bg-white p-1 shadow rounded">
            <div className="widget-title widget-collapse bg-grey" >
              <h6>Marriage in</h6>
              <a className="ms-auto" data-bs-toggle="collapse" href="#experience" role="button" aria-expanded="false" aria-controls="experience"> <i className="fa fa-chevron-down"></i> </a>
            </div>
            <div className="collapse show" id="experience">
              <div className="widget-content">
             
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="experience2" />
                  <label className="form-check-label" for="experience2">Less than 1 year</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="experience3" />
                  <label className="form-check-label" for="experience3">2 Year</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="experience4" />
                  <label className="form-check-label" for="experience4">3 Year</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="experience5" />
                  <label className="form-check-label" for="experience5">4 Year</label>
                </div>
              </div>
            </div>
          </div>
          < hr/>
          <div className="widget bg-white p-1 shadow rounded">
            <div className="widget-title widget-collapse bg-grey" >
              <h6>Salary</h6>
              <a className="ms-auto" data-bs-toggle="collapse" href="#Offeredsalary" role="button" aria-expanded="false" aria-controls="Offeredsalary"> <i className="fa fa-chevron-down"></i> </a>
            </div>
            <div className="collapse show" id="Offeredsalary">
              <div className="widget-content">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="Offeredsalary1" />
                  <label className="form-check-label" for="Offeredsalary1">10k - 20k</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="Offeredsalary2" />
                  <label className="form-check-label" for="Offeredsalary2">20k - 30k</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="Offeredsalary3" />
                  <label className="form-check-label" for="Offeredsalary3">30k - 40k</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="Offeredsalary4" />
                  <label className="form-check-label" for="Offeredsalary4">40k - 50k</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="Offeredsalary5" />
                  <label className="form-check-label" for="Offeredsalary5">50k - 60k</label>
                </div>
              </div>
            </div>
          </div>
          < hr/>
          <div className="widget bg-white p-1 shadow rounded">
            <div className="widget-title widget-collapse bg-grey" >
              <h6>Gender</h6>
              <a className="ms-auto" data-bs-toggle="collapse" href="#gender" role="button" aria-expanded="false" aria-controls="gender"><i className="fa fa-chevron-down"></i></a>
            </div>
            <div className="collapse show" id="gender">
              <div className="widget-content">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="gender1" />
                  <label className="form-check-label" for="gender1">Male</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="gender2"/>
                  <label className="form-check-label" for="gender2">Female</label>
                </div>
              </div>
            </div>
          </div>
          < hr/>
          <div className="widget bg-white p-1 shadow rounded">
            <div className="widget-title widget-collapse bg-grey" >
              <h6>Qualification</h6>
              <a className="ms-auto" data-bs-toggle="collapse" href="#qualification" role="button" aria-expanded="false" aria-controls="qualification"> <i className="fa fa-chevron-down"></i></a>
            </div>
            <div className="collapse show" id="qualification">
              <div className="widget-content">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="qualification1" />
                  <label className="form-check-label" for="qualification1">Matriculation</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="qualification2" />
                  <label className="form-check-label" for="qualification2">Intermediate</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="qualification3" />
                  <label className="form-check-label" for="qualification3">Graduate</label>
                </div>
              </div>
            </div>
          </div>
          <div className="widget bg-white p-1 shadow rounded">
            <div className="widget-add">
            <img className="img-fluid" src="images/add-banner.png" alt="" /></div>
          </div>
        </div>
      </div>
       
      <div className="col-lg-9">
        {/* <div className="row mb-4">
          <div className="col-12">
            <h6 className="mb-0">Showing 1-8 of <span className="text-primary">18 Matches</span></h6>
          </div>
        </div> 
        <div className="job-filter mb-4 d-sm-flex align-items-center">

          <div className="job-shortby ms-sm-auto d-flex align-items-center">
            <form className="form-inline">
              <div className="input-group mb-0 align-items-center">
                <label className="justify-content-start me-2">Sort by :</label>
                <div className="short-by">
                  <select className="form-control basic-select">
                    <option>Newest</option>
                    <option>Oldest</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
        </div>*/}
     
   
        <div className="employers-list mb-5 shadow rounded p-0">
          <div className="col-4">
            <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
          </div>
          <div className="col-5 p-2">
                            <div className="col-12  d-flex">
                            <div className="col-8 d-flex">
                                <div className="col-7">
                                    <h5>
                                     <Link to="/public/profile">Sana M </Link>
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
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                        </div>
                  
                        </div>
                        <div className="col-12 d-flex">

                    
                    <div className="col-6 ">
                    Online Now
                    </div>
                    <div class="dropdown">
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
  <i class="fa fa-male" aria-hidden="true"></i>
  <i class="fa fa-female" aria-hidden="true"></i>
  You & Her 

                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                            </div>
           
                      
                          
             
                  
                  <hr  className="col-12 m-2 d-block" />
                  <div className="col-12 d-block ">
                      <div className="col-12 d-flex pt-1">
        <div className="col-6  ">

25 5.7ft
        </div>
        <div className="col-6 ">

Bhatti
        </div>


        
          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

Pakistani
        </div>
        <div className="col-6 ">

Islam
        </div>

          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

BSCS
        </div>
        <div className="col-6 ">

Engineer
        </div>
        
          </div>
     
                      </div>
              </div>
              
              <div className="col-3 p-border text-center">
                <div className="h-100 b-left text-center">
<div className="col-12 font-style-italic ">
 Like This Profile

</div>
<h1>
<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
</h1>

Connect Now
                </div>
              </div>
        </div>
        <div className="employers-list mb-5 shadow rounded p-0">
          <div className="col-4">
            <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
          </div>
          <div className="col-5 p-2">
                            <div className="col-12  d-flex">
                            <div className="col-8 d-flex">
                                <div className="col-7">
                                    <h5>
                                     <Link to="/public/profile">Saba Ali </Link>
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
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                        </div>
                  
                        </div>
                        <div className="col-12 d-flex">

                    
                    <div className="col-6 ">
                    Online Now
                    </div>
                    <div class="dropdown">
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
  <i class="fa fa-male" aria-hidden="true"></i>
  <i class="fa fa-female" aria-hidden="true"></i>
  You & Her 

                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                            </div>
           
                      
                          
             
                  
                  <hr  className="col-12 m-2 d-block" />
                  <div className="col-12 d-block ">
                      <div className="col-12 d-flex pt-1">
        <div className="col-6  ">

25 5.7ft
        </div>
        <div className="col-6 ">

Bhatti
        </div>


        
          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

Pakistani
        </div>
        <div className="col-6 ">

Islam
        </div>

          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

BSCS
        </div>
        <div className="col-6 ">

Engineer
        </div>
        
          </div>
     
                      </div>
              </div>
              
              <div className="col-3 p-border text-center">
                <div className="h-100 b-left text-center">
<div className="col-12 font-style-italic ">
 Like This Profile

</div>
<h1>
<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
</h1>

Connect Now
                </div>
              </div>
        </div>
        <div className="employers-list mb-5 shadow rounded p-0">
          <div className="col-4">
            <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
          </div>
          <div className="col-5 p-2">
                            <div className="col-12  d-flex">
                            <div className="col-8 d-flex">
                                <div className="col-7">
                                    <h5>
                                     <Link to="/public/profile">Ali R </Link>
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
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                        </div>
                  
                        </div>
                        <div className="col-12 d-flex">

                    
                    <div className="col-6 ">
                    Online Now
                    </div>
                    <div class="dropdown">
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
  <i class="fa fa-male" aria-hidden="true"></i>
  <i class="fa fa-female" aria-hidden="true"></i>
  You & Her 

                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                            </div>
           
                      
                          
             
                  
                  <hr  className="col-12 m-2 d-block" />
                  <div className="col-12 d-block ">
                      <div className="col-12 d-flex pt-1">
        <div className="col-6  ">

25 5.7ft
        </div>
        <div className="col-6 ">

Bhatti
        </div>


        
          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

Pakistani
        </div>
        <div className="col-6 ">

Islam
        </div>

          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

BSCS
        </div>
        <div className="col-6 ">

Engineer
        </div>
        
          </div>
     
                      </div>
              </div>
              
              <div className="col-3 p-border text-center">
                <div className="h-100 b-left text-center">
<div className="col-12 font-style-italic ">
 Like This Profile

</div>
<h1>
<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
</h1>

Connect Now
                </div>
              </div>
        </div>

        <div className="employers-list mb-5 shadow rounded p-0">
          <div className="col-4">
            <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
          </div>
          <div className="col-5 p-2">
                            <div className="col-12  d-flex">
                            <div className="col-8 d-flex">
                                <div className="col-7">
                                    <h5>
                                     <Link to="/public/profile">Hamza E </Link>
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
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                        </div>
                  
                        </div>
                        <div className="col-12 d-flex">

                    
                    <div className="col-6 ">
                    Online Now
                    </div>
                    <div class="dropdown">
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
  <i class="fa fa-male" aria-hidden="true"></i>
  <i class="fa fa-female" aria-hidden="true"></i>
  You & Her 

                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                            </div>
           
                      
                          
             
                  
                  <hr  className="col-12 m-2 d-block" />
                  <div className="col-12 d-block ">
                      <div className="col-12 d-flex pt-1">
        <div className="col-6  ">

25 5.7ft
        </div>
        <div className="col-6 ">

Bhatti
        </div>


        
          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

Pakistani
        </div>
        <div className="col-6 ">

Islam
        </div>

          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

BSCS
        </div>
        <div className="col-6 ">

Engineer
        </div>
        
          </div>
     
                      </div>
              </div>
              
              <div className="col-3 p-border text-center">
                <div className="h-100 b-left text-center">
<div className="col-12 font-style-italic ">
 Like This Profile

</div>
<h1>
<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
</h1>

Connect Now
                </div>
              </div>
        </div>
        <div className="employers-list mb-5 shadow rounded p-0">
          <div className="col-4">
            <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
          </div>
          <div className="col-5 p-2">
                            <div className="col-12  d-flex">
                            <div className="col-8 d-flex">
                                <div className="col-7">
                                    <h5>
                                     <Link to="/public/profile">Raza S </Link>
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
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                        </div>
                  
                        </div>
                        <div className="col-12 d-flex">

                    
                    <div className="col-6 ">
                    Online Now
                    </div>
                    <div class="dropdown">
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
  <i class="fa fa-male" aria-hidden="true"></i>
  <i class="fa fa-female" aria-hidden="true"></i>
  You & Her 

                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                            </div>
           
                      
                          
             
                  
                  <hr  className="col-12 m-2 d-block" />
                  <div className="col-12 d-block ">
                      <div className="col-12 d-flex pt-1">
        <div className="col-6  ">

25 5.7ft
        </div>
        <div className="col-6 ">

Bhatti
        </div>


        
          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

Pakistani
        </div>
        <div className="col-6 ">

Islam
        </div>

          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

BSCS
        </div>
        <div className="col-6 ">

Engineer
        </div>
        
          </div>
     
                      </div>
              </div>
              
              <div className="col-3 p-border text-center">
                <div className="h-100 b-left text-center">
<div className="col-12 font-style-italic ">
 Like This Profile

</div>
<h1>
<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
</h1>

Connect Now
                </div>
              </div>
        </div>
        <div className="employers-list mb-5 shadow rounded p-0">
          <div className="col-4">
            <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
          </div>
          <div className="col-5 p-2">
                            <div className="col-12  d-flex">
                            <div className="col-8 d-flex">
                                <div className="col-7">
                                    <h5>
                                     <Link to="/public/profile">Aleem Q </Link>
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
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                        </div>
                  
                        </div>
                        <div className="col-12 d-flex">

                    
                    <div className="col-6 ">
                    Online Now
                    </div>
                    <div class="dropdown">
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
  <i class="fa fa-male" aria-hidden="true"></i>
  <i class="fa fa-female" aria-hidden="true"></i>
  You & Her 

                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                            </div>
           
                      
                          
             
                  
                  <hr  className="col-12 m-2 d-block" />
                  <div className="col-12 d-block ">
                      <div className="col-12 d-flex pt-1">
        <div className="col-6  ">

25 5.7ft
        </div>
        <div className="col-6 ">

Bhatti
        </div>


        
          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

Pakistani
        </div>
        <div className="col-6 ">

Islam
        </div>

          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

BSCS
        </div>
        <div className="col-6 ">

Engineer
        </div>
        
          </div>
     
                      </div>
              </div>
              
              <div className="col-3 p-border text-center">
                <div className="h-100 b-left text-center">
<div className="col-12 font-style-italic ">
 Like This Profile

</div>
<h1>
<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
</h1>

Connect Now
                </div>
              </div>
        </div>
        <div className="employers-list mb-5 shadow rounded p-0">
          <div className="col-4">
            <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
          </div>
          <div className="col-5 p-2">
                            <div className="col-12  d-flex">
                            <div className="col-8 d-flex">
                                <div className="col-7">
                                    <h5>
                                     <Link to="/public/profile">Rasheed J </Link>
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
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                        </div>
                  
                        </div>
                        <div className="col-12 d-flex">

                    
                    <div className="col-6 ">
                    Online Now
                    </div>
                    <div class="dropdown">
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
  <i class="fa fa-male" aria-hidden="true"></i>
  <i class="fa fa-female" aria-hidden="true"></i>
  You & Her 

                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                            </div>
           
                      
                          
             
                  
                  <hr  className="col-12 m-2 d-block" />
                  <div className="col-12 d-block ">
                      <div className="col-12 d-flex pt-1">
        <div className="col-6  ">

25 5.7ft
        </div>
        <div className="col-6 ">

Bhatti
        </div>


        
          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

Pakistani
        </div>
        <div className="col-6 ">

Islam
        </div>

          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

BSCS
        </div>
        <div className="col-6 ">

Engineer
        </div>
        
          </div>
     
                      </div>
              </div>
              
              <div className="col-3 p-border text-center">
                <div className="h-100 b-left text-center">
<div className="col-12 font-style-italic ">
 Like This Profile

</div>
<h1>
<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
</h1>

Connect Now
                </div>
              </div>
        </div>
        <div className="employers-list mb-5 shadow rounded p-0">
          <div className="col-4">
            <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
          </div>
          <div className="col-5 p-2">
                            <div className="col-12  d-flex">
                            <div className="col-8 d-flex">
                                <div className="col-7">
                                    <h5>
                                     <Link to="/public/profile">Javeed S </Link>
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
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                        </div>
                  
                        </div>
                        <div className="col-12 d-flex">

                    
                    <div className="col-6 ">
                    Online Now
                    </div>
                    <div class="dropdown">
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
  <i class="fa fa-male" aria-hidden="true"></i>
  <i class="fa fa-female" aria-hidden="true"></i>
  You & Her 

                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                            </div>
           
                      
                          
             
                  
                  <hr  className="col-12 m-2 d-block" />
                  <div className="col-12 d-block ">
                      <div className="col-12 d-flex pt-1">
        <div className="col-6  ">

25 5.7ft
        </div>
        <div className="col-6 ">

Bhatti
        </div>


        
          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

Pakistani
        </div>
        <div className="col-6 ">

Islam
        </div>

          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

BSCS
        </div>
        <div className="col-6 ">

Engineer
        </div>
        
          </div>
     
                      </div>
              </div>
              
              <div className="col-3 p-border text-center">
                <div className="h-100 b-left text-center">
<div className="col-12 font-style-italic ">
 Like This Profile

</div>
<h1>
<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
</h1>

Connect Now
                </div>
              </div>
        </div>
        <div className="employers-list mb-5 shadow rounded p-0">
          <div className="col-4">
            <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
          </div>
          <div className="col-5 p-2">
                            <div className="col-12  d-flex">
                            <div className="col-8 d-flex">
                                <div className="col-7">
                                    <h5>
                                     <Link to="/public/profile"> Marukh S </Link>
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
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                        </div>
                  
                        </div>
                        <div className="col-12 d-flex">

                    
                    <div className="col-6 ">
                    Online Now
                    </div>
                    <div class="dropdown">
                                        <a class=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                
  <i class="fa fa-male" aria-hidden="true"></i>
  <i class="fa fa-female" aria-hidden="true"></i>
  You & Her 

                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="#">Action</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                            </div>
                            </div>
           
                      
                          
             
                  
                  <hr  className="col-12 m-2 d-block" />
                  <div className="col-12 d-block ">
                      <div className="col-12 d-flex pt-1">
        <div className="col-6  ">

25 5.7ft
        </div>
        <div className="col-6 ">

Bhatti
        </div>


        
          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

Pakistani
        </div>
        <div className="col-6 ">

Islam
        </div>

          </div>
          <div className="col-12 d-flex pt-1">
        <div className="col-6 ">

BSCS
        </div>
        <div className="col-6 ">

Engineer
        </div>
        
          </div>
     
                      </div>
              </div>
              
              <div className="col-3 p-border text-center">
                <div className="h-100 b-left text-center">
<div className="col-12 font-style-italic ">
 Like This Profile

</div>
<h1>
<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
</h1>

Connect Now
                </div>
              </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-4 mt-sm-5">
            <ul className="pagination justify-content-center mb-0">
              <li className="page-item disabled"> <span className="page-link b-radius-none">Prev</span> </li>
              <li className="page-item active" aria-current="page"><span className="page-link">1 </span> <span className="sr-only">(current)</span></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item"><a className="page-link" href="#">...</a></li>
              <li className="page-item"><a className="page-link" href="#">25</a></li>
              <li className="page-item"> <a className="page-link" href="#">Next</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )}
    </Observer>
  )
}

export default MoreMatches

