import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Observer } from "mobx-react-lite";
import "./assets/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { StoreContext } from "./../../../store";

const Pricing = () => {
  const store = useContext(StoreContext);
  const [plans, setPlans] = useState();
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
              <div className="offset-6 col-3">
                {/* <button className="btn text-white d-flex justify-content-center border btn-premimum">
                  Premimum Now
                </button> */}
                <Link to="/matches" className="btn text-white d-flex justify-content-center border btn-premimum">Skip</Link>
              </div>
            </div>
            <div className="col-12 text-center text-white pb-5">
              <div className="display-7 pt-2">
                Upgrade now & Get Premium benefits for upto
                <b> 4 weeks extra, FREE!</b>
              </div>
            </div>

            <div className="d-sm-flex d-none col-12 justify-content-center pt-5 ">
              {plans?.map((plan) => (
                <div className="col-2-5 ">
                  <div className="shadow text-dark rounded bg-white text-center p-0 m-1 pb-2">
                    <div className="col-12 pt-3">
                      <h6>{plan.name}</h6>
                    </div>
                    <div className="col-12 pt-1">&nbsp;</div>
                    <div className="col-12">
                      <b className="text-success">
                        {plan.discount != null ? plan.discount + "%" : ""}
                      </b>
                      {plan.discount != null ? <del>PKR {plan.price}</del> : ""}
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
                      <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=923324010410&text=Hello this is the starting message"
                      >
                        Continue
                      </a>
                      {/* <Link className="btn btn-outline" to="/matches">Continue</Link> */}
                    </div>
                    <div className="col-12 p-1">
                      <div className="d-flex">
                        {plan.messages !=  0  ? (
                          <>
                            <div className="col-1 text-success">✔</div>
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
                      <div className="d-flex">
                        {plan.view_contacts !=  0  ? (
                          <>
                            <div className="col-1 text-success">✔</div>
                            <div className="col-11 text-start">
                              View upto 75 Contact Numbers
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="col-1"></div>
                            <div className="col-11 text-start">
                              <del> View upto 75 Contact Numbers </del>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="col-12 p-1">
                      <div className="d-flex">
                        {plan.standout_profile !=  0  ? (
                          <>
                            <div className="col-1 text-success">✔</div>
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
                  </div>
                </div>
              ))}
            </div>
            <section id="home-slider" className="fullscreen d-sm-none d-block">
              <div
                id="main-slider"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner" style={{ height: "500px" }}>
                  {plans?.map((plan,key) => (
                    <div className={"carousel-item h-50 p-4" + (key==0?"active":"")}>
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
                                <Link className="btn btn-outline" to="/matches">
                                  Continue
                                </Link>
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
                  ))}
                  
                </div>
              </div>
            </section>
          </div>
          <div className="container-fluid bg-grey">
            <div
              className="col-12 text-center shadow bg-white rounded p-5"
              style={{ borderTop: "5px solid red" }}
            >
              <h4>Select Plan</h4>
              <div className="col-12 text-center">
                Experience Personalised Matchmaking starting at PKR 20,500
              </div>

              <Link class="btn btn-outline pt-2" to="/matches" role="button">
                {" "}
                View Plan{" "}
              </Link>
            </div>
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
                      We offer multiple Online and Offline payment options for
                      you to pick and choose from based on your location. Choose
                      your preferred plan and move forward to see the various
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
                      <b>How can I be safe on Shaadi.com?</b>
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
                              <p>
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
                              <p>
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
                                <p>
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
                                How can I be safe on Shaadi.com?{" "}
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
                                <p>
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
              </section>
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
