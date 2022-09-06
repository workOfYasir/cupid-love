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
                            <h1 className="animated2 text-white">Are You <span>Waiting</span> For <span> Dating ?</span></h1>
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
                            <option>Man</option>
                            <option>Woman</option>
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
                    <div className="col-md-2"><a className="button btn-lg btn-theme rouneded-sm animated right-icn"><span>search <i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a></div>
                </div>
                </div>
            </div>
            </section>

           <section className="page-section-ptb position-relative timeline-section">
            <div className="container mt-3">
                <div className="row justify-content-center mb-4 mb-md-5">
                <div className="col-md-10 text-center">
                    <h2 className="title divider mb-3">Step to find your Soul Mate</h2>
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed <br/>
                    do eiusmod tempor incididunt ut labore et dolore magna</p>
                </div>
                </div>
                <div className="row justify-content-center">
                <div className="col-lg-10 col-md-12">
                    <ul className="timeline list-inline">
                    <li>
                        <div className="timeline-badge"><img className="img-fluid" src={window.location.origin + "/images/timeline/01.png"} alt="" /></div>
                        <div className="timeline-panel">
                        <div className="timeline-heading text-center">
                            <h4 className="timeline-title divider-3">CREATE PROFILE</h4>
                        </div>
                        <div className="timeline-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  enim ad minim veniam, quis</p>
                        </div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-badge"><img className="img-fluid" src={window.location.origin + "/images/timeline/02.png" }alt="" /></div>
                        <div className="timeline-panel">
                        <div className="timeline-heading text-center">
                            <h4 className="timeline-title divider-3">Find match</h4>
                        </div>
                        <div className="timeline-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  enim ad minim veniam, quis</p>
                        </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-badge"><img className="img-fluid" src={window.location.origin + "/images/timeline/03.png"} alt="" /></div>
                        <div className="timeline-panel">
                        <div className="timeline-heading text-center">
                            <h4 className="timeline-title divider-3">START DATING</h4>
                        </div>
                        <div className="timeline-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  enim ad minim veniam, quis</p>
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
                    <img className="img-fluid b-sm-radius d-sm-block d-none" style={{ width:'100%' }} src={window.location.origin + "/images/team/team-v2.png"} alt="" />
                    <h5>Rimsha</h5>
                    <b>29, 5.2ft,Lahore</b>
                    </div>
                    <div className='col'>
                    <img className="img-fluid b-sm-radius d-sm-block d-none" style={{ width:'100%' }} src={window.location.origin + "/images/thumbnail/thum-6.jpg"} alt="" />
                    <h5>Aliza</h5>
                    <b>19, 5.9ft,Sheikhupura</b>
                    </div>
                    <div className='col'>
                    <img className="img-fluid b-sm-radius d-sm-block d-none" style={{ width:'100%' }} src={window.location.origin + "/images/thumbnail/thum-5.jpg"} alt="" />
                    <h5>Samreen</h5>
                    <b>25, 5.6ft,Karachi</b>
                    </div>
                    <div className='col'>
                    <img className="img-fluid b-sm-radius d-sm-block d-none" style={{ width:'100%' }} src={window.location.origin + "/images/thumbnail/thum-3.jpg"} alt="" />
                    <h5>Sameena</h5>
                    <b>22, 5.4ft,Lahore</b>
                    </div>
                    <div className='col'>
                    <img className="img-fluid b-sm-radius d-sm-block d-none" style={{ width:'100%' }} src={window.location.origin + "/images/thumbnail/thum-1.jpg"} alt="" />
                    <h5>Sana Iqbal</h5>
                    <b>24, 5.7ft,Lahore</b>
                    </div>
</Carousel>

                </div>
                </div>
            </div>
            </section>

            <section className="page-section-ptb grey-bg">
            <div className="container mt-3">
                <div className="row justify-content-center mb-4 mb-md-5">
                <div className="col-md-10 text-center">
                    <h2 className="title divider mb-3">Success Stories</h2>
                    <p className="lead">Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                </div>
                </div>
                <div className="row post-article mb-0 mb-lg-5">
                <div className="col-md-6">
                    <div className="post post-artical">
                    <div className="post-image clearfix"><img className="img-fluid" src={window.location.origin + "/images/blog/01.jpg"} alt="" /></div>
                    <div className="post-details">
                        <div className="post-title mt-2">
                        <h5 className="title text-uppercase mt-2"><a href="#">Intentions That Energize You</a></h5>
                        </div>
                        <p>March, 2022 by<a href="#">John Doe</a></p>
                        <div className="post-icon">
                        <div className="post-content">
                            <p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam.Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci.</p>
                        </div>
                        <a className="button" href="#">read more..</a> </div>
                    </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="post post-artical">
                    <div className="post-image clearfix"><img className="img-fluid" src={window.location.origin + "/images/blog/02.jpg"} alt="" /></div>
                    <div className="post-details">
                        <div className="post-title mt-2">
                        <h5 className="title text-uppercase mt-2"><a href="#">A Brief History Of Creation</a></h5>
                        </div>
                        <p>March, 2022 by<a href="#">John Doe</a></p>
                        <div className="post-icon">
                        <div className="post-content">
                            <p>Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus. Curabitur aliquet quam.Cras ultricies ligula sed magna dictum porta. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci.</p>
                        </div>
                        <a className="button" href="#">read more..</a> </div>
                    </div>
                    </div>
                </div>
                </div>
           
                <div className="row justify-content-center mt-0 mt-lg-5">
                <div className="col-sm-10 text-center"> <a className="button  btn-lg btn-theme rouneded-sm animated right-icn"><span>Show More<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> </div>
                </div>
            </div>
            </section> 

    

            <section className="page-section-ptb o-hidden grey-bg">
            <div className="container mt-3">
                <div className="row justify-content-center mb-4 mb-md-5">
                <div className="col-md-10 text-center">
                    <h2 className="title divider mb-3">Why Choose Us</h2>
                    <p className="lead">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis. Eum cu</p>
                </div>
                </div>
                
                <div className="row text-center">
                <div className="col-md-4">
                    <div className="about-cntn">
                    <h5 className="title divider-3 text-uppercase mb-3">About US</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="about-cntn">
                    <h5 className="title divider-3 text-uppercase mb-3">who we are</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="about-cntn sm-mb-0">
                    <h5 className="title divider-3 text-uppercase mb-3">why we do this</h5>
                    <p className="sm-mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
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