import { Observer } from 'mobx-react'
import React, { useState, useContext, useEffect } from "react";
import Header from './../../Components/Header'
import Footer from './../../Components/Footer'
import { StoreContext } from "./../../store";
import axios from "axios";
import bg1 from './Components/images/bg/bg-1.jpg'
import bg2 from './Components/images/bg/bg-2.jpg'
import pattern2 from './../../Components/images/pattern/02.png'
import pattern3 from './../../Components/images/pattern/03.png'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
const Home = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
  return (
    <Observer>
       {()=>(
           <>
            <Header />
            
            <section id="home-slider" className="fullscreen">
            <div id="main-slider" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" style={{ height:"700px" }}>
                
                <div className="carousel-item active h-100 bg-overlay-red"  style={{ backgroundImage:  `url(${bg1})` ,backgroundRepeat: "no-repeat" , backgroundSize: "cover", }} >
                    <div className="slider-content">
                    <div className="container mt-3">
                        <div className="row carousel-caption align-items-center h-100">
                        <div className="col-md-12 text-end">
                            <div className="slider-1">
                            <h1 className="animated2 text-white">Are You <span>Looking</span> For <span> Life Partner ?</span></h1>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item h-100 bg-overlay-red" style={{ backgroundImage:  `url(${bg2})`,backgroundRepeat: "no-repeat" , backgroundSize: "cover", }} >
                    <div className="slider-content">
                    <div className="container mt-3">
                        <div className="row carousel-caption align-items-center h-100">
                        <div className="col-md-12 text-start">
                            <div className="slider-1">
                            <h1 className="animated7 text-white">Meet big <span> and </span> beautiful love <span> here!</span></h1>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            
                </div>
                
                <a className="left carousel-control" href="#main-slider" data-bs-slide="prev"> <span><i className="fa fa-angle-left"></i></span> </a> <a className="right carousel-control" href="#main-slider" data-bs-slide="next"> <span><i className="fa fa-angle-right"></i></span> </a> </div>
            </section>
           <section className="form-1 py-3 bg-dark-transparent">
            <div className="container mt-3">
                <div className="banner-form">
                <div className="row">
                    <div className="col-md-3">
                    <div className="form-group row align-items-center">
                        <div className="col-lg-4 col-md-12">
                        <label className="control-label text-white form-label">I am a</label>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="selected-box">
                            <select className="selectTagNav rouneded-sm  mt-1 form-select">
                                <option>Man </option>
                                <option>Woman</option>
                            </select>
                            </div>
                        
                        </div>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="form-group row align-items-center">
                        <div className="col-lg-5 col-md-12">
                        <label className="control-label text-white form-label">Seeking</label>
                        </div>
                        <div className="col-lg-7 col-md-12">
                        <div className="selected-box">
                            <select className="selectTagNav rouneded-sm  mt-1 form-select">
                                <option>Woman</option>
                                <option>Man</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-6">
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4 col-md-12">
                            <label className="control-label text-white form-label">From</label>
                            </div>
                            <div className="col-lg-8 col-md-12">
                            <div className="selected-box">
                                <select className="selectTagNav rouneded-sm  mt-1 form-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <div className="form-group row align-items-center">
                            <div className="col-lg-4 col-md-12">
                            <label className="control-label text-white ps-0 form-label">To</label>
                            </div>
                            <div className="col-lg-8 col-md-12">
                            <div className="selected-box">
                                <select className="selectTagNav rouneded-sm  mt-1 form-select">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div className="col-md-2"><a className="button btn-lg btn-theme rouneded-sm animated right-icn" href="#"data-bs-toggle="modal"
                                                 data-bs-target="#exampleModal2"
                                                 id="register"><span>search <i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a></div>
                </div>
                </div>
            </div>
            </section>

           <section className="page-section-ptb position-relative timeline-section">
            <div className="container mt-3">
                <div className="row justify-content-center mb-4 mb-md-5">
                <div className="col-md-10 text-center">
                    <h2 className="title divider mb-3">Step to find your Soul Mate</h2>
                    <p style={{textAlign:"justify"}} className="text-justify text-dark lead">We offer you an array of membership options free of cost. All you have to do is get yourself registered and enter our global network. The Sign-up process is easy and involves three simple steps:</p>
                </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                    <ul className="timeline list-inline">
                    <li>
                        <div className="timeline-badge"><img className="img-fluid" src={window.location.origin + "/images/timeline/01.png"} alt="" /></div>
                        <div className="timeline-panel">
                        <div className="timeline-heading text-center">
                            <h4 className="timeline-title divider-3">Registration and verification</h4>
                        </div>
                        <div className="timeline-body">
                            <p style={{textAlign:"justify"}} className="text-justify text-dark">Click the ‘Register’ button and enter basic details to get yourself verified by the system. Upon verification, you will be directed to fill a form and provide information about yourself and your preferred partner.  </p>
                        </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-badge"><img className="img-fluid" src={window.location.origin + "/images/timeline/02.png" }alt="" /></div>
                        <div className="timeline-panel">
                        <div className="timeline-heading text-center">
                            <h4 className="timeline-title divider-3">Creating your profile</h4>
                        </div>
                        <div className="timeline-body">
                            <p style={{textAlign:"justify"}} className="text-justify text-dark">Complete your profile by uploading your best photos, along with any specific details you wish to add in order to make your profile impressive, and attract better responses. Do fill-in confidentiality options.</p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-badge">
                            <img src={window.location.origin +"/images/aboutus02.jpg"} style={{  borderRadius: '50%'}} className="img-fluid"/>
                            {/* <img className="img-fluid" src={window.location.origin + "/images/timeline/03.png"} alt="" /> */}
                        </div>
                        <div className="timeline-panel">
                        <div className="timeline-heading text-center">
                            <h4 className="timeline-title divider-3">Communicating with your personalized matchmaker</h4>
                        </div>
                        <div className="timeline-body">
                            <p style={{textAlign:"justify"}} className="text-justify text-dark">Once you’re on the network, feel free to contact our representatives and let them identify your needs and preferences. Through their expertise, your assigned personal matchmaker shall select the most qualified candidates as per your criteria. To make things easier, you would be assisted with your next step after you show interest in a candidate. This saves you time, effort and disappointment you might otherwise face during the process of spotting the ideal match.</p>
                        </div>
                        </div>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </section>

            <section className="page-section-ptb  text-white" style={{ backgroundImage: `url(${pattern2})`,backgroundRepeat: "no-repeat" , backgroundSize: "cover", }} >
            <div className="container mt-3">
                <div className="row justify-content-center mb-4 mb-md-5">
                <div className="col-md-8 text-center">
                    <h2 className="title divider">Animated Fun Facts</h2>
                </div>
                </div>
                <div className="row">
                <div className="col-md-3 col-sm-6 text-center">
                    <div className="counter"> <img src={window.location.origin + "/images/counter/01.png"} alt="" /> <span className="timer" data-to="1600" data-speed="10000">1600</span>
                    <label className="form-label">Total Members</label>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 text-center">
                    <div className="counter"> <img src={window.location.origin + "/images/counter/02.png"} alt="" /> <span className="timer" data-to="750" data-speed="10000">750</span>
                    <label className="form-label">Online Members</label>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 text-center">
                    <div className="counter"> <img src={window.location.origin + "/images/counter/03.png"} alt="" /> <span className="timer" data-to="380" data-speed="10000">380</span>
                    <label className="form-label">Men Online</label>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 text-center">
                    <div className="counter mb-0"> <img src={window.location.origin + "/images/counter/04.png"} alt="" /> <span className="timer" data-to="370" data-speed="10000">370</span>
                    <label className="form-label">Women Online</label>
                    </div>
                </div>
                </div>
            </div>
            </section>

            <section className="page-section-ptb profile-slider pb-5">
            <div className="container mt-3">
                <div className="row justify-content-center">
                <div className="col-md-8 text-center">
                    <h2 className="title divider">Last Added Profiles</h2>
                </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                    <Carousel responsive={responsive}>

                    <div className='col'>
                    <img className="img-fluid b-sm-radius d-sm-block d-none" style={{ width:'100%' }} src={window.location.origin + "/images/profile/03.jpg"} alt="" />
                    <h5>Aliza</h5>
                    <b>19, 5.9ft,Sheikhupura</b>
                    </div>
                    <div className='col'>
                    <img className="img-fluid b-sm-radius d-sm-block d-none" style={{ width:'100%' }} src={window.location.origin + "/images/profile/04.jpg"} alt="" />
                    <h5>Samreen</h5>
                    <b>25, 5.6ft,Karachi</b>
                    </div>
                    <div className='col'>
                    <img className="img-fluid b-sm-radius d-sm-block d-none" style={{ width:'100%' }} src={window.location.origin + "/images/profile/05.jpg"} alt="" />
                    <h5>Sameena</h5>
                    <b>22, 5.4ft,Lahore</b>
                    </div>
                    <div className='col'>
                    <img className="img-fluid b-sm-radius d-sm-block d-none" style={{ width:'100%' }} src={window.location.origin + "/images/profile/07.jpg"} alt="" />
                    <h5>Sana Iqbal</h5>
                    <b>24, 5.7ft,Lahore</b>
                    </div>
</Carousel>

                </div>
                </div>
            </div>
            </section>

            {/*<section className="page-section-ptb grey-bg">*/}
            {/*<div className="container mt-3">*/}
            {/*    <div className="row justify-content-center mb-4 mb-md-5">*/}
            {/*    <div className="col-md-10 text-center">*/}
            {/*        <h2 className="title divider mb-3">Success Stories</h2>*/}
            {/*        <p style={{textAlign:"justify className="text-justify text-dark lead">Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>*/}
            {/*    </div>*/}
            {/*    </div>*/}
            {/*    <div className="row post-article mb-0 mb-lg-5">*/}
            {/*    <div className="col-md-6">*/}
            {/*        <div className="post post-artical">*/}
            {/*        <div className="post-image clearfix"><img className="img-fluid" src={window.location.origin + "/images/blog/01.jpg"} alt="" /></div>*/}
            {/*        <div className="post-details">*/}
            {/*            <div className="post-title mt-2">*/}
            {/*            <h5 className="title text-uppercase mt-2"><a href="#">Intentions That Energize You</a></h5>*/}
            {/*            </div>*/}
            {/*            <p style={{textAlign:"justify className="text-justify text-dark>March, 2022 by<a href="#">John Doe</a></p>*/}
            {/*            <div className="post-icon">*/}
            {/*            <div className="post-content">*/}
            {/*                <p style={{textAlign:"justify className="text-justify text-dark>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam.Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci.</p>*/}
            {/*            </div>*/}
            {/*            <a className="button" href="#">read more..</a> </div>*/}
            {/*        </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="col-md-6">*/}
            {/*        <div className="post post-artical">*/}
            {/*        <div className="post-image clearfix"><img className="img-fluid" src={window.location.origin + "/images/blog/02.jpg"} alt="" /></div>*/}
            {/*        <div className="post-details">*/}
            {/*            <div className="post-title mt-2">*/}
            {/*            <h5 className="title text-uppercase mt-2"><a href="#">A Brief History Of Creation</a></h5>*/}
            {/*            </div>*/}
            {/*            <p style={{textAlign:"justify className="text-justify text-dark>March, 2022 by<a href="#">John Doe</a></p>*/}
            {/*            <div className="post-icon">*/}
            {/*            <div className="post-content">*/}
            {/*                <p style={{textAlign:"justify className="text-justify text-dark>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam.Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci.</p>*/}
            {/*            </div>*/}
            {/*            <a className="button" href="#">read more..</a> </div>*/}
            {/*        </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    </div>*/}

            {/*    <div className="row justify-content-center mt-0 mt-lg-5">*/}
            {/*    <div className="col-sm-10 text-center"> <a className="button  btn-lg btn-theme rouneded-sm animated right-icn"><span>Show More<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*</section> */}

    

            <section className="page-section-ptb o-hidden grey-bg">
            <div className="container mt-3">
                <div className="row justify-content-center mb-4 mb-md-5">
                <div className="col-md-10 text-center">
                    <h2 className="title divider mb-3">Why Choose Us</h2>
                    <p style={{textAlign:"justify"}} className="text-justify text-dark lead">UrgentRishta.co is the ideal platform for eligible singles all over the world to meet, interact, and find a life partner of their choice. </p>
                </div>
                </div>
                
                <div className="row text-center">
                <div className="col-md-4">
                    <div className="about-cntn">
                    <h5 className="title divider-3 text-uppercase mb-3">About US</h5>
                    <p style={{textAlign:"justify"}} className="text-justify text-dark">UrgentRishta.com, Pakistan's most oldest and most successful matchmaking service, has been trusted since 2011 by people all over the Pakistan to help them find their soulmates. Today, hundreds of thousands of people have met their life partners through our revolutionary matchmaking service and countless others have made some very special friends.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="about-cntn">
                    <h5 className="title divider-3 text-uppercase mb-3">who we are</h5>
                    <p style={{textAlign:"justify"}} className="text-justify text-dark">Urgentrishta.co in is one of the largest online Pakistan Matrimonial Site.  Simple to use and exclusively online Premium matrimony services make us a differentiator amongst the matrimonial sites.  We believe in providing a secure, easy to use and convenient matrimonial matchmaking experience to our members.

                        Register with us for free to find your life partner. Our premium membership package ensures you are able to communicate with suitable members and Initiate marriage proposals. </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="about-cntn sm-mb-0">
                    <h5 className="title divider-3 text-uppercase mb-3">why we do this</h5>
                    <p style={{textAlign:"justify"}} className="text-justify text-dark sm-mb-0">Urgent Rishta was founded in 2011 with one simple objective - to provide a superior matchmaking experience by expanding the opportunities available to meet potential life partners. Since then we have created a renowned service that has touched the lives of millions of people all over the world. We have, however, never rested on our laurels.</p>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <Footer />
           </>
       )}
    </Observer>
  )
}

export default Home