import React from 'react'
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

         
                <div className="col-12 mt-3 rounded shadow bg-white">
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
                <div className="col-3 overlay">
                    <img src="/images/profile/02.jpg" className='img-fluid rounded' alt="" />
                </div>
            </div>
            <div className="row">
            <div className="col-4 shadow bg-white mt-10-5 p-1 rounded" style={{height:"fit-content"}}>
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
            <div className="col-7-5 shadow bg-white rounded mb-5">
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
      
        <div className="col-11 p-border-md b-left">
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