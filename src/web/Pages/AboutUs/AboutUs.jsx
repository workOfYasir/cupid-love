import React,{useContext} from 'react'
import {Link} from "react-router-dom";
import { Observer } from "mobx-react-lite"
import Footer from "./../../Components/Footer";

const AboutUs = () => {

    return (
        <Observer>
            {() => (
                <>
                    <div className="bg-grey">
                        <div className="container ">
                            <div className="col bg-white d-flex rounded shadow-lg">

                                <Link className="p-3 col-2" to="/">  <img className="img-center img-fluid" src={window.location.origin + "/images/logo.png"} alt="" /></Link>

                                <div className="col offset-2 d-flex flex-column justify-content-center">
                                    <h2 className="p-5" style={{color:"#D63583"}}>About Us</h2>
                                </div>
                            </div>
                            <div className="row p-5">
                                <h5 className="p-2">Description</h5>
                                <div className="col">
                                Urgentrishta.co in is one of the largest online Pakistan Matrimonial Site.  Simple to use and exclusively online Premium matrimony services make us a differentiator amongst the matrimonial sites.  We believe in providing a secure, easy to use and convenient matrimonial matchmaking experience to our members.  
                                <br />
                                Urgentrishta.co
                                Pakistan's most oldest and most successful matchmaking service, has been trusted since 2011 by people all over the Pakistan to help them find their soulmates. Today, hundreds of thousands of people have met their life partners through our revolutionary matchmaking service and countless others have made some very special friends.
                                <br />
                                Register with us for free to find your life partner. Our premium membership package ensures you are able to communicate with suitable members and Initiate marriage proposals. 




                                </div>
                                <div className="col">
                                    <img src={window.location.origin +"/images/aboutus.png"} className="img-fluid"/>
                                </div>
                            </div>
                            <div className="row p-5">
                                <div className="col-8">
                                    <h5> Scope</h5>
                                    <p>
                                    We offer an extensive scope of decisions dependent on your own special vision of a life partner – making it simple for you to meet individuals worth investing your time with. We believe that staying transparent and providing right & appropriate details can help our members in making an educated judgment and engage you energies in the right direction for a win win. We aspire to become the most sought after matrimonial services provider in the near future.
.</p>
                                </div>
                                <div className="col">
                                    <h5>Goal</h5>
                                    <p className="text-justify">Our goal is to bring happiness in the life of people through marriage by providing user friendly and family environmental platform where privacy and security is ensured.
</p>
                                </div>
                            </div>
                            <h3 style={{color:"#D63583",textAlign:"center"}} className="p-3 shadow-lg">Easy Steps to find good match</h3>
                            <div className="row p-5 bg-white shadow-lg">
                                <div className="col">
                                    <div className="text-center d-block">
                                        <div className="col">
                                            <img src={window.location.origin +"/images/aboutus01.jpg"} className="img-fluid"/>
                                        </div>
                                        <div className="col">
                                           Sign Up and Create Profile
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="text-center d-block">
                                        <div className="col">
                                            <img src={window.location.origin +"/images/aboutus02.jpg"} className="img-fluid"/>
                                        </div>
                                        <div className="col">
                                           Find the match from the 160,00 Users
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="text-center d-block">
                                        <div className="col">
                                            <img src={window.location.origin +"/images/aboutus03.jpg"} className="img-fluid"/>
                                        </div>
                                        <div className="col">
                                            Use easy filters to find perfect match
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="text-center d-block">
                                        <div className="col">
                                            <img src={window.location.origin +"/images/aboutus04.jpg"} className="img-fluid"/>
                                        </div>
                                        <div className="col">
                                            Start conversation with your partner
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row p-5 mt-5">
                                <h3 style={{color:"#D63583",textAlign:"center"}} className="p-3 shadow-lg">fyguhij</h3>
                                <div className="col mx-2 shadow-lg bg-white">
                                    <div className="text-center">
                                        <img src={window.location.origin +"/images/aboutus1-2.png"} className="img-fluid"/>
                                        drt fcv bhjk mld ctfvg bnimo,p. sdfgh jnkmo
                                    </div>
                                </div>
                                <div className="col mx-2 shadow-lg bg-white">
                                    <div className="text-center">
                                        <img src={window.location.origin +"/images/aboutus2-2.png"} className="img-fluid"/>
                                        drt fcv bhjk mld ctfvg bnimo,p. sdfgh jnkmo
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <Footer/>
                    </div>
                </>
            )}
        </Observer>
    )
}
export default AboutUs