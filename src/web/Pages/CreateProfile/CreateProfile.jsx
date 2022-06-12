import React from 'react'
import { Link } from "react-router-dom";
import { Observer } from "mobx-react-lite";
// import './../../Components/Header'
// import './../../Components/Footer'
import './assets/css/profile.css'
const CreateProfile = () => {
  

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
                        <div className="stepwizard-step"> <a href="#steps-1" className="btn btn-circle">1 <span><i className="fa fa-check" aria-hidden="true"></i></span></a>
                        <p className="text-dark">Profile</p>
                        </div>
                        <div className="stepwizard-step"> <a href="#steps-2" className="btn btn-circle" disabled="disabled">2 <span><i className="fa fa-check" aria-hidden="true"></i></span></a>
                        <p className="text-dark">About you</p>
                        </div>
                        <div className="stepwizard-step"> <a href="#steps-3" className="btn btn-circle" disabled="disabled">3 <span><i className="fa fa-check" aria-hidden="true"></i></span></a>
                        <p className="text-dark">Account</p>
                        </div>
                        </div>
                        </div>
                        <form method="post" className="text-center mt-3">
                            <div className="row  justify-content-center setup-content" id="steps-1">
                                <div className="col-md-12">
                                <h4 className="title text-dark divider-3 mb-5">Profile</h4>
                                <div className="row justify-content-center">
                                        <div className="col-md-12 text-start">
                                        <div className="row mb-3">
                                        <label htmlFor="exampleInput">First Name</label>
                                        <div className="form-group">
                                        <input type="text" className="form-control p-2 b-radius form-field" id="exampleInput" placeholder="Enter First Name" />
                                        </div>
                                        </div>
                                        <div className="mb-3">
                                        <label className="form-label">Living In This Country Since</label>
                                        <select className="form-select" aria-label="Default select example" name="" id="">
                                            <option>Select one</option>
                                            <option value="">Birth</option>
                                            <option value="">1900</option>
                                            <option value="">1950</option>
                                            <option value="">2000</option>
                                        
                                        </select>
                                        </div>
                                        <div className="mb-3">
                                        <label className="form-label">His Martial Status</label>
                                        <select className="form-select" aria-label="Default select example" name="" id="">
                                            <option>Select one</option>
                                            <option value="">Birth</option>
                                            <option value="">1900</option>
                                            <option value="">1950</option>
                                            <option value="">2000</option>
                                        
                                        </select>
                                        </div>
                                        <div className="mb-3">
                                        <label className="form-label">Height</label>
                                        <select className="form-select" aria-label="Default select example" name="" id="">
                                            <option>Select one</option>
                                            <option value="">Birth</option>
                                            <option value="">1900</option>
                                            <option value="">1950</option>
                                            <option value="">2000</option>
                                        
                                        </select>
                                        </div>
                                        <div className="mb-3">
                                        <label htmlFor="" className="form-label">Religion</label>
                                        <select className="form-select" name="" id="">
                                        <option>Select one</option>
                                        <option value="">Muslim</option>
                                        <option value="">Hindu</option>
                                        <option value="">Cristians</option>
                                        <option value="">Sikh</option>


                                        </select>
                                        </div>
                                        <div className="mb-3">
                                        <label className="form-label">Sub-Community</label>
                                        <select className="form-select" aria-label="Default select example" name="" id="">
                                            <option>Select one</option>
                                            <option value="">Birth</option>
                                            <option value="">1900</option>
                                            <option value="">1950</option>
                                            <option value="">2000</option>
                                        
                                        </select>
                                        </div>
                                        </div>
                                    </div>
                                <div className="form-group mb-3">
                                <div className="profile-info text-start">
                                <p className="mb-0  text-dark"><i className="fa fa-info-circle" aria-hidden="true"></i> Let's set up your account, while
                                we find Matches for you!</p>
                                </div>
                                </div>
                                <div className=" col-12 mb-0 "> <a className="button col-4 btn btn-theme rounded-sm animated right-icn" href='/' data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  <a className=" col-4 button btn-theme rounded-sm btn nextBtn btn   animated right-icn"><span>Next<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a></div>
                                </div>
                            </div>
                            <div className="row setup-content" id="steps-2">
                            <div className="col-md-12">
                            <div className="row  justify-content-center">
                            <div className="col-md-12 text-start text-capitalize text-dark">
                            <div className="form-group mb-0">
                            <div className="mb-3">
                                <label className="form-label">Height Qualification</label>
                                <select className="form-select" aria-label="Default select example" name="" id="">
                                    <option>Select one</option>
                                    <option value="">PHd</option>
                                    <option value="">MS/M-Phil</option>
                                    <option value="">BS Honrs</option>
                                    <option value="">BSC</option>
                                
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Work With</label>
                                <select className="form-select" aria-label="Default select example" name="" id="">
                                    <option>Select one</option>
                                    <option value="">Govt Job</option>
                                    <option value="">Private Job</option>
                                    <option value="">Business</option>
                                
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">As</label>
                                <select className="form-select" aria-label="Default select example" name="" id="">
                                    <option>Select one</option>
                                    <option value="">Banking</option>
                                    <option value="">Software Developer</option>
                                    <option value="">Engineer</option>
                                 
                                
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Monthly Income</label>
                                <select className="form-select" aria-label="Default select example" name="" id="">
                                    <option>Select one</option>
                                    <option value="">20,000</option>
                                    <option value="">30,000</option>
                                    <option value="">40,000</option>
                                    <option value="">50,000</option>
                                    <option value="">60,000</option>
                                    <option value="">70,000</option>
                                    <option value="">80,000</option>
                                    <option value="">90,000</option>
                                    <option value="">100,000</option>
                                    <option value="">100,000 +</option>

                                </select>
                            </div>
                            

                            <div className="form-group mb-3">
                            <div className="profile-info">
                            <p className="mb-0 text-dark"><i className="fa fa-info-circle" aria-hidden="true"></i> by clicking submit you are agreeing to our terms and conditions of use.</p>
                            </div>
                            </div>

                            </div>
                            </div>
                            <div className="col-12 text-center mb-0"> <a className=" col-4 button  btn btn-theme rounded-sm animated right-icn" href='/' data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> <a className=" col-4 button btn-theme rounded-sm btn nextBtn btn   animated right-icn"><span>Next<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  </div>
                            </div>
                            </div>
                            </div>
                            <div className="row setup-content" id="steps-3">
                            <div className="col-md-12">
                            <div className="row  justify-content-center">
                            <div className="col-md-12 text-start text-capitalize text-white">
                            <div className="form-group mb-3">
                            <label className="title divider-3 text-dark mb-3">about me</label>
                            <textarea className="form-control bg-white form-field" rows="3"></textarea>
                            </div>
                            <div className="row">
                            <label htmlFor="exampleInput">Email ID</label>
                            <div className="form-group mb-3">

                            <input type="text" className="form-control form-field p-2 b-radius" id="exampleInput" placeholder="Enter Email ID" />
                            </div>

                            <div className="form-group mb-3 text-center">
                            <label htmlFor="my-select" className="col-4 text-grey">Day
                            <select id="my-select" className="form-select" name="">
                            <option>01</option><option>02</option><option>03</option><option>04</option><option>05</option><option>06</option><option>07</option><option>08</option><option>09</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option><option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option>
                            </select>
                            </label>
                            <label htmlFor="my-select" className="col-4 text-grey">Month
                            <select id="my-select" className="form-select" name="">
                            <option>Jan</option><option>Feb</option><option>Mar</option><option>Apr</option><option>May</option><option>Jun</option><option>Jul</option><option>Aug</option><option>Sep</option><option>Oct</option><option>Nov</option><option>Dec</option>
                            </select>
                            </label>
                            <label htmlFor="my-select" className="col-4 text-grey">Month
                            <select id="my-select" className="form-select" name="">
                            <option>2001</option><option>2000</option><option>1999</option><option>1998</option><option>1997</option><option>1996</option><option>1995</option><option>1994</option><option>1993</option><option>1992</option><option>1991</option><option>1990</option><option>1989</option><option>1988</option><option>1987</option><option>1986</option><option>1985</option><option>1984</option><option>1983</option><option>1982</option><option>1981</option><option>1980</option><option>1979</option><option>1978</option><option>1977</option><option>1976</option><option>1975</option><option>1974</option><option>1973</option><option>1972</option><option>1971</option><option>1970</option><option>1969</option><option>1968</option><option>1967</option><option>1966</option><option>1965</option><option>1964</option><option>1963</option><option>1962</option><option>1961</option><option>1960</option><option>1959</option><option>1958</option><option>1957</option><option>1956</option><option>1955</option><option>1954</option><option>1953</option><option>1952</option><option>1951</option><option>1950</option>
                            </select>
                            </label>
                            </div>

                            </div>

                            <div className="form-group mb-3">
                            <div className="profile-info">
                            <p className="mb-0 text-dark"><i className="fa fa-info-circle" aria-hidden="true"></i> by clicking submit you are agreeing to our terms and conditions of use.</p>
                            </div>
                            </div>


                            </div>

                            </div>
                            <div className=" col-12 mb-0 "> <a href='/' className="button col-4 btn btn-theme rounded-sm animated right-icn" data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  <a href='/myaccount' data-bs-dismiss="modal" className="button col-4 btn-theme rounded-sm btn btn   animated right-icn"><span>submit<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> </div>
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