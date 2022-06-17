import React from 'react'
import { Link } from 'react-router-dom';
import './assets/style.css'
import { Observer } from "mobx-react-lite";
import Header from './../../../Components/SubHeader'
import Footer from './../../../Components/Footer'

const Profile = () => {
   
  return (
    <Observer>
    {()=>(
        <>
           <Header /> 
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
                                    Marukh S 
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
                      <div className="col-6 d-flex pt-4">
        <div className="col-6  ">
Age/Height
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
:25 5.7ft
        </div>
        <div className="col-6 ">
Cast
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
Bhatti
        </div>


        
          </div>
          <div className="col-6 d-flex pt-4">
        <div className="col-6 ">
Nationality
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
Pakistani
        </div>
        <div className="col-6 ">
Religion
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
Islam
        </div>

          </div>
          <div className="col-6 d-flex pt-4">
        <div className="col-6 ">
Education
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
BSCS
        </div>
        <div className="col-6 ">
Job
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
Engineer
        </div>
        
          </div>
     
                      </div>
              </div>
              
              <div className="col-4 p-border">
                <div className="h-100 b-left">
<div className="col-12 font-style-italic text-center">
    <div className="text-primary">
    Upgrade
    </div>

 to
Contact her directly
</div>
<div className="col-12 text-center">

    <button className='btn btn-white border rounded' >ok</button>
    <button className='btn btn-white border rounded' >ok</button>
    <button className='btn btn-white border rounded' >ok</button>
</div>
                </div>
              </div>
                    </div>

                </div>
                <div className="col-3 overlay d-sm-block d-none">
                    <img src="/images/profile/02.jpg" className='img-fluid rounded' alt="" />
                </div>

{/*  */}

<div className="employers-list mb-5 shadow rounded p-0 pt-sm-0 d-sm-none d-block pt-5 bg-img">
         <div className="d-sm-none d-block pt-sm-0 pt-5"> &nbsp;<br/> &nbsp;<br/></div>
          <div className="col-4 offset-sm-0 offset-4 pt-sm-0 pt-5 ">
            <img className="w-75 b-sm-radius d-sm-none d-block m-auto  pt-sm-0 pt-5" src={window.location.origin + "/images/profile/default.png"} alt="" />
            <img className="img-fluid b-sm-radius d-sm-block d-none" src={window.location.origin + "/images/profile/default.png"} alt="" />
          </div>
          <div className="d-block d-sm-none">

          
          <div className="text-sm-dark text-white m-auto">
            No Photo Added
          </div>
          <button id="submit" name="submit" type="submit" value="Send" className="button btn-lg btn-theme rouneded-sm animated right-icn mb-0"><span>Request a Photo<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></button>
          </div>
          <div className="col-sm-5 offset-12 p-2">
                            <div className="col-12 d-flex">
                            <div className="col-sm-8 col-12 d-flex">
                                <div className="col-sm-7 col-6 text-start">
                                    <h5 className='d-sm-block d-none'>
                                     <Link to="/public/profile">Sana M </Link>
                                    </h5>
                             <div className="d-sm-none text-sm-dark text-white d-block" style={{fontSize:'18px'}}>
                             <Link to="/public/profile">    Sana M</Link>
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
                        <div className="col-12 d-sm-flex d-none">

                    
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
           
                      
                          
             
                  
                  <hr  className="col-12 m-2 d-sm-block d-none" />
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
        <div className="col-6 d-sm-block d-none ">

BSCS
        </div>
        <div className="col-6 d-sm-block d-none">

Engineer
        </div>
        
          </div>
     
                      </div>
              </div>
              <hr  className="col-12 m-2 d-sm-none d-block" />
              <div className="col-sm-3 d-sm-block d-none p-border text-center">
                <div className="h-100 b-left text-center text-sm-dark text-white">
<div className="col-12 font-style-italic ">
 Like This Profile

</div>
<h1>
<i class="fa fa-check-circle text-success" aria-hidden="true"></i>
</h1>

Connect Now
                </div>
              </div>
              <div className="d-sm-none d-flex col-12">
            <div className="col-6 text-left col-8 d-flex flex-column justify-content-center"> Like This Profile</div>
            <div className="col-6 d-flex">
<div className="col-8 d-flex flex-column text-sm-dark text-white justify-content-center">
Connect Now
</div>
<div className="col-2">


<i class="fa fa-check-circle text-success" style={{fontSize:'40px'}} aria-hidden="true"></i>
</div>

</div>
              </div>
        </div>








            </div>
            <div className="row">
            <div className="col-sm-4 col-12 shadow bg-white mt-10-5 p-1 rounded" style={{height:"fit-content"}}>
               <div className="bg-grey p-1 rounded">Similar Posts</div>
            <div className="col-12">
            <div className="employers-list">
          <div className="employers-list-logo">
            <img className="img-fluid" src="/images/profile/default.png" alt="" />
          </div>
          <div className="employers-list-details">
            <div className="employers-list-info">
              <div className="employers-list-title">
                <h5 className="mb-0"><a href="">Ali Raza</a></h5>
              </div>
              <div className="employers-list-option">
                <ul className="list-unstyled">
                  <li className='m-0 p-0'>Account</li>
                  <li className='m-0 p-0'>Needham, MA</li>
                </ul>
              </div>
            </div>
          </div>
   
        </div>
            </div>
            <div className="col-12">
            <div className="employers-list">
          <div className="employers-list-logo">
            <img className="img-fluid" src="/images/profile/default.png" alt="" />
          </div>
          <div className="employers-list-details">
            <div className="employers-list-info">
              <div className="employers-list-title">
                <h5 className="mb-0"><a href="">Ali Raza</a></h5>
              </div>
              <div className="employers-list-option">
                <ul className="list-unstyled">
                  <li className='m-0 p-0'>Account</li>
                  <li className='m-0 p-0'>Needham, MA</li>
                </ul>
              </div>
            </div>
          </div>
   
        </div>
            </div>
<div className="col-12">
<div className="employers-list">
          <div className="employers-list-logo">
            <img className="img-fluid" src="/images/profile/default.png" alt="" />
          </div>
          <div className="employers-list-details">
            <div className="employers-list-info">
              <div className="employers-list-title">
                <h5 className="mb-0"><a href="">Ali Raza</a></h5>
              </div>
              <div className="employers-list-option">
                <ul className="list-unstyled">
                  <li className='m-0 p-0'>Account</li>
                  <li className='m-0 p-0'>Needham, MA</li>
                </ul>
              </div>
            </div>
          </div>
   
        </div>
</div>
<div className="col-12">
<div className="employers-list">
          <div className="employers-list-logo">
            <img className="img-fluid" src="/images/profile/default.png" alt="" />
          </div>
          <div className="employers-list-details">
            <div className="employers-list-info">
              <div className="employers-list-title">
                <h5 className="mb-0"><a href="">Ali Raza</a></h5>
              </div>
              <div className="employers-list-option">
                <ul className="list-unstyled">
                  <li className='m-0 p-0'>Account</li>
                  <li className='m-0 p-0'>Needham, MA</li>
                </ul>
              </div>
            </div>
          </div>
   
        </div>
</div>

            </div>
            <div className="col-sm-7 col-12  shadow bg-white rounded mb-5 mt-5 ms-sm-5 m-0">
            <ul className="nav nav-tabs d-flex col-12 nav-tabs-02 " role="tablist">
              <li className="nav-item">
                <a className="btn  active ms-0" id="tab-01" data-bs-toggle="tab" href="#tab-10" role="tab" aria-controls="tab-10" aria-selected="true">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="btn " id="tab-02" data-bs-toggle="tab" href="#tab-11" role="tab" aria-controls="tab-11" aria-selected="false">My Profile</a>
              </li>
              
              
            </ul>
            <div className="tab-content">
          <div className="tab-pane fade active show" id="tab-10" role="tabpanel" aria-labelledby="tab-01">
       <div className="row">
        <h4 className='d-flex'> 
        <div className="b-radius">
        <i class="fa fa-paragraph px-1" aria-hidden="true"></i>
        </div>
  
       <div className='flex-column justify-content-center d-flex px-3' >About Marukh S</div>
       </h4>
        <div className="p-border-t-md">
      
        <div className="col-11 p-sm-0  p-border-md b-left">
        Hello, here is a quick introduction about my daughter.
She has completed her MBA(3.5 years) major in finance, also she did her bachelor in science with double math and physics. Her optimistic personality is adored by one and all. Her hobbies are reading books and playing badminton. She is looking for a boy with whom she can lead a happy and content life. Whatsapp. Further added we are middle class family.
        </div>
        </div>
        <h4 className='d-flex'> 
        <div className="b-radius">
          <i class="fa fa-phone px-1" aria-hidden="true"></i>

        </div>
  
       <div className='flex-column justify-content-center d-flex px-3' >Contact</div>
       </h4>
        <div className="p-border-t-md">
      
        <div className="col-11 p-border-md b-left d-flex">
<div className="col-6 border rounded p-1">
<div className="col-12 d-flex">
  
<div className="col-2">
  <i class="fa fa-phone" aria-hidden="true"></i>
</div>
  <div className="col-10">
    <div className="col-12">
    Contact Number
    </div>
    <div className="col-12">
    +92 3184X XXXXX
    </div>
  </div>
  </div> 
  <div className="col-12 d-flex">
  
  <div className="col-2">
  <i class="fa fa-mail-forward" aria-hidden="true"></i>
  </div>
    <div className="col-10">
      <div className="col-12">
      Email Id
      </div>
      <div className="col-12">
      XXXXXXXXXX@gmail.com
      </div>
    </div>
    </div>
</div>
<div className="col-6 d-flex flex-column justify-content-center" style={{margin:"-5px"}}>
  <div className="d-flex">
    <h6 className='p-2 b-radius px-3 '>
    <i class="fa fa-lock" aria-hidden="true"></i></h6>
  <div className="text-primary">
  Upgrade 
  </div>

 to view details
  </div>

</div>

        </div>
        </div>
        <h4 className='d-flex'> 
        <div className="b-radius">
          <i class="fa fa-book px-1" aria-hidden="true"></i>
        </div>
  
       <div className='flex-column justify-content-center d-flex px-3' >Background</div>
       </h4>
        <div className="p-border-t-md">
      
        <div className="col-11 p-border-md b-left">
      <ul>
        <li>  Muslim, Urdu</li>
        <li>  Sheikh</li>
        <li>  Offers Namaz five times, fasts on Ramadan</li>
        <li>  Lives in Lahore, Punjab, Pakistan (Citizen)</li>
      </ul>
        </div>
        </div>
        <h4 className='d-flex'> 
        <div className="b-radius">
         <i class="fa fa-users" aria-hidden="true"></i>
        </div>
  
       <div className='flex-column justify-content-center d-flex px-3' >Family Details</div>
       </h4>
        <div className="p-border-t-md">
      
        <div className="col-11 p-border-md b-left">
        Her father is employed and her mother is a homemaker. She has 1 brother (unmarried) and 3 sisters (1 married).
        </div>
        </div>
        <h4 className='d-flex'> 
        <div className="b-radius">
          <i class="fa fa-book px-1" aria-hidden="true"></i>
        </div>
  
       <div className='flex-column justify-content-center d-flex px-3' >Education & Career</div>
       </h4>
        <div className="p-border-t-md">
      
        <div className="col-11 p-border-md b-left">
      <ul>

<li>MSc / MFin / MS - Master of Science in Finance / Master of Finance</li>
<li>Finance / Commerce</li>
<li>Currently not working</li>
</ul>
        </div>
        </div>


        <h4 className='d-flex'> 
        <div className="b-radius">
          <i class="fa fa-book px-1" aria-hidden="true"></i>
        </div>
  
       <div className='flex-column justify-content-center d-flex px-3' >Preferences</div>
       </h4>
        <div className="p-border-t-md">
      
        <div className="col-11 p-sm-0 p-border-last-md b-left">
          <div className="row">

         
        <div className="col-3" >
  
          <div class="image-cropper" style={{ width:' 100px',height: '100px',position: 'relative',overflow: 'hidden',borderRadius: '50%'}}>
  <img src="/images/profile/03.jpg" style={{height:'150px', display: 'inline',margin: '0 auto',width: 'auto'}} className="rounded" />
</div>


</div>
          <div className="col-6 d-flex flex-column justify-content-center">
            <div className="bg-white p-3 pe-sm-0 justify-content-center" style={{borderRadius:'50px'}}>
              5/5 matches
            </div>
          </div>
          <div className="col-3 ps-sm-0" >
  
  <div class="image-cropper" style={{ width:' 100px',height: '100px',position: 'relative',overflow: 'hidden',borderRadius: '50%'}}>
<img src="/images/profile/02.jpg" style={{height:'150px', display: 'inline',margin: '0 auto',width: 'auto'}} className="rounded" />
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
          <div className="col-12 p-0 text-danger">Age</div>
          <div className="col-12 p-0">22 to 27</div>
        </div>
        <div className="col-2 text-success text-end d-flex justify-content-center flex-column"> <i class="fa fa-check-circle" aria-hidden="true"></i></div>
      </div>
       <hr className="m-2 p-0" />
      <div className="row">
        <div className="col-10">
          <div className="col-12 p-0 text-danger">Height</div>
          <div className="col-12 p-0">5' 1"(154cm) to 6' 0"(182cm)</div>
        </div>
        <div className="col-2 text-success text-end d-flex justify-content-center flex-column"> <i class="fa fa-check-circle" aria-hidden="true"></i></div>
      </div>
       <hr className="m-2 p-0" />
      <div className="row">
        <div className="col-10">
          <div className="col-12 p-0 text-danger">Marital Status</div>
          <div className="col-12 p-0">Never Married</div>
        </div>
        <div className="col-2 text-success text-end d-flex justify-content-center flex-column"> <i class="fa fa-check-circle" aria-hidden="true"></i></div>
      </div>
       <hr className="m-2 p-0" />
      <div className="row">
        <div className="col-10">
          <div className="col-12 p-0 text-danger">Religion / Community</div>
          <div className="col-12 p-0">
            <span>
            Muslim: Rajput, Muslim: Sunni, Muslim: Sheikh, 
            </span>
          {/* <div className="more showMore"  tabindex="0">...<span className=" text-primary">More</span></div>
          <div className="less showLess" tabindex="0"><span className=" text-primary" tabindex="0">Less</span></div> */}
     <span class="span2 float-right" tabindex="0" ><div className="text-primary">... more </div></span>

<p class="alert p-0" > Muslim: Syed, Muslim: Pathan, Muslim: Ansari, Muslim: Lebbai, Muslim: Dekkani, Muslim: Siddiqui, Muslim: Qureshi, Muslim: Arain, Muslim: Mughal, Muslim: Jat, Muslim: Maraicar, Muslim: Awan, Muslim: Dudekula
</p>
 

          </div>


        </div>
        <div className="col-2 text-success text-end d-flex justify-content-center flex-column"> <i class="fa fa-check-circle" aria-hidden="true"></i></div>
      </div>
       <hr className="m-2 p-0" />
       <div className="row">
        <div className="col-10">
          <div className="col-12 p-0 text-danger">Mother Tongue</div>
          <div className="col-12 p-0">Urdu</div>
        </div>
        <div className="col-2 text-success text-end d-flex justify-content-center flex-column"> <i class="fa fa-check-circle" aria-hidden="true"></i></div>
      </div>
      

      <hr className="m-2 p-0" />
      <div className="row">
        <div className="col-10">
          <div className="col-12 p-0 text-danger">Country Living in</div>
          <div className="col-12 p-0">Pakistan</div>
        </div>
        <div className="col-2 text-success text-end d-flex justify-content-center flex-column"> <i class="fa fa-check-circle" aria-hidden="true"></i></div>
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
        <Footer />  
        </>
    )}
    </Observer>
  )
}

export default Profile