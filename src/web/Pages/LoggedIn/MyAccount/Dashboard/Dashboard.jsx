import React from 'react'
import { Observer } from "mobx-react-lite";
import './assets/css/style.css'
import './assets/css/card.css'
 

const Dashboard = () => {
   
  return (
    <Observer>
    {()=>(
        <>
           
              <div className='container mt-3' >
                <div className='row'>
                  <div className="col-4 ">
                    <div className="card border-0 shadow">

                      <img src={ process.env.PUBLIC_URL +"/images/team/team-v1.png" } className="card-img-top" alt="..." />
                      <div className="card-img-overlay">
                        
                        <a href="#" className="btn btn-primary img-plus">➕</a>
                      </div>
                      <div className="row p-0 m-0">
                        <div className="col-6 p-3">
                          <div className="col-12 ">
                            <h6 className='text-dark'>Yasir Iqbal</h6>
                          
                          </div>
                          <div className="col-12">
                          SH10461627
                          </div>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                          <a href="#" className='col text-end'>Edit</a>
                        </div>
                        <hr className='border-style-groove' />
                      </div>
                      <div className="row p-0 m-0">
                        <div className="col-6 p-3">
                        <div className="col-12">
                        Account Type
                          </div>
                          <div className="col-12 ">
                            <b>Free Membership</b>

                          </div>
                          
                        </div>
                        <div className="col-6 d-flex align-items-center">
                          <a href="#" className='col text-end'>Update</a>
                        </div>
                        <hr className='border-style-groove' />
                      </div>
                      <div className="row p-0 m-0">
                        <div className="col-7 p-3">
                        <div className="col-12">
                        Mobile no. is verified
                          </div>
                          <div className="col-12 ">
                            <a href='#' className='text-info'>Verify your ID</a>
                          
                          </div>
                          
                        </div>
                        <div className="col-5 d-flex align-items-center">
                          <a href="#" className='col text-end'>
                          <i className="fa fa-shield" aria-hidden="true"></i>
                          </a>
                        </div>
                        <hr className='border-style-groove' />
                      </div>
                    </div>
                  </div>
                  
                  <div className="col">
                  <h4>Your Activity Summary</h4>
                    <div className="col-12 d-flex">
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>1</h3>
                        <span> Pending Invetation</span>
                      </div>
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>2</h3>
                        <span> Pending Invetation</span>
                      </div>
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>5</h3>
                        <span> Recent Visitors</span>
                      </div>
                    </div>
                    <div className="col-12 d-flex">
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>2</h3>
                        <span> Chat Viewed</span>
                      </div>
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>3</h3>
                        <span> Chat Initial</span>
                      </div>
                      <div className="col-4 m-1 shadow-sm px-3 rounded bg-white">
                        <h3>5</h3>
                        <span> View Contacts</span>
                      </div>
                    </div>
                    <div className="col-12 d-flex pt-5">
                    
                      <div className="blog-slider ">
                      <div className="blog-slider__wrp swiper-wrapper">
                        <div className="blog-slider__item swiper-slide">
                          <div className="blog-slider__img">
                            
                            <img src={window.location.origin +"/images/pattern/bg.webp"}  />
                          </div>
                          <div className="blog-slider__content text-black">
                            <span className="blog-slider__code">26 December 2019</span>
                            <div className="blog-slider__title">Tips to Improve</div>
                            <div className="blog-slider__text">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
                            <a href="#" className="button btn-theme rouneded-sm animated right-icn">READ MORE</a>
                          </div>
                        </div>
                      
                        
                      </div>
                      <div className="blog-slider__pagination"></div>
                    </div>
                      </div>

                  
                  </div>

                </div>
                <div className=" pt-5 ">
                  <div className="col-12 d-flex">
                  <div className="col-4 m-2">
                  <h5>Premium Matches <span className="bg-danger p-1 text-white rounded-3 ">17</span></h5>
                  </div>
                  <div className="col-4 m-2">
                  <h5>New Matches <span className="bg-danger p-1 text-white rounded-3 ">18</span></h5>
                  </div>
                  <div className="col-4 m-2">
                  <h5>Recommended Matches <span className="bg-danger p-1 text-white rounded-3 ">22</span></h5>
                  </div>
                  </div>
                  <div className="col-12 d-flex">
                  <div className="col-4 m-2 shadow bg-white">
                  <div className="col-12 p-4 d-flex rounded">

                    <div className="col-2">
                      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />
                  
                    </div>
                    <div className="col">
                      <b>Tuba</b> <span className="bg-danger p-1 text-white rounded">👑Premium+</span><br/>
                      <span>24 yr, 5'2, Urdu, Karachi</span>
                    </div>
                    <div className="col-2">
                      ✔
                    </div>
                  </div>
                  <hr className='border-style-groove' />
                  <div className="col-12 p-4 d-flex rounded">

                    <div className="col-2">
                      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />
                  
                    </div>
                    <div className="col">
                      <b>Tuba</b> <span className="bg-danger p-1 text-white rounded">👑Premium+</span><br/>
                      <span>24 yr, 5'2, Urdu, Karachi</span>
                    </div>
                    <div className="col-2">
                      ✔
                    </div>
                  </div>
                  <hr className='border-style-groove' />
                  <div className="col-12 p-4 d-flex rounded">

                    <div className="col-2">
                      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />
                  
                    </div>
                    <div className="col">
                      <b>Tuba</b> <span className="bg-danger p-1 text-white rounded">👑Premium+</span><br/>
                      <span>24 yr, 5'2, Urdu, Karachi</span>
                    </div>
                    <div className="col-2">
                      ✔
                    </div>
                  </div>
                  <hr className='border-style-groove' />
                  <div className="col-12 p-4 d-flex rounded">

                    <div className="col-2">
                      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />
                  
                    </div>
                    <div className="col">
                      <b>Tuba</b> <span className="bg-danger p-1 text-white rounded">👑Premium+</span><br/>
                      <span>24 yr, 5'2, Urdu, Karachi</span>
                    </div>
                    <div className="col-2">
                      ✔
                    </div>
                  </div>
                  <hr className='border-style-groove' />
                  <div className="col-12 p-4 d-flex rounded">

                    <div className="col-2">
                      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />
                  
                    </div>
                    <div className="col">
                      <b>Tuba</b> <span className="bg-danger p-1 text-white rounded">👑Premium+</span><br/>
                      <span>24 yr, 5'2, Urdu, Karachi</span>
                    </div>
                    <div className="col-2">
                      ✔
                    </div>
                  </div>
                  </div>
                  <div className="col-4 m-2 shadow bg-white">
                  <div className="col-12 p-4 d-flex rounded">
                    
    <div className="col-2">
      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />

    </div>
    <div className="col">
      
      <b>Tuba</b><br/>
      <span>24 yr, 5'2, Urdu, Karachi</span>
    </div>
    <div className="col-2">
      ✔<br/>Connect
    </div>
  </div>
  <hr className='border-style-groove' />
  <div className="col-12 p-4 d-flex rounded">

    <div className="col-2">
      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />

    </div>
    <div className="col">
      <b>Tuba</b><br/>
      <span>24 yr, 5'2, Urdu, Karachi</span>
    </div>
    <div className="col-2">
      ✔<br/>Connect
    </div>
  </div>
  <hr className='border-style-groove' />
  <div className="col-12 p-4 d-flex rounded">

    <div className="col-2">
      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />

    </div>
    <div className="col">
      <b>Tuba</b><br/>
      <span>24 yr, 5'2, Urdu, Karachi</span>
    </div>
    <div className="col-2">
      ✔<br/>Connect
    </div>
  </div>
  <hr className='border-style-groove' />
  <div className="col-12 p-4 d-flex rounded">

    <div className="col-2">
      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />

    </div>
    <div className="col">
      <b>Tuba</b><br/>
      <span>24 yr, 5'2, Urdu, Karachi</span>
    </div>
    <div className="col-2">
      ✔<br/>Connect
    </div>
  </div>
  <hr className='border-style-groove' />
  <div className="col-12 p-4 d-flex rounded">

    <div className="col-2">
      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />

    </div>
    <div className="col">
      <b>Tuba</b><br/>
      <span>24 yr, 5'2, Urdu, Karachi</span>
    </div>
    <div className="col-2">
      ✔<br/>Connect
    </div>
  </div>
  </div>
  <div className="col-4 m-2 shadow bg-white">
                  <div className="col-12 p-4 d-flex rounded">
                    
    <div className="col-2">
      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />

    </div>
    <div className="col">
      
      <b>Tuba</b><br/>
      <span>24 yr, 5'2, Urdu, Karachi</span>
    </div>
    <div className="col-2">
      ✔<br/>Connect
    </div>
  </div>
  <hr className='border-style-groove' />
  <div className="col-12 p-4 d-flex rounded">

    <div className="col-2">
      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />

    </div>
    <div className="col">
      <b>Tuba</b><br/>
      <span>24 yr, 5'2, Urdu, Karachi</span>
    </div>
    <div className="col-2">
      ✔<br/>Connect
    </div>
  </div>
  <hr className='border-style-groove' />
  <div className="col-12 p-4 d-flex rounded">

    <div className="col-2">
      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />

    </div>
    <div className="col">
      <b>Tuba</b><br/>
      <span>24 yr, 5'2, Urdu, Karachi</span>
    </div>
    <div className="col-2">
      ✔<br/>Connect
    </div>
  </div>
  <hr className='border-style-groove' />
  <div className="col-12 p-4 d-flex rounded">

    <div className="col-2">
      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />

    </div>
    <div className="col">
      <b>Tuba</b><br/>
      <span>24 yr, 5'2, Urdu, Karachi</span>
    </div>
    <div className="col-2">
      ✔<br/>Connect
    </div>
  </div>
  <hr className='border-style-groove' />
  <div className="col-12 p-4 d-flex rounded">

    <div className="col-2">
      <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='img-fluid border-radius-50' srcset="" />

    </div>
    <div className="col">
      <b>Tuba</b><br/>
      <span>24 yr, 5'2, Urdu, Karachi</span>
    </div>
    <div className="col-2">
      ✔<br/>Connect
    </div>
  </div>
  </div>
                  </div>
                </div>
              </div>
   
        </>
    )}
    </Observer>
  )
}


export default Dashboard