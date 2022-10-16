import React, {useContext, useEffect, useState} from 'react'
import { Observer } from "mobx-react-lite"
import {Carousel} from "react-responsive-carousel";
import {Link, useNavigate} from "react-router-dom";
import {StoreContext} from "../../../store";
import axios from "axios";
import {toast} from "react-toastify";


const RecievedRequest = () => {
    const [profileData, setProfiles] = useState();
    const [editFields, setEditFields] = useState(true);
    const navigate = useNavigate();
    const store = useContext(StoreContext);
    const [profile,setProfile] = useState()
    const handleToast = ()=>{
        toast.error('You are not member')
    }
    const fieldDisablity = () => {
        setEditFields(!editFields);
    };
    const requestAction = async (sender_id,status)=> {
        const token = localStorage.getItem("accessToken");
        const reqFormData = new FormData();
        reqFormData.append("status", status);

        reqFormData.append("sender_id", sender_id);
        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        };
        const response = await axios({
            method: "post",
            url: `${store.url}request-action`,
            headers: headers,
            data:reqFormData,
        }).then((response) => {
            const data = response.data;

            // setRequests([]);
            // if(requestsAction.length!=0){
            //     setRequestAction([]);
            // }

        });
    }
    async function filter() {
        const token = localStorage.getItem("accessToken");
        const user = localStorage.getItem("user");


        try {

            const response = await axios({
                method: "post",
                url: `${store.url}all-recieved-requests`,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {

                const data = response.data;

                setProfiles(data);

            });
        } catch (error) {
            console.log(error);
        }
    }
    async function profileView(viewed_id) {
        const token = localStorage.getItem("accessToken");
        const user = localStorage.getItem("user");
        const formData = new FormData();
        const viewer_id = JSON.parse(user)["id"];
        formData.append("viewer_id", viewer_id);
        formData.append("viewed_id", viewed_id);
        try {

            const response = await axios({
                method: "post",
                url: `${store.url}recent-visit`,
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            }).then((response) => {

                const data = response.data;
                navigate("/public/profile/" + viewed_id);
            });
        } catch (error) {
            console.log(error);
        }
    }
    const getProfile = async(access_token,user_id)=>{

        try {
            const userId = new FormData();
            userId.append("user_id", user_id)
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${access_token}`
            };
            const response =   await axios({
                method: "post",
                url: `${store.url}get-profile`,
                data: userId,
                headers: headers,
            }).then((response)=>{
                const data = response.data
                setProfile(data['data']['user'][0])
            })
        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('accessToken')
        const user = localStorage.getItem('user')
        getProfile(token,JSON.parse(user).id)
        filter();
    }, []);
    return (
        <Observer>
            {() => (
                <>
                    <div className="col">
                        {profileData?.map((data, index) => (
                            <>
                                <div
                                    className="employers-list mb-5 shadow rounded p-0 pt-sm-0 pt-5 "
                                >
                                    <div className="d-sm-none d-block pt-sm-0 pt-5">
                                        {" "}
                                        &nbsp;
                                        <br/> &nbsp;
                                        <br/>
                                    </div>

                                    {data.user.picture[0] != null ? (
                                        <>
                                            <div className="col-4 offset-sm-0 offset-4 pt-sm-0 pt-5 ">
                                                <Carousel showThumbs={false}>
                                                    {data?.user.picture.map((image) => (
                                                        <div>
                                                            <img
                                                                className="w-75 b-sm-radius d-sm-none d-block m-auto  pt-sm-0 pt-5"
                                                                style={
                                                                    data.pictures_settings == "visible" ||
                                                                    (data.pictures_settings == "premimum" &&
                                                                        data.user_subscription != null)
                                                                        ? {filter: "blur(0px)"}
                                                                        : {filter: "blur(8px)"}
                                                                }
                                                                src={store.mediaUrl + image?.image_path}
                                                                alt=""
                                                            />
                                                            <img
                                                                className="img-fluid b-sm-radius d-sm-block d-none"
                                                                style={
                                                                    data.pictures_settings == "visible" ||
                                                                    (data.pictures_settings == "premimum" &&
                                                                        data.user_subscription != null)
                                                                        ? {filter: "blur(0px)"}
                                                                        : {filter: "blur(8px)"}
                                                                }
                                                                src={store.mediaUrl + image?.image_path}
                                                                alt=""
                                                            />
                                                        </div>
                                                    ))}
                                                </Carousel>
                                            </div>
                                            <div className="d-block d-sm-none">
                                                <div className="text-sm-dark text-white m-auto">
                                                    No Photo Added
                                                </div>
                                                <button
                                                    id="submit"
                                                    name="submit"
                                                    type="submit"
                                                    value="Send"
                                                    className="button btn-lg btn-theme rouneded-sm animated right-icn mb-0"
                                                >
                              <span>
                                Request a Photo{" "}
                                  <i
                                      className="glyph-icon flaticon-hearts"
                                      aria-hidden="true"
                                  ></i>
                              </span>
                                                </button>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="col-4 offset-sm-0 offset-4 pt-sm-0 pt-5 ">
                                                <img
                                                    className="w-75 b-sm-radius d-sm-none d-block m-auto  pt-sm-0 pt-5"
                                                    src={
                                                        window.location.origin +
                                                        "/images/profile/default.png"
                                                    }
                                                    alt=""
                                                />
                                                <img
                                                    className="img-fluid b-sm-radius d-sm-block d-none"
                                                    src={
                                                        window.location.origin +
                                                        "/images/profile/default.png"
                                                    }
                                                    alt=""
                                                />
                                            </div>
                                            <div className="d-block d-sm-none">
                                                <div className="text-sm-dark text-white m-auto">
                                                    No Photo Added
                                                </div>
                                                <button
                                                    id="submit"
                                                    name="submit"
                                                    type="submit"
                                                    value="Send"
                                                    className="button btn-lg btn-theme rouneded-sm animated right-icn mb-0"
                                                >
                              <span>
                                Request a Photo
                                <i
                                    className="glyph-icon flaticon-hearts"
                                    aria-hidden="true"
                                ></i>
                              </span>
                                                </button>
                                            </div>
                                        </>
                                    )}

                                    <div className="col-sm-5 offset-12 p-2">
                                        <div className="col-12 d-flex">
                                            <div className="col-sm-8 col-12 d-flex">
                                                <div className="col-sm-7 col-6 text-start">
                                                    <h5 className="d-sm-block d-none">
                                <span style={{curser: 'pointer'}}
                                      onClick={() => {
                                          profileView(data.user_id);
                                      }}
                                >
                                  {data.user.first_name +
                                      " " +
                                      data.user.last_name}
                                </span>
                                                        {/* <Link to={"/public/profile/"+data.user_id}>{data.user.first_name+' '+data.user.last_name}</Link> */}
                                                    </h5>
                                                    <div
                                                        className="d-sm-none text-sm-dark text-white d-block"
                                                        style={{fontSize: "1.125rem"}}
                                                    >
                                <span
                                    onClick={() => {
                                        profileView(data.user_id);
                                    }}
                                >
                                  {data.user.first_name +
                                      " " +
                                      data.user.last_name}
                                </span>
                                                        {/* <Link to={"/public/profile/"+data.user_id}> a {data.user.first_name+' '+data.user.last_name}</Link> */}
                                                    </div>
                                                </div>
                                                <div className="col-1 d-sm-block d-none">
                                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                                </div>
                                                <div className="col-4 d-sm-block d-none">
                                                    <span className="badge bg-secondary">New</span>
                                                </div>
                                                <div
                                                    className="col-sm-3 text-sm-dark text-white col-6 d-sm-none d-block text-start">
                                                    <i className="fa fa-male" aria-hidden="true"></i>
                                                    <i className="fa fa-female" aria-hidden="true"></i>
                                                    You & Her
                                                </div>
                                            </div>
                                            <div className="col-4 d-sm-block d-none text-end text-dark">
                                                <div className="dropdown">
                                                    <a
                                                        className=" dropdown-toggle"
                                                        type="button"
                                                        id="dropdownMenuButton1"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    ></a>
                                                    <ul
                                                        className="dropdown-menu"
                                                        aria-labelledby="dropdownMenuButton1"
                                                    >
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Another action
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="dropdown-item" href="#">
                                                                Something else here
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 d-sm-flex d-none">
                                            <div className="col-6 "></div>
                                            <div className="dropdown">
                                                <a
                                                    className=" dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton1"
                                                    data-bs-toggle="dropdown"
                                                    aria-expanded="false"
                                                >
                                                    <i className="fa fa-male" aria-hidden="true"></i>
                                                    <i className="fa fa-female" aria-hidden="true"></i>
                                                    You & Her
                                                </a>
                                                <ul
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton1"
                                                >
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Another action
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a className="dropdown-item" href="#">
                                                            Something else here
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <hr className="col-12 m-2 d-sm-block d-none"/>
                                        <div className="col-12 d-block ">
                                            <div className="col-12 d-flex pt-1">
                                                <div className="col-6 text-start text-sm-white text-dark  ">
                                                    {data.age}/ {data.height}
                                                </div>
                                                <div className="col-6 text-start text-sm-white text-dark ">
                                                    {data.marital_status}
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex pt-1">
                                                <div className="col-6 text-start text-sm-white text-dark  ">
                                                    {data.religion == null ? "" : data.religion.name}
                                                </div>
                                                <div className="col-6 text-start text-sm-white text-dark ">
                                                    {data.cast == null ? "" : data.cast.name}
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex pt-1">
                                                <div className="col-6 text-start text-sm-white text-dark ">
                                                    {data.state == null ? "" : data.state.name}
                                                </div>
                                                <div className="col-6 text-start text-sm-white text-dark ">
                                                    {data.city == null ? "" : data.city.name}
                                                </div>
                                            </div>

                                            <div className="col-12 d-flex pt-1">
                                                <div className="col-6 d-sm-block d-none ">
                                                    {data.qualification}
                                                </div>
                                                <div className="col-6 d-sm-block d-none">
                                                    {data.job}
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex pt-1">
                                                About <br/>
                                                <div className="col-12 d-sm-block d-none "
                                                     style={{overflow: 'hidden', whiteSpace: 'nowrap'}}>
                                                    <br/>
                                                    {data.about}...See More

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr className="col-12 m-2 d-sm-none d-block"/>
                                    <div className="col-sm-3 d-sm-block d-none p-border text-center">
                                        <div className="h-100 b-left text-center text-sm-white text-dark">
                                            <div className="col-12 font-style-italic text-sm-white text-dark">
                                                Like This Profile
                                            </div>
                                            {data?.user?.friend_request != null ?

                                                <>
                                                    <div data-bs-toggle="modal"
                                                         data-bs-target={"#myMatches-" + index}
                                                         style={editFields ? {
                                                             display: "block",
                                                             textAlign: "center",
                                                             cursor: 'pointer',
                                                         } : {display: "none"}}>
                                                        <h1>
                                                            <i
                                                                className="fa fa-user text-success"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </h1>
                                                        Friend
                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div
                                                         style={editFields ? {
                                                             display: "block",
                                                             textAlign: "center",
                                                             cursor: 'pointer',
                                                         } : {display: "none"}}>
                                                        <h1>
                                                            <i
                                                                className="fa fa-check-circle text-success"
                                                                aria-hidden="true"
                                                            ></i>
                                                        </h1>
                                                        <div onClick={()=>{requestAction(data?.sender_id,'Rejected')}} id={"connection_btn" + index}>
                                                            Cancel
                                                        </div>
                                                        <div onClick={()=>{requestAction(data?.sender_id,'Accepted')}} id={"connection_btn" + index}>
                                                            Cancel
                                                        </div>
                                                    </div>
                                                </>
                                            }

                                            {data.user?.user_plan != null ?
                                                <>
                                                    <div className="col-12 text-center"
                                                         style={editFields ? {display: "none"} : {display: "block"}}>
                                                        {data.user?.user_plan.view_contacts != null ?
                                                            <>
                                                                <a href="Tel:923040227000"
                                                                   className="btn px-5 py-1 m-1 btn-white border rounded b-radius">
                                                                    <i className="fa fa-phone"
                                                                       aria-hidden="true"></i> Call
                                                                </a>
                                                            </>
                                                            :
                                                            <>
                                                                <a onClick={handleToast}
                                                                   className="btn px-5 py-1 m-1 btn-white border rounded b-radius">
                                                                    <i className="fa fa-phone"
                                                                       aria-hidden="true"></i> Call
                                                                </a>
                                                            </>}
                                                        {(data.user?.user_plan.view_contacts != null || data.user?.user_plan.messages != null) ? <>
                                                            <a
                                                                target="_blank"
                                                                href="https://api.whatsapp.com/send?phone=923040227000&text=Hello this is the starting message"
                                                                className="btn px-4 py-1 m-1 btn-success border rounded b-radius">
                                                                <i className="fa fa-whatsapp"
                                                                   aria-hidden="true"></i> Whatsapp
                                                            </a>
                                                        </> : <>
                                                            <a
                                                                href="#" onClick={handleToast}
                                                                className="btn px-4 py-1 m-1 btn-success border rounded b-radius">
                                                                <i className="fa fa-whatsapp"
                                                                   aria-hidden="true"></i> Whatsapp
                                                            </a>
                                                        </>}
                                                        {(data.user?.user_plan.messages != null) ? <>
                                                                <a className="btn px-5 py-1 m-1 btn-white border rounded b-radius">
                                                                    <i className="fa fa-comment"
                                                                       aria-hidden="true"></i> Chat
                                                                </a>
                                                            </> :
                                                            <>
                                                                <a
                                                                    onClick={handleToast}
                                                                    className="btn px-5 py-1 m-1 btn-white border rounded b-radius">
                                                                    <i className="fa fa-comment"
                                                                       aria-hidden="true"></i> Chat
                                                                </a>
                                                            </>}
                                                    </div>
                                                </>
                                                :
                                                <>
                                                </>
                                            }


                                        </div>
                                    </div>
                                    <div className="d-sm-none d-flex col-12">
                                        <div
                                            className="col-6 text-left col-8 d-flex flex-column justify-content-center">
                                            {" "}
                                            Like This Profile
                                        </div>
                                        <div className="col-6 d-flex">
                                            <div
                                                className="col-8 d-flex flex-column text-sm-white text-dark justify-content-center">
                                                Connect Now
                                            </div>
                                            <div className="col-2">
                                                <i
                                                    className="fa fa-check-circle text-success"
                                                    style={{fontSize: "2.5rem"}}
                                                    aria-hidden="true"
                                                ></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="modal fade"
                                    id={"myMatches-" + index}
                                    tabIndex="-1"
                                    aria-labelledby={"myMatches-" + index}
                                    aria-hidden="true"

                                >
                                    <div className="modal-dialog ">
                                        <div className="modal-content clearfix bg-content-sm">

                                            <h4
                                                className="modal-title title divider-3 text-dark"
                                                id={"myMatches-" + index}
                                            >
                                            </h4>
                                            <div className="modal-body ">
                                                <div className="card w-75 m-auto">
                                                    <div className="card-body text-dark col-12">
                                                        <div style={{textAlign: 'end'}}><i
                                                            className="fa fa-solid fa-lock"></i></div>
                                                        <div className="d-flex">
                                                            <div className="col-3">
                                                                {data.user.picture[0] == null ?

                                                                    <img
                                                                        src={process.env.PUBLIC_URL + "/images/thumbnail/thum-1.jpg"}
                                                                        alt=""
                                                                        className='border-radius-50' srcSet=""/>
                                                                    :
                                                                    <img
                                                                        src={store.mediaUrl + data?.user?.picture[0].image_path}
                                                                        alt=""
                                                                        style={data.pictures_settings == 'visible' || ((data?.pictures_settings == 'premimum') && (data?.user_subscription != null)) ? {filter: 'blur(0px)'} : {filter: 'blur(8px)'}}
                                                                        className='border-radius-50' srcSet=""/>
                                                                }
                                                            </div>
                                                            <div className="col">
                                                                <b>{data?.user.first_name}</b><br/>
                                                                <span>{data?.height}, {data?.qualification}, {data?.language}, {data?.country?.name} ,{data?.city?.name}</span>
                                                            </div>
                                                        </div>
                                                        <div className="d-block mt-3">
                                                            <strong> {profile?.user?.user_plan.length == 0 ? 'Phone: +0932-**** ***' : 'Phone: ' + data?.number}</strong>
                                                            <br/>
                                                            <strong>{profile?.user?.user_plan.length == 0 ? 'Email: ****@gmail.com' : 'Email: ' + data?.user?.email}</strong>
                                                        </div>
                                                        <hr style={{margin: '10px !important'}}/>
                                                        <b className="d-flex col-12">
                                                            <a href={profile?.user?.user_plan.length != 0 ? "https://api.whatsapp.com/send?phone=" + data?.number + "&text=Hello this is the starting message" : "#"}
                                                               className="col text-success" style={{fontSize: '15px'}}>
                                                                <i className="fa fa-whatsapp"
                                                                   aria-hidden="true"></i> Whatsapp
                                                            </a>
                                                            <span className="col text-primary"
                                                                  style={{fontSize: '15px'}}>
                                                            <i className="fa fa-comment" aria-hidden="true"></i> Chat
                                                            </span>
                                                            <a target="_blank"
                                                               href={"tel:" + profile?.user?.user_plan.length != 0 ? data?.number : "#"}
                                                               className="col text-danger" style={{fontSize: '15px'}}>
                                                                <i className="fa fa-phone" aria-hidden="true"></i> Call
                                                            </a>
                                                        </b>
                                                    </div>
                                                </div>

                                                <div className="text-center">
                                                    <Link
                                                        to='/pricing'
                                                        className="button  btn btn-theme rounded-sm animated right-icn pl-2"
                                                    >
                                                        View Plans
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </>
                        ))}


                    </div>
                </>
            )}
        </Observer>
    )
}

export default RecievedRequest