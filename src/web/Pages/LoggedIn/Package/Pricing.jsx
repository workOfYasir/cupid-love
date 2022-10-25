import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Observer } from "mobx-react-lite";
import "./assets/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { StoreContext } from "../../../store";
import Dashboard from "../MyAccount/Dashboard/Dashboard";

const Pricing = () => {
  const store = useContext(StoreContext);
  const [plans, setPlans] = useState();
  const [componentCount, setComponentCount] = useState([]);
  const [loop,setLoop] = useState([0,1,2,3,4])

  const onClickAddDashboardComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<Dashboard/>));
      console.log(componentCount)
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      store.setCount(0);
      setComponentCount(componentCount.concat(<Dashboard/>));
    }
  };
  const getPlans = async (access_token, user_id) => {
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
      };
      const response = await axios({
        method: "get",
        url: `${store.url}all-plans`,
        headers: headers,
      }).then((response) => {
        const data = response.data;

        setPlans(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");

    getPlans(token, JSON.parse(user).id);
  }, []);
  return (
      <Observer>
        {() => (
            <>
              <div className="bg-danger col-12 d-flex d-sm-none p-3">
                <div className="col-6">
                  <h5 className="text-white">Upgrade to Premimum </h5>
                </div>
                <div className="col-6 text-end d-flex flex-column justify-content-center">
                  <h5 className="text-white">
                    <Link to="/matches">Skip</Link>
                  </h5>
                </div>
              </div>
              <div className="w-100 h-100 bg-content-sm pb-5 pt-3 bg-grey">
                <div className="d-sm-flex d-none">
                  <div className="col-3 text-white d-flex justify-content-center ">
                    <h3 className="logo-font">Urgent Rishta</h3>
                  </div>
                  <div className="offset-6 col-2">

                    <Link to="/myaccount" className="btn text-white d-flex justify-content-center border btn-premimum">Skip</Link>
                  </div>
                </div>
                <div className="col-12 text-center text-white pb-5">
                  <div className="display-7 pt-2">
                    Upgrade now & Get Premium benefits for upto
                    <b> 4 weeks extra, FREE!</b>
                  </div>
                </div>

                <div className="d-sm-flex d-none col-12 justify-content-center  pt-5 container">
                  {plans?.map((plan,index) => (
                      <>
                        <div className={"pricing-card col child-"+index}>
                          <div className="shadow text-dark rounded bg-white text-center p-2 m-1 pb-2">
                            <div className={"col-12 pt-3 name-"+index}>
                              <h6>{plan.name}</h6>
                            </div>
                            <div className="col-12 pt-1">&nbsp;</div>
                            <div className="col-12 py-1">
                              <b className="text-success" style={{fontSize:'18px'}}>
                                {plan.discount != null ? plan.discount + "% " : ""}
                              </b>
                              {plan.discount != null ? <del>PKR {plan.price}</del> : ""}
                            </div>
                            <div className="col-12">
                              {plan.discount != null ? (
                                  <h2>PKR {(plan.price * plan.discount) / 100}</h2>
                              ) : (
                                  <h2>{plan.price}</h2>
                              )}
                            </div>
                            <div className="col-12">
                              PKR{" "}
                              {(
                                  (plan.price * plan.discount) /
                                  100 /
                                  plan.valid_til
                              ).toFixed(2)}{" "}
                              per month
                            </div>
                            <div className="col-12 py-1">
                              <a
                                  style={{padding: '5px 30px !important'}}
                                  className={"btn btn-light custom-btn custom-btn-"+index}
                                  data-bs-toggle="modal"
                                  data-bs-target={"#pricing-" + index}

                              >
                                Continue
                              </a>
                            </div>
                            <div className="col-12 py-1">
                              <div className="d-flex col-12">
                                {plan.messages !=  0  ? (
                                    <div className='d-flex col-12 py-1'>
                                      <div className="col-1 text-success ">✔</div>
                                      <div className="col-11 text-start">
                                        Send unlimited Messages
                                      </div>
                                    </div>
                                ) : (
                                    <div className='d-flex col-12 py-1'>
                                      <div className="col-1"></div>
                                      <div className="col-11 text-start">
                                        <del>Send unlimited Messages </del>
                                      </div>
                                    </div>
                                )}
                              </div>
                            </div>
                            <div className="col-12 py-1">
                              <div className="d-flex col-12">
                                {plan.view_contacts !=  0  ? (
                                    <div className='d-flex col-12 py-1'>
                                      <div className="col-1 text-success">✔</div>
                                      <div className="col-11 text-start">
                                        View upto 75 Contact Numbers
                                      </div>
                                    </div>
                                ) : (
                                    <div className='d-flex col-12 py-1'>
                                      <div className="col-1"></div>
                                      <div className="col-11 text-start">
                                        <del> View upto 75 Contact Numbers </del>
                                      </div>
                                    </div>
                                )}
                              </div>
                            </div>
                            <div className="col-12 py-1">
                              <div className="d-flex col-12">
                                {plan.standout_profile !=  0  ? (
                                    <div className='d-flex col-12 py-1'>
                                      <div className="col-1 text-success">✔</div>
                                      <div className="col-11 text-start">
                                        Standout from other Profiles
                                      </div>
                                    </div>
                                ) : (
                                    <div className='d-flex col-12 py-1'>
                                      <div className="col-1"></div>
                                      <div className="col-11 text-start">
                                        <del>Standout from other Profiles </del>
                                      </div>
                                    </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                            className="modal fade"
                            id={"pricing-"+index}
                            tabIndex="-1"
                            aria-labelledby={"pricing-"+index}
                            aria-hidden="true"
                        >
                          <div className="modal-dialog modal-dialog-scrollable modal-fullscreen" >
                            <div className="modal-content clearfix" style={{background:'#dfdede'}}>
                              <h4
                                  className="modal-title title divider-3 text-dark"
                                  id={"pricing-"+index}
                              >
                              </h4>
                              <div className="modal-body ">
                                <a
                                    className="rounded-sm animated right-icn"
                                    data-bs-dismiss="modal"
                                >
                                      <span className="display-5" style={{color:"D63583"}}>
                                        🔙
                                      </span>
                                </a>
                                <div className="justify-content-center px-5 row">
                                  <div className="display-6 text-dark text-center col">
                                    <b>{plan.name}</b>
                                  </div>
                                </div>

                                <div className="row px-5 justify-content-center">

                                  <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                                    <div className="p-5">
                                      <img
                                          className="img-fluid mt-3 mb-2 offset-sm-0 offset-4"
                                          src={window.location.origin + "/images/bank/allied.png"}

                                      /></div>

                                    <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(47, 70, 175, 1) 0%, rgba(9, 23, 80, 1) 100%)"}}>
                                      <div className="p-5">
                                        <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                        <div className="display-8 py-1 text-light">
                                          <div className="col d-flex p-0 m-0">
                                            <b >Branch Code: </b> <p className="text-end col m-0">047 KHAYBAN E JANAH LHR</p>
                                          </div>
                                          <hr className="m-2"/>
                                        </div>
                                        <div className="display-8 py-1 text-light">
                                          <div className="col d-flex p-0 m-0">
                                            <b >Account No: </b> <p className="text-end col m-0">04770010047772550010</p>
                                          </div>
                                          <hr className="m-2"/>
                                        </div>
                                        <div className="display-8 py-1 text-light">
                                          <div className="col d-flex p-0 m-0">
                                            <b >IBAN: </b> <p className="text-end col m-0">PK56ABPA04770010047772550010<br/>&nbsp;</p>
                                          </div>
                                          <hr className="m-2"/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                                    <div className="px-5">
                                      <img
                                          className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                          src={window.location.origin + "/images/bank/jazzCash.png"}

                                      /></div>

                                    <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(157, 35, 35, 1) 0%, rgba(91, 1, 3, 1) 100%)"}}>
                                      <div className="p-5">
                                        <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                        <div className="display-8 py-1 text-light">
                                          <div className="col d-flex p-0 m-0">
                                            <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                          </div>
                                          <hr className="m-2"/>
                                        </div>
                                        <div className="display-8 py-1 text-light">
                                          <div className="col d-flex p-0 m-0">
                                            <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                          </div>
                                          <hr className="m-2"/>
                                        </div>
                                        <div className="display-8 py-1 text-light">
                                          <div className="col d-flex p-0 m-0">
                                            <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                          </div>
                                          <hr className="m-2"/>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                                    <div className="p-5">
                                    <img
                                        className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                        src={window.location.origin + "/images/bank/easyPaisa.png"}

                                    /></div>

                                    <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(74, 164, 77, 1) 0%, rgba(1, 91, 11, 1) 100%)"}}>
                                      <div className="p-5">
                                        <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                        <div className="display-8 py-1 text-light">
                                          <div className="col d-flex p-0 m-0">
                                            <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                          </div>
                                          <hr className="m-2"/>
                                        </div>
                                        <div className="display-8 py-1 text-light">
                                          <div className="col d-flex p-0 m-0">
                                            <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                          </div>
                                          <hr className="m-2"/>
                                        </div>
                                        <div className="display-8 py-1 text-light">
                                          <div className="col d-flex p-0 m-0">
                                            <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                          </div>
                                          <hr className="m-2"/>
                                        </div>
                                      </div>
                                  </div>
                                </div>
                              </div>

                                <div className="row mt-5 justify-content-center">
                                  <div className="col-6 p-5  rounded bg-white">
                                    <div className="d-flex">
                                      <div className="col">
                                        <h3 style={{color:"#D63583"}}>{plan.name}</h3>
                                      </div>
                                      <div className="col text-end">
                                      <> {plan.discount != null ? (
                                          <h4 className="text-dark">PKR {(plan.price * plan.discount) / 100}</h4>
                                      ) : (
                                          <h4 className="text-dark">{plan.price}</h4>
                                      )}</>
                                    </div>
                                    </div>
                                    <hr/>
                                    <div className="d-block">
                                      <p><b>Note: </b>Once you choose the desired Package then kindly pay the dues of selected Package at the above mentioned account number and send the recipt of the payment to the whatsapp by clicking on the whatsapp icon which is showing below.</p>
                                      <div className="justify-content-center d-flex">

                                          <a className="col-2"  href="https://api.whatsapp.com/send?phone=923040227000&text=Hello this is the starting message">
                                            <img
                                                className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                                src={window.location.origin + "/images/whatsapp.svg"}
                                            />
                                          </a>

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </>
                  ))}
                </div>
                <hr/>
                <div className="d-sm-flex d-none col-12 justify-content-center  pt-5 container-fluid">
                  <div className=" col child">
                    <div className="shadow text-dark rounded bg-white text-center p-2 m-1 pb-2">
                      <div className="col">
                        <img  src={
                            window.location.origin +
                            "/images/packages/silver.png"
                        } className="img-fluid"/>
                      </div>
                      <div className="col-12 pt-3 name-">
                        <h6>Basic Package</h6>
                      </div>
                      <div className="col-12 pt-1">&nbsp;</div>
                      <div className="col-12 py-1">
                        <b className="text-success" style={{fontSize:'18px'}}>
                          Registration:
                          <br/>
                        20,000 PKR</b><br/>
                      </div>
                      <div className="col-12"  style={{fontSize:'18px'}}>

                        <b>Success Fee:</b><br/> <span className="text-success text-justify">60,000 PKR</span> after successful match
                      </div>
                      <div className="col-12">

                      </div>
                      <div className="col-12 py-1">
                        <a
                            style={{padding: '5px 30px !important'}}
                            className="btn btn-light custom-btn custom-btn" data-bs-toggle="modal"
                            data-bs-target="#pricing-card-0"
                        >
                          Continue
                        </a>
                      </div>
                      <div className="col-12 py-1">
                        <div className="d-flex col-12">
                          <div className='d-flex col-12 py-1'>
                            <div className="col text-justify d-flex justify-content-center flex-column p-1" style={{height:'40vh'}}>
                              <>Suitable for Normal Families And no Pictures this Room only details No discount this Plan </>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col child">
                    <div className="shadow text-dark rounded bg-white text-center p-2 m-1 pb-2">
                      <div className="col">
                        <img  src={
                            window.location.origin +
                            "/images/packages/gold.png"
                        } className="img-fluid"/>
                      </div>
                      <div className="col-12 pt-3 name-">
                        <h6>Standard Package</h6>
                      </div>
                      <div className="col-12 pt-1">&nbsp;</div>
                      <div className="col-12 py-1">
                        <b className="text-success" style={{fontSize:'18px'}}>
                          Registration:
                          <br/>
                        20,000 PKR</b>
                        <br/>
                      </div>
                      <div className="col-12" style={{fontSize:'18px'}}>

                        <b>Success Fee:</b><br/> <span className="text-success text-justify">100,000 PKR</span> after successful match
                      </div>
                      <div className="col-12">

                      </div>
                      <div className="col-12 py-1">
                        <a
                            style={{padding: '5px 30px !important'}}
                            className="btn btn-light custom-btn custom-btn" data-bs-toggle="modal"
                            data-bs-target="#pricing-card-1"
                        >
                          Continue
                        </a>
                      </div>
                      <div className="col-12 py-1">
                        <div className="d-flex col-12">
                          <div className='d-flex col-12 py-1'>
                            <div className="col text-justify d-flex justify-content-center flex-column p-1" style={{height:'40vh'}}>
                              <>Suitable for Professional Degree Holders,Online Service 60% Off </>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col child">
                    <div className="shadow text-dark rounded bg-white text-center p-2 m-1 pb-2">
                      <div className="col">
                        <img  src={
                            window.location.origin +
                            "/images/packages/platinum.png"
                        } className="img-fluid"/>
                      </div>
                      <div className="col-12 pt-3 name-">
                        <h6>Super Standard</h6>
                      </div>
                      <div className="col-12 pt-1">&nbsp;</div>
                      <div className="col-12 py-1">
                        <b className="text-success" style={{fontSize:'18px'}}>
                          Registration:
                          <br/>
                          50,000 PKR</b>
                        <br/>
                      </div>
                      <div className="col-12" style={{fontSize:'18px'}}>

                        <b>Success Fee:</b><br/> <span className="text-success text-justify">250,000 PKR</span> after successful match
                      </div>
                      <div className="col-12">

                      </div>
                      <div className="col-12 py-1">
                        <a
                            style={{padding: '5px 30px !important'}}
                            className="btn btn-light custom-btn custom-btn"data-bs-toggle="modal"
                            data-bs-target="#pricing-card-2"
                        >
                          Continue
                        </a>
                      </div>
                      <div className="col-12 py-1">
                        <div className="d-flex col-12">
                          <div className='d-flex col-12 py-1'>
                            <div className="col text-justify d-flex justify-content-center flex-column p-1" style={{height:'40vh'}}>
                              <>Suitable for Doctors, Engineers, Gulf Country Residents and Small Businesses Owners MBBS, BDS CA ACCA Good Looking Matches Online Service 60% Off</>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col child">
                    <div className="shadow text-dark rounded bg-white text-center p-2 m-1 pb-2">
                      <div className="col">
                        <img  src={
                            window.location.origin +
                            "/images/packages/diamond.png"
                        } className="img-fluid"/>
                      </div>
                      <div className="col-12 pt-3 name-">
                        <h6>Elite Package</h6>
                      </div>
                      <div className="col-12 pt-1">&nbsp;</div>
                      <div className="col-12 py-1">
                        <b className="text-success" style={{fontSize:'18px'}}>
                          Registration:
                          <br/>
                          50,000 PKR</b>
                        <br/>
                      </div>
                      <div className="col-12" style={{fontSize:'18px'}}>

                        <b>Success Fee:</b> <br/><span className="text-success text-justify">350,000 PKR</span> after successful match
                      </div>
                      <div className="col-12">

                      </div>
                      <div className="col-12 py-1">
                        <a
                            style={{padding: '5px 30px !important'}}
                            className="btn btn-light custom-btn custom-btn"data-bs-toggle="modal"
                            data-bs-target="#pricing-card-3"
                        >
                          Continue
                        </a>
                      </div>
                      <div className="col-12 py-1">
                        <div className="d-flex col-12">
                          <div className='d-flex col-12 py-1'>
                            <div className="col text-justify d-flex justify-content-center flex-column p-1" style={{height:'40vh'}}>
                              <>Suitable for Factory Owners Land Lords and Business Class/ CSP Officer & Special Demands Online Service 60% Off </>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" col child">
                    <div className="shadow text-dark rounded bg-white text-center p-2 m-1 pb-2">
                      <div className="col">
                        <img  src={
                            window.location.origin +
                            "/images/packages/super_elit.png"
                        } className="img-fluid"/>
                      </div>
                      <div className="col-12 pt-3 name-">
                        <h6>Super Elite Package</h6>
                      </div>
                      <div className="col-12 pt-1">&nbsp;</div>
                      <div className="col-12 py-1">
                        <b className="text-success" style={{fontSize:'18px'}}>
                          Registration:
                          <br/>
                          30% Advance</b>
                        <br/>
                      </div>
                      <div className="col-12" style={{fontSize:'18px'}}>

                        <b>Success Fee:</b><br/> <span className="text-success text-justify">6 lac Married person want Second Marriage Depend On Case</span> after successful match
                      </div>
                      <div className="col-12">

                      </div>
                      <div className="col-12 py-1">
                        <a
                            style={{padding: '5px 30px !important'}}
                            className="btn btn-light custom-btn custom-btn"data-bs-toggle="modal"
                            data-bs-target="#pricing-card-4"
                        >
                          Continue
                        </a>
                      </div>
                      <div className="col-12 py-1">
                        <div className="d-flex col-12">
                          <div className='d-flex col-12 py-1'>

                            <div className="col text-justify d-flex justify-content-center flex-column p-1" style={{height:'31vh'}} >
                              <>Who Well Known Elite Families, Luxurious Doctors, Brand Owners and Special Task Extra ordinary options Who Want Abroad Proposals USMLE PLAB AMC For Girls Proposal /10k$ </>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id={"pricing-card-0"}
                    tabIndex="-1"
                    aria-labelledby={"pricing-card-0"}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-scrollable modal-fullscreen" >
                      <div className="modal-content clearfix" style={{background:'#dfdede'}}>
                        <h4
                            className="modal-title title divider-3 text-dark"
                            id={"pricing-card-0"}
                        >
                        </h4>
                        <div className="modal-body ">
                          <a
                              className="rounded-sm animated right-icn"
                              data-bs-dismiss="modal"
                          >
                            <span className="display-5" style={{color:"D63583"}}>
                              🔙
                            </span>
                          </a>
                          <div className="justify-content-center px-5 row">
                            <div className="display-6 text-dark text-center col">
                              <b>Basic Package</b>
                            </div>
                          </div>

                          <div className="row px-5 justify-content-center">

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="p-5">
                                <img
                                    className="img-fluid mt-3 mb-2 offset-sm-0 offset-4"
                                    src={window.location.origin + "/images/bank/allied.png"}

                                /></div>
                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(47, 70, 175, 1) 0%, rgba(9, 23, 80, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Branch Code: </b> <p className="text-end col m-0">047 KHAYBAN E JANAH LHR</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">04770010047772550010</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >IBAN: </b> <p className="text-end col m-0">PK56ABPA04770010047772550010<br/>&nbsp;</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="px-5">
                                <img
                                    className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                    src={window.location.origin + "/images/bank/jazzCash.png"}
                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(157, 35, 35, 1) 0%, rgba(91, 1, 3, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="p-5">
                                <img
                                  className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                  src={window.location.origin + "/images/bank/easyPaisa.png"}
                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(74, 164, 77, 1) 0%, rgba(1, 91, 11, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-5 justify-content-center">
                            <div className="col-6 p-5  rounded bg-white">
                              <div className="d-flex">
                                <div className="col">
                                  <h3 style={{color:"#D63583"}}>Basic Package</h3>
                                </div>
                                <div className="col text-end">

                                  <h4 className="text-dark">PKR 20,000</h4>

                                  </div>
                              </div>
                              <hr/>
                              <div className="d-block">
                                <p><b>Note: </b>Once you choose the desired Package then kindly pay the dues of selected Package at the above mentioned account number and send the recipt of the payment to the whatsapp by clicking on the whatsapp icon which is showing below.</p>
                                <div className="justify-content-center d-flex">

                                  <a className="col-2"  href="https://api.whatsapp.com/send?phone=923040227000&text=Hello this is the starting message">
                                    <img
                                        className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                        src={window.location.origin + "/images/whatsapp.svg"}
                                    />
                                  </a>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div
                      className="modal fade"
                      id={"pricing-card-1"}
                      tabIndex="-1"
                      aria-labelledby={"pricing-card-1"}
                      aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-scrollable modal-fullscreen" >
                      <div className="modal-content clearfix" style={{background:'#dfdede'}}>
                        <h4
                            className="modal-title title divider-3 text-dark"
                            id={"pricing-card-1"}
                        >
                        </h4>
                        <div className="modal-body ">
                          <a
                              className="rounded-sm animated right-icn"
                              data-bs-dismiss="modal"
                          >
                            <span className="display-5" style={{color:"D63583"}}>
                              🔙
                            </span>
                          </a>
                          <div className="justify-content-center px-5 row">
                            <div className="display-6 text-dark text-center col">
                              <b>Standard Package</b>
                            </div>
                          </div>

                          <div className="row px-5 justify-content-center">

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="p-5">
                                <img
                                    className="img-fluid mt-3 mb-2 offset-sm-0 offset-4"
                                    src={window.location.origin + "/images/bank/allied.png"}

                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(47, 70, 175, 1) 0%, rgba(9, 23, 80, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Branch Code: </b> <p className="text-end col m-0">047 KHAYBAN E JANAH LHR</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">04770010047772550010</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >IBAN: </b> <p className="text-end col m-0">PK56ABPA04770010047772550010<br/>&nbsp;</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="px-5">
                                <img
                                    className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                    src={window.location.origin + "/images/bank/jazzCash.png"}
                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(157, 35, 35, 1) 0%, rgba(91, 1, 3, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="p-5">
                                <img
                                    className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                    src={window.location.origin + "/images/bank/easyPaisa.png"}

                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(74, 164, 77, 1) 0%, rgba(1, 91, 11, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-5 justify-content-center">
                            <div className="col-6 p-5  rounded bg-white">
                              <div className="d-flex">
                                <div className="col">
                                  <h3 style={{color:"#D63583"}}>Standard Package</h3>
                                </div>
                                <div className="col text-end">

                                <h4 className="text-dark">PKR 20,000</h4>

                                </div>
                              </div>
                              <hr/>
                              <div className="d-block">
                                <p><b>Note: </b>Once you choose the desired Package then kindly pay the dues of selected Package at the above mentioned account number and send the recipt of the payment to the whatsapp by clicking on the whatsapp icon which is showing below.</p>
                                <div className="justify-content-center d-flex">

                                  <a className="col-2"  href="https://api.whatsapp.com/send?phone=923040227000&text=Hello this is the starting message">
                                    <img
                                        className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                        src={window.location.origin + "/images/whatsapp.svg"}
                                    />
                                  </a>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div
                      className="modal fade"
                      id={"pricing-card-2"}
                      tabIndex="-1"
                      aria-labelledby={"pricing-card-2"}
                      aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-scrollable modal-fullscreen" >
                      <div className="modal-content clearfix" style={{background:'#dfdede'}}>
                        <h4
                            className="modal-title title divider-3 text-dark"
                            id={"pricing-card-2"}
                        >
                        </h4>
                        <div className="modal-body ">
                          <a
                              className="rounded-sm animated right-icn"
                              data-bs-dismiss="modal"
                          >
                            <span className="display-5" style={{color:"D63583"}}>
                              🔙
                            </span>
                          </a>
                          <div className="justify-content-center px-5 row">
                            <div className="display-6 text-dark text-center col">
                              <b>Super Standard</b>
                            </div>
                          </div>

                          <div className="row px-5 justify-content-center">

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="p-5">
                                <img
                                    className="img-fluid mt-3 mb-2 offset-sm-0 offset-4"
                                    src={window.location.origin + "/images/bank/allied.png"}

                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(47, 70, 175, 1) 0%, rgba(9, 23, 80, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Branch Code: </b> <p className="text-end col m-0">047 KHAYBAN E JANAH LHR</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">04770010047772550010</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >IBAN: </b> <p className="text-end col m-0">PK56ABPA04770010047772550010<br/>&nbsp;</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="px-5">
                                <img
                                    className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                    src={window.location.origin + "/images/bank/jazzCash.png"}
                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(157, 35, 35, 1) 0%, rgba(91, 1, 3, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="p-5">
                                <img
                                    className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                    src={window.location.origin + "/images/bank/easyPaisa.png"}

                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(74, 164, 77, 1) 0%, rgba(1, 91, 11, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-5 justify-content-center">
                            <div className="col-6 p-5  rounded bg-white">
                              <div className="d-flex">
                                <div className="col">
                                  <h3 style={{color:"#D63583"}}>Super Standard</h3>
                                </div>
                                <div className="col text-end">

                                  <h4 className="text-dark">PKR 50,000</h4>

                                </div>
                              </div>
                              <hr/>
                              <div className="d-block">
                                <p><b>Note: </b>Once you choose the desired Package then kindly pay the dues of selected Package at the above mentioned account number and send the recipt of the payment to the whatsapp by clicking on the whatsapp icon which is showing below.</p>
                                <div className="justify-content-center d-flex">

                                  <a className="col-2"  href="https://api.whatsapp.com/send?phone=923040227000&text=Hello this is the starting message">
                                    <img
                                        className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                        src={window.location.origin + "/images/whatsapp.svg"}
                                    />
                                  </a>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div
                      className="modal fade"
                      id={"pricing-card-3"}
                      tabIndex="-1"
                      aria-labelledby={"pricing-card-3"}
                      aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-scrollable modal-fullscreen" >
                      <div className="modal-content clearfix" style={{background:'#dfdede'}}>
                        <h4
                            className="modal-title title divider-3 text-dark"
                            id={"pricing-card-3"}
                        >
                        </h4>
                        <div className="modal-body ">
                          <a
                              className="rounded-sm animated right-icn"
                              data-bs-dismiss="modal"
                          >
                            <span className="display-5" style={{color:"D63583"}}>
                              🔙
                            </span>
                          </a>
                          <div className="justify-content-center px-5 row">
                            <div className="display-6 text-dark text-center col">
                              <b>Elite Package</b>
                            </div>
                          </div>

                          <div className="row px-5 justify-content-center">

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="p-5">
                                <img
                                    className="img-fluid mt-3 mb-2 offset-sm-0 offset-4"
                                    src={window.location.origin + "/images/bank/allied.png"}

                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(47, 70, 175, 1) 0%, rgba(9, 23, 80, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Branch Code: </b> <p className="text-end col m-0">047 KHAYBAN E JANAH LHR</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">04770010047772550010</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >IBAN: </b> <p className="text-end col m-0">PK56ABPA04770010047772550010<br/>&nbsp;</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="px-5">
                                <img
                                    className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                    src={window.location.origin + "/images/bank/jazzCash.png"}
                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(157, 35, 35, 1) 0%, rgba(91, 1, 3, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="p-5">
                                <img
                                    className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                    src={window.location.origin + "/images/bank/easyPaisa.png"}

                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(74, 164, 77, 1) 0%, rgba(1, 91, 11, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-5 justify-content-center">
                            <div className="col-6 p-5  rounded bg-white">
                              <div className="d-flex">
                                <div className="col">
                                  <h3 style={{color:"#D63583"}}>Elite Package</h3>
                                </div>
                                <div className="col text-end">

                                  <h4 className="text-dark">PKR 50,000</h4>

                                </div>
                              </div>
                              <hr/>
                              <div className="d-block">
                                <p><b>Note: </b>Once you choose the desired Package then kindly pay the dues of selected Package at the above mentioned account number and send the recipt of the payment to the whatsapp by clicking on the whatsapp icon which is showing below.</p>
                                <div className="justify-content-center d-flex">

                                  <a className="col-2"  href="https://api.whatsapp.com/send?phone=923040227000&text=Hello this is the starting message">
                                    <img
                                        className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                        src={window.location.origin + "/images/whatsapp.svg"}
                                    />
                                  </a>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div
                      className="modal fade"
                      id={"pricing-card-4"}
                      tabIndex="-1"
                      aria-labelledby={"pricing-card-4"}
                      aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-scrollable modal-fullscreen" >
                      <div className="modal-content clearfix" style={{background:'#dfdede'}}>
                        <h4
                            className="modal-title title divider-3 text-dark"
                            id={"pricing-card-4"}
                        >
                        </h4>
                        <div className="modal-body ">
                          <a
                              className="rounded-sm animated right-icn"
                              data-bs-dismiss="modal"
                          >
                            <span className="display-5" style={{color:"D63583"}}>
                              🔙
                            </span>
                          </a>
                          <div className="justify-content-center px-5 row">
                            <div className="display-6 text-dark text-center col">
                              <b>Super Elite Package</b>
                            </div>
                          </div>

                          <div className="row px-5 justify-content-center">

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="p-5">
                                <img
                                    className="img-fluid mt-3 mb-2 offset-sm-0 offset-4"
                                    src={window.location.origin + "/images/bank/allied.png"}

                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(47, 70, 175, 1) 0%, rgba(9, 23, 80, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Branch Code: </b> <p className="text-end col m-0">047 KHAYBAN E JANAH LHR</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">04770010047772550010</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >IBAN: </b> <p className="text-end col m-0">PK56ABPA04770010047772550010<br/>&nbsp;</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="px-5">
                                <img
                                    className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                    src={window.location.origin + "/images/bank/jazzCash.png"}
                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(157, 35, 35, 1) 0%, rgba(91, 1, 3, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white rounded shadow-lg col-3 m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                              <div className="p-5">
                                <img
                                    className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                    src={window.location.origin + "/images/bank/easyPaisa.png"}

                                /></div>

                              <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(74, 164, 77, 1) 0%, rgba(1, 91, 11, 1) 100%)"}}>
                                <div className="p-5">
                                  <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                  <div className="display-8 py-1 text-light">
                                    <div className="col d-flex p-0 m-0">
                                      <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                    </div>
                                    <hr className="m-2"/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="row mt-5 justify-content-center">
                            <div className="col-6 p-5  rounded bg-white">
                              <div className="d-flex">
                                <div className="col">
                                  <h3 style={{color:"#D63583"}}>Super Elite Package</h3>
                                </div>
                                <div className="col text-end">

                                  <h4 className="text-dark">PKR 220,000</h4>

                                </div>
                              </div>
                              <hr/>
                              <div className="d-block">
                                <p><b>Note: </b>Once you choose the desired Package then kindly pay the dues of selected Package at the above mentioned account number and send the recipt of the payment to the whatsapp by clicking on the whatsapp icon which is showing below. </p>
                                <div className="justify-content-center d-flex">

                                  <a className="col-2"  href="https://api.whatsapp.com/send?phone=923040227000&text=Hello this is the starting message">
                                    <img
                                        className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                        src={window.location.origin + "/images/whatsapp.svg"}
                                    />
                                  </a>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <section id="home-slider" className="fullscreen d-sm-none d-block">
                  <div
                      id="main-slider"
                      className="carousel slide"
                      data-bs-ride="carousel"
                  >
                    <div className="carousel-inner" style={{ height: "500px" }}>
                      {plans?.map((plan,key) => (
                          <>
                          <div className={"carousel-item h-50 p-4 " + (key==0?"active":"")}>
                            <div className="slider-content">
                              <div className="container mt-3">
                                <div className="row carousel-caption align-items-center h-100">
                                  <div className="shadow text-dark rounded bg-white text-center p-0 m-1 pb-2">
                                    <div className="col-12 pt-3">
                                      <h6>{plan.name} </h6>
                                    </div>
                                    <div className="col-12 pt-1">&nbsp;</div>
                                    <hr className="m-1" />
                                    <div className="col-12">
                                      <b className="text-success">
                                        {" "}
                                        {plan.discount != null
                                            ? plan.discount + "%"
                                            : ""}
                                      </b>
                                      {plan.discount != null ? (
                                          <del>PKR {plan.price}</del>
                                      ) : (
                                          ""
                                      )}
                                    </div>
                                    <div className="col-12">
                                      {plan.discount != null ? (
                                          <>PKR {(plan.price * plan.discount) / 100}</>
                                      ) : (
                                          <>{plan.price}</>
                                      )}
                                    </div>
                                    <div className="col-12">
                                      PKR{" "}
                                      {(
                                          (plan.price * plan.discount) /
                                          100 /
                                          plan.valid_til
                                      ).toFixed(2)}{" "}
                                      per month
                                    </div>
                                    <div className="col-12 p-1">
                                      <div className="d-flex px-2">
                                        {plan.messages !=  0  ? (
                                            <>
                                              <div className="col-1 text-success">
                                                ✔
                                              </div>
                                              <div className="col-11 text-start">
                                                Send unlimited Messages
                                              </div>
                                            </>
                                        ) : (
                                            <>
                                              <div className="col-1"></div>
                                              <div className="col-11 text-start">
                                                <del>Send unlimited Messages </del>
                                              </div>
                                            </>
                                        )}
                                      </div>
                                    </div>
                                    <div className="col-12 p-1">
                                      <div className="d-flex px-2">
                                        {plan.view_contacts !=  0  ? (
                                            <>
                                              <div className="col-1 text-success">
                                                ✔
                                              </div>
                                              <div className="col-11 text-start">
                                                View upto 75 Contact Numbers
                                              </div>
                                            </>
                                        ) : (
                                            <>
                                              <div className="col-1"></div>
                                              <div className="col-11 text-start">
                                                <del>
                                                  {" "}
                                                  View upto 75 Contact Numbers{" "}
                                                </del>
                                              </div>
                                            </>
                                        )}
                                      </div>
                                    </div>
                                    <div className="col-12 p-1">
                                      <div className="d-flex px-2">
                                        {plan.standout_profile !=  0  ? (
                                            <>
                                              <div className="col-1 text-success">
                                                ✔
                                              </div>
                                              <div className="col-11 text-start">
                                                Standout from other Profiles
                                              </div>
                                            </>
                                        ) : (
                                            <>
                                              <div className="col-1"></div>
                                              <div className="col-11 text-start">
                                                <del>Standout from other Profiles </del>
                                              </div>
                                            </>
                                        )}
                                      </div>
                                    </div>

                                    <div className="col-12 p-1">
                                      <a className="btn btn-outline"  data-bs-toggle="modal"
                                         data-bs-target={"#pricing-model-" + key} >
                                        Continue
                                      </a>
                                    </div>
                                  </div>
                                  <a
                                      className="left carousel-control"
                                      href="#main-slider"
                                      data-bs-slide="prev"
                                  >
                                    {" "}
                                  </a>{" "}
                                  <a
                                      className="right carousel-control"
                                      href="#main-slider"
                                      data-bs-slide="next"
                                  >
                                    {" "}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                            <div
                                className="modal fade"
                                id={"pricing-model-"+key}
                                tabIndex="-1"
                                aria-labelledby={"pricing-model-"+key}
                                aria-hidden="true"
                            >
                              <div className="modal-dialog modal-dialog-scrollable modal-fullscreen" >

                                <div className="modal-content clearfix" style={{background:'#dfdede'}}>
                                  <h4
                                      className="modal-title title divider-3 text-dark"
                                      id={"pricing-model-"+key}
                                  >
                                  </h4>
                                  <div className="modal-body ">
                                    <a
                                        className="rounded-sm animated right-icn"
                                        data-bs-dismiss="modal"
                                    >
                                      <span className="display-5" style={{color:"D63583"}}>
                                        🔙
                                      </span>
                                    </a>
                                    <div className="justify-content-center px-5 row">
                                      <div className="display-6 text-dark text-center col">
                                        <b>{plan.name}</b>
                                      </div>
                                    </div>

                                    <div className="  justify-content-center">

                                      <div className="bg-white rounded shadow-lg col m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                                        <div className="p-5">
                                          <img
                                              className="img-fluid mt-3 mb-2 "
                                              src={window.location.origin + "/images/bank/allied.png"}

                                          /></div>

                                        <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(47, 70, 175, 1) 0%, rgba(9, 23, 80, 1) 100%)"}}>
                                          <div className="p-5">
                                            <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                            <div className="display-8 py-1 text-light">
                                              <div className="col d-flex p-0 m-0">
                                                <b >Branch Code: </b> <p className="text-end col m-0">047 KHAYBAN E JANAH LHR</p>
                                              </div>
                                              <hr className="m-2"/>
                                            </div>
                                            <div className="display-8 py-1 text-light">
                                              <div className="col d-flex p-0 m-0">
                                                <b >Account No: </b> <p className="text-end col m-0">04770010047772550010</p>
                                              </div>
                                              <hr className="m-2"/>
                                            </div>
                                            <div className="display-8 py-1 text-light">
                                              <div className="col d-flex p-0 m-0">
                                                <b >IBAN: </b> <p className="text-end col m-0">PK56ABPA04770010047772550010<br/>&nbsp;</p>
                                              </div>
                                              <hr className="m-2"/>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="bg-white rounded shadow-lg col m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                                        <div className="px-5">
                                          <img
                                              className="img-fluid mb-2 "
                                              src={window.location.origin + "/images/bank/jazzCash.png"}

                                          /></div>

                                        <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(157, 35, 35, 1) 0%, rgba(91, 1, 3, 1) 100%)"}}>
                                          <div className="p-5">
                                            <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                            <div className="display-8 py-1 text-light">
                                              <div className="col d-flex p-0 m-0">
                                                <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                              </div>
                                              <hr className="m-2"/>
                                            </div>
                                            <div className="display-8 py-1 text-light">
                                              <div className="col d-flex p-0 m-0">
                                                <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                              </div>
                                              <hr className="m-2"/>
                                            </div>
                                            <div className="display-8 py-1 text-light">
                                              <div className="col d-flex p-0 m-0">
                                                <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                              </div>
                                              <hr className="m-2"/>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="bg-white rounded shadow-lg col m-2 h-100 p-0 d-flex flex-column justify-content-center" >
                                        <div className="p-5">
                                          <img
                                              className="img-fluid mb-2 m-0"
                                              src={window.location.origin + "/images/bank/easyPaisa.png"}

                                          /></div>

                                        <div style={{backgroundImage: "radial-gradient(farthest-corner at 50% 50%, rgba(74, 164, 77, 1) 0%, rgba(1, 91, 11, 1) 100%)"}}>
                                          <div className="p-5">
                                            <div className="display-7 py-5 text-light text-center"> <b>Account Details</b></div>
                                            <div className="display-8 py-1 text-light">
                                              <div className="col d-flex p-0 m-0">
                                                <b >Account Name: </b> <p className="text-end col m-0">Usman Zaheer</p>
                                              </div>
                                              <hr className="m-2"/>
                                            </div>
                                            <div className="display-8 py-1 text-light">
                                              <div className="col d-flex p-0 m-0">
                                                <b >Account No: </b> <p className="text-end col m-0">03040227000</p>
                                              </div>
                                              <hr className="m-2"/>
                                            </div>
                                            <div className="display-8 py-1 text-light">
                                              <div className="col d-flex p-0 m-0">
                                                <b >Address: </b> <p className="text-end col m-0">14 A C Block River View Lahore, <br/> Near Abdul Sattar Edhi Road</p>
                                              </div>
                                              <hr className="m-2"/>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="row mt-5 justify-content-center">
                                      <div className="col m-3 p-5 rounded bg-white">
                                        <div className="d-flex">
                                          <div className="col">
                                            <h3 style={{color:"#D63583"}}>{plan.name}</h3>
                                          </div>
                                          <div className="col text-end">
                                            <> {plan.discount != null ? (
                                                <h4 className="text-dark">PKR {(plan.price * plan.discount) / 100}</h4>
                                            ) : (
                                                <h4 className="text-dark">{plan.price}</h4>
                                            )}</>
                                          </div>
                                        </div>
                                        <hr/>
                                        <div className="d-block">
                                          <p><b>Note: </b>Once you choose the desired Package then kindly pay the dues of selected Package at the above mentioned account number and send the recipt of the payment to the whatsapp by clicking on the whatsapp icon which is showing below.</p>
                                          <div className="justify-content-center d-flex">

                                            <a className="col-2"  href="https://api.whatsapp.com/send?phone=923040227000&text=Hello this is the starting message">
                                              <img
                                                  className="img-fluid mb-2 offset-sm-0 offset-4 m-0"
                                                  src={window.location.origin + "/images/whatsapp.svg"}
                                              />
                                            </a>

                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                        </>
                      ))}

                    </div>
                  </div>
                </section>
              </div>
              <div className="container-fluid bg-grey">
                <div className="col-12 ">
                  <div className="col-12 text-center">
                    <h3 className="pt-5">
                      You have <b>Questions</b> We have <b>Answers</b>
                    </h3>
                  </div>

                  <div className="d-sm-flex d-none">
                    <div className="col-6">
                      <div
                          className="shadow bg-white rounded m-2 p-5"
                          style={{ height: "210px" }}
                      >
                        <div className="col-12">
                          <b>What are some of the benefits of Premium plans?</b>
                        </div>
                        <div className="col-12">
                          As a Premium member, you can chat unlimited with your
                          Matches, view their contact numbers and view hidden
                          photos. You also get Premium Assistance on priority. These
                          benefits will help you to accelerate your partner search.
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                          className="shadow bg-white rounded m-2 p-5"
                          style={{ height: "210px" }}
                      >
                        <div className="col-12">
                          <b>What offers and discounts can I avail?</b>
                        </div>
                        <div className="col-12">
                          We keep you informed from time to time whenever you are
                          eligible for different discounts and offers. Login
                          frequently to check and avail the best available offer.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-sm-flex d-none">
                    <div className="col-6">
                      <div
                          className="shadow bg-white rounded m-2 p-5"
                          style={{ height: "210px" }}
                      >
                        <div className="col-12">
                          <b> What payment options do you offer?</b>
                        </div>
                        <div className="col-12">
                          We offer direct bank transfer payment options. Choose
                          your preferred plan and sent the recipt by whatsapp and move forward to see the various
                          options available to you.
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div
                          className="shadow bg-white rounded m-2 p-5"
                          style={{ height: "210px" }}
                      >
                        <div className="col-12">
                          <b>How can I be safe on UrgentRishta.co?</b>
                        </div>
                        <div className="col-12">
                          We go to great lengths to make sure you get the best
                          possible experience here. Every single profile is screened
                          & your matches are tailored to your preferences. But if
                          you still have any unpleasant experience please do report
                          the same to us.
                        </div>
                      </div>
                    </div>
                  </div>
{/* 
                  <section class="space-pb">
                    <div class="container">
                      <div class="row justify-content-center">
                        <div class="col-lg-8 col-ms-10">
                          <div class="accordion accordion-style" id="accordion-Two">
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="headingOne">
                                <button
                                    class="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                  What are some of the benefits of Premium plans?{" "}
                                  <i class="fas fa-chevron-down fa-xs"></i>
                                </button>
                              </h2>
                              <div
                                  id="collapseOne"
                                  class="accordion-collapse collapse show"
                                  aria-labelledby="headingOne"
                                  data-bs-parent="#accordion-Two"
                              >
                                <div class="accordion-body">
                                  <p className="text-justify text-dark">
                                    As a Premium member, you can chat unlimited with
                                    your Matches, view their contact numbers and
                                    view hidden photos. You also get Premium
                                    Assistance on priority. These benefits will help
                                    you to accelerate your partner search
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item">
                              <h2 class="accordion-header" id="headingTwo">
                                <button
                                    class="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                  What offers and discounts can I avail?{" "}
                                  <i class="fas fa-chevron-down fa-xs"></i>
                                </button>
                              </h2>
                              <div
                                  id="collapseTwo"
                                  class="accordion-collapse collapse"
                                  aria-labelledby="headingTwo"
                                  data-bs-parent="#accordion-Two"
                              >
                                <div class="accordion-body">
                                  <p className="text-justify text-dark">
                                    {" "}
                                    We keep you informed from time to time whenever
                                    you are eligible for different discounts and
                                    offers. Login frequently to check and avail the
                                    best available offer.
                                  </p>
                                </div>
                              </div>
                              <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                  <button
                                      class="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapseThree"
                                      aria-expanded="false"
                                      aria-controls="collapseThree"
                                  >
                                    What payment options do you offer?{" "}
                                    <i class="fas fa-chevron-down fa-xs"></i>
                                  </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    class="accordion-collapse collapse"
                                    aria-labelledby="headingThree"
                                    data-bs-parent="#accordion-Two"
                                >
                                  <div class="accordion-body">
                                    <p className="text-justify text-dark">
                                      We offer multiple Online and Offline payment
                                      options for you to pick and choose from based
                                      on your location. Choose your preferred plan
                                      and move forward to see the various options
                                      available to you.
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div class="accordion-item">
                                <h2 class="accordion-header" id="headingfive">
                                  <button
                                      class="accordion-button collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#collapsefive"
                                      aria-expanded="false"
                                      aria-controls="collapsefive"
                                  >
                                    How can I be safe on UrgentRishta.co?{" "}
                                    <i class="fas fa-chevron-down fa-xs"></i>
                                  </button>
                                </h2>
                                <div
                                    id="collapsefive"
                                    class="accordion-collapse collapse"
                                    aria-labelledby="headingfive"
                                    data-bs-parent="#accordion-Two"
                                >
                                  <div class="accordion-body">
                                    <p className="text-justify text-dark">
                                      We go to great lengths to make sure you get
                                      the best possible experience here. Every
                                      single profile is screened & your matches are
                                      tailored to your preferences. But if you still
                                      have any unpleasant experience please do
                                      report the same to us.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section> */}
                </div>
                <div className="col-12 text-center">
                  Didn't find what you are looking for? Find it on our{" "}
                  <Link to="#" className="text-primary">
                    Help Page
                  </Link>
                </div>
              </div>
            </>
        )}
      </Observer>
  );
};

export default Pricing;
