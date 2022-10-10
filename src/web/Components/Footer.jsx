import React,{useContext} from 'react'
import { Observer } from "mobx-react-lite"
import Loader from './../Layouts/Loader'
import pattern4 from './images/pattern/04.png'


const Footer = () => {
    
  return (
    <Observer>
    {() => ( 
        <>
        <footer className=" text-white text-center" >

            <div className="footer-widget  primary-bg-light">
                <div className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    <div className="footer-logo mb-2"> 
                    <div className="col-2 offset-5">
                    <img className="img-center img-fluid" src={window.location.origin + "/images/logo.png"} alt="" />
                    </div>
                    </div>
                    <div className="social-icons color-hover primary-text">
                        <ul>
                        <li className="social-facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li className="social-twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li className="social-dribbble"><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li className="social-gplus"><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li className="social-youtube"><a href="#"><i className="fa fa-youtube"></i></a></li>
                        </ul>
                    </div>
                    <p className="text-dark">© 2022  - UrgentRishta All Right Reserved </p>
                    </div>
                </div>
                </div>
            </div>
        </footer>
        </>
    )}
    </Observer>
  )
}

export default Footer