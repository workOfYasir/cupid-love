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
            {/* <div className="container mt-3">
                <div className="row justify-content-center">
                <div className="col-md-10">
                    <div className="row mb-4 mb-md-5">
                    <div className="col-md-12">
                        <h2 className="title divider mb-3">Contact Us</h2>
                        <p className="lead">Eum cu tantas legere complectitur, hinc utamur ea eam. Eum patrioque mnesarchum eu, diam erant convenire et vis. Et essent evertitur sea, vis cu ubique referrentur, sed eu dicant expetendis. Eum cu</p>
                    </div>
                    </div>
                    <div className="row mb-4 mb-md-5">
                    <div className="col-md-4">
                        <div className="address-block"> <i className="fa fa-desktop" aria-hidden="true"></i> <a href="mailto:somemail@mail.com">somemail@mail.com</a> </div>
                    </div>
                    <div className="col-md-4">
                        <div className="address-block"> <i className="fa fa-home" aria-hidden="true"></i>
                        <address>
                        T317 Timber Oak Drive<br/>
                        Sundown, TX 79372
                        </address>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="address-block"> <i className="fa fa-phone" aria-hidden="true"></i> <a href="tel:+000123456789">+000 - 123 - 456 - 789</a> </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-12 mb-3">
                        <h4 className="title divider-3">We Love Talking</h4>
                    </div>
                    </div>
                    <div className="row mb-0 mb-md-2 mb-lg-3 mb-xl-4">
                    <div className="col-md-12 mb-0 mb-lg-2">
                        <div id="formmessage d-none">Success/Error Message Goes Here</div>
                        <form id="contactform" className="main-form" method="post" action="http://themes.potenzaglobalsolutions.com/html/cupid-love-dating-website-html5-template/cupid-love/php/contact-form.php">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                            <div className="input-group">
                                <input id="name" placeholder="Your name here" className="form-control" name="name" type="text" />
                            </div>
                            </div>
                            <div className="col-md-6 mb-3">
                            <div className="input-group">
                                <input placeholder="Your mail here" className="form-control" name="email" type="email" />
                            </div>
                            </div>
                            <div className="col-md-12 mb-3">
                            <div className="input-group">
                                <textarea className="form-control input-message" placeholder="Your message here*" rows="7" name="message"></textarea>
                            </div>
                            </div>
                            <div className="col-md-12 mb-0">
                            <input type="hidden" name="action" value="sendEmail"/>
                            <button id="submit" name="submit" type="submit" value="Send" className="button btn-lg btn-theme rouneded-sm animated right-icn mb-0"><span>Submit Now<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></button>
                            </div>
                        </div>
                        </form>
                        <Loader />
                    </div>
                    </div>
                </div>
                </div>
            </div> */}
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