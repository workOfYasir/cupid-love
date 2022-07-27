
import React,{useState,useEffect,useContext} from 'react'
import { useNavigate } from "react-router-dom";
// import { navigate } from "@reach/router"
import { Link,useLocation } from "react-router-dom";
import axios from 'axios';
import { Observer } from "mobx-react-lite";
import { StoreContext } from "./../store";
import { isVisible } from '@testing-library/user-event/dist/utils';
import $ from "jquery";

const Header = () => {
    const store = useContext(StoreContext);
    const [isActive, setActive] = useState(false);
    const [country, setCountries] = useState();
    const [state, setStates] = useState();
    const [city, setCities] = useState();

    const location = useLocation();
    const navigate = useNavigate();
    const [religion, setReligions] = useState();
    const [sector, setSectors] = useState();

    const [formValue, setformValue] = React.useState({
        email: '',
        password: '',
        first_name:'',
        last_name:'',
        On_behalf:'',
        religion_id:'',
        sector_id:'',
        email:'',
        date_of_Birth_day:'',
        date_of_Birth_month:'',
        date_of_Birth_year:'',
        country:'',
        state:'',
        city:'',
      });
    
    const handleSubmitLogin = async(e) => {
        e.preventDefault()

        const loginFormData = new FormData();
        loginFormData.append("email", formValue.email)
        loginFormData.append("password", formValue.password)
      
        try {
          const response = await axios({
            method: "post",
            url: `${store.url}login`,
            data: loginFormData,
            headers: { "Content-Type": "multipart/form-data" },
           })  
           localStorage.setItem('accessToken', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
           setformValue({
            email:'',
            password:''
           })
           document.body.classList.remove('model-open');
           document.body.style.overflow='unset';
           document.body.style.paddingRight='0px';
        
           navigate('/pricing')
                
            
            
           
           console.log(response);
        } catch(error) {
          console.log(error)
        }
      }
    const handleChange = (event) => {
  
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
        if(event.target.name=='country' ){
          console.log(event.target.value);

          states(event.target.value)
  
        }else if(event.target.name=='state'){
          cities(event.target.value)
        }
      }
      const religions = async()=>{
        try {
   
            axios.get(`${store.url}get-religions`,{

         }).then((response)=>{
                const data = response.data.religions
                setReligions(data)
            })
          } catch(error) {
            console.log(error)
          }
      }
      const countries = async()=>{
        try {
      
            axios.get(`${store.url}get-countrys`,{
            
         }).then((response)=>{
                const data = response.data[0].countrys
                setCountries(data)
            })
          } catch(error) {
            console.log(error)
          }
      }

      // const states = async()=>{
      //   try {
      
      //       axios.get('${store.url}get-states',{
              
      //    }).then((response)=>{
      //           const data = response.data.states
      //           setStates(data)
      //       })
      //     } catch(error) {
      //       console.log(error)
      //     }
      // }

      const states = async(country_id)=>{
        try {
          console.log('in function',country_id);
          var statesFormData = new FormData();
          statesFormData.append('country_id', country_id); 
              axios({
                method: "post",
                url: `${store.url}get-states-by-country`,
                data: statesFormData,
                headers: { "Content-Type": "multipart/form-data" },
   
         }).then((response)=>{
                const data = response.data.states
                setStates(data)
            })
          } catch(error) {
            console.log(error)
          }
      }

      // const cities = async()=>{
      //   try {
      
      //       axios.get('${store.url}get-cities',{
              
      //    }).then((response)=>{
      //           const data = response.data.cities
      //           setCities(data)
      //       })
      //     } catch(error) {
      //       console.log(error)
      //     }
      // }

      const cities = async(state_id)=>{
        try {
          var citiesFormData = new FormData();
          citiesFormData.append('state_id', state_id); 
              axios({
                method: "post",
                url: `${store.url}get-cities-by-state`,
                data: citiesFormData,
                headers: { "Content-Type": "multipart/form-data" },
              
         }).then((response)=>{
                const data = response.data.cities
                setCities(data)
            })
          } catch(error) {
            console.log(error)
          }
      }

      const sectors = async()=>{
        try {
      
            axios.get(`${store.url}get-sectors`,{
         }).then((response)=>{
                const data = response.data.sectors
                setSectors(data)
            })
          } catch(error) {
            console.log(error)
          }
      }

      const handleSubmitRegister = async(e) => {
        e.preventDefault()

        const registerFormData = new FormData();

        registerFormData.append('userData[email]', formValue.email)
        registerFormData.append('userData[first_name]', formValue.first_name)
        registerFormData.append('userData[last_name]', formValue.last_name)
        registerFormData.append('userData[password]', formValue.password)
        registerFormData.append('userProfile[On_behalf]',formValue.On_behalf)
        // profileFormData.append('state',formValue.)
        // profileFormData.append('country',formValue.)
        // profileFormData.append('city',formValue.city)
        registerFormData.append('userProfile[date_of_Birth]',formValue.date_of_Birth_year+'-'+formValue.date_of_Birth_month+'-'+formValue.date_of_Birth_day)
        registerFormData.append('userProfile[sector_id]',formValue.sector_id)    
        registerFormData.append('userProfile[religion_id]',formValue.religion_id)
        registerFormData.append('userProfile[country_id]',formValue.country)   
        registerFormData.append('userProfile[state_id]',formValue.state)   
        registerFormData.append('userProfile[city_id]',formValue.city)   
// console.log(registerFormData,formValue);
        try {
          const loginResponse = await axios({
            method: "post",
            url: `${store.url}register`,
            data: registerFormData,
            headers: { "Content-Type": "multipart/form-data" },
           })  
           localStorage.setItem('accessToken', loginResponse.data.token);
           localStorage.setItem('user', JSON.stringify(loginResponse.data.user));
           setformValue({
            email:'',
            password:'',
            first_name:'',
            last_name:'',
            On_behalf:'',
            religion_id:'',
            sector_id:'',
            email:'',
            date_of_Birth_day:'',
            date_of_Birth_month:'',
            date_of_Birth_year:'',
            country:'',
            state:'',
            city:'',
           })
           document.body.classList.remove('model-open');
           document.body.style.overflow='unset';
           document.body.style.paddingRight='0px';
        
           navigate('/createProfile')
        } catch(error) {
          console.log(error)
        }
      }
      useEffect(() => {

        console.log(formValue);
        const token = localStorage.getItem('accessToken')

        countries();
        sectors();
        religions();
    }, []);
      return (
        <Observer>
            {() => (
            <>
            <header id="header" className="dark">
            
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <form onSubmit={handleSubmitLogin}>
                <div className="modal-content login-1-form clearfix text-center">

                <h4 className="modal-title title divider-3 text-dark" id="exampleModalLabel">Sign In</h4>

                <div className="modal-body">
                <div className="">


                <div className="row">
                <div className="section-field mb-3 ">
                <div className="field-widget d-inline-flex"> <i className="glyph-icon flaticon-user p-1"></i>
                <input id="name" className="web form-control" type="text" placeholder="User name" name="email"  value={formValue.email} onChange={handleChange}/>
                </div>
                </div>
                </div>
                <div className="row">
                <div className="section-field mb-3 ">
                <div className="field-widget d-inline-flex"> <i className="glyph-icon flaticon-padlock p-1"></i>
                <input id="Password" className="Password form-control" type="password" placeholder="Password" name="password"  value={formValue.password} onChange={handleChange}/>
                </div>
                </div>
                </div>
                <div className="section-field text-uppercase"> <a href="#" className="float-end text-white">Forgot Password?</a> </div>
                <div className="clearfix"></div>

                <div className="clearfix"></div>

                </div>
                </div>
                <div className="modal-footer">
                <div className="col-12 text-center">

                <div className="section-field text-uppercase col-12  "> <a className="button  btn btn-theme rounded-sm animated right-icn" data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> 
                <button type='submit' className="button  btn btn-theme rounded-sm animated right-icn pl-2">sign in</button>
                {/* <Link to='/pricing' className="button  btn btn-theme rounded-sm animated right-icn pl-2"data-bs-dismiss="modal"><span>sign in<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></Link> */}
                </div>
                
                </div>


                </div>
                </div>
                </form>
                </div>
                </div>

                <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content login-1-form clearfix text-center">

                        <h4 className="modal-title title divider-2 text-dark" id="exampleModalLabel">Sign Up</h4>

                        <div className="modal-body">
                        <div className="step-forms">
          
                        <form method="post" onSubmit={handleSubmitRegister} className="text-center mt-3">
                            <input type="hidden" name='password' value='test123' />
                            <div className={(isActive) ? 'row ref-1 d-none': 'row ref-1  justify-content-center d-block'} id="step-1">
                                <div className="col-md-12">
                                <h4 className="title text-dark divider-3 mb-5">Profile</h4>
                                    <div className="row justify-content-center">
                                        <div className="col-md-12 text-start">
                                        <div className="mb-3">
                                        <label className="form-label">Profile For</label>
                                        <select className="form-select" name="On_behalf" aria-label="Default select example"  value={formValue.On_behalf} onChange={handleChange} id="">
                                        <option>Select one</option>
                                        <option value="Myself">Myself</option>
                                        <option value="Son">Son</option>
                                        <option value="Daughter">Daughter</option>
                                        <option value="Sister">Sister</option>
                                        <option value="Brother">Brother</option>
                                        </select>
                                        </div>
                                        <div className="row mb-3">
                                        <label htmlFor="exampleInput">First Name</label>
                                        <div className="form-group">

                                        <input type="text" name="first_name" value={formValue.first_name} onChange={handleChange} className="form-control p-2 form-field" id="exampleInput" placeholder="Enter First Name" />
                                        </div>
                                        </div>
                                        <div className="row mb-3">
                                        <label htmlFor="exampleInput">Last Name</label>
                                        <div className="form-group">

                                        <input type="text" name="last_name"  value={formValue.last_name} onChange={handleChange} className="form-control p-2 form-field"  id="exampleInput" placeholder=" Enter Last Name" />
                                        </div>
                                        </div>
                                        <div className="mb-3">
                                        <label htmlFor="" className="form-label">Religion</label>
                                        <select className="form-select"  value={formValue.religion_id} onChange={handleChange} name="religion_id" id="">
                                        <option>Select one</option>
                                        {religion?.map((data) => (
                                            <option value={data.id}>{data.name}</option>
                                        ))}


                                        </select>
                                        </div>
                                        <div className="mb-3">
                                        <label htmlFor="" className="form-label">Community</label>
                                        <select className="form-select"  value={formValue.sector_id} onChange={handleChange} name="sector_id" id="">
                                        {sector?.map((data) => (
                                            <option value={data.id}>{data.name}</option>
                                        ))}


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
                                <div className=" col-12 mb-0 "> <a className="button col-4 btn btn-theme rounded-sm animated right-icn" data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  <span className=" col-4 button btn-theme rounded-sm btn  animated right-icn   "  onClick={()=>{setActive(!isActive)}}  ><span>Next<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></span></div>
                                </div>
                            </div>
                            {/* <div className="row ref-2" id="step-2">
                            <div className="col-md-12">
                            <div className="row  justify-content-center">
                            <div className="col-md-12 text-start text-capitalize text-dark">
                            <div className="form-group mb-0">
                            <label className="title divider-3 text-dark mb-3">gender</label>
                            <div className="col-12">
                            <div className="form-check form-check-inline">
                            <label className="form-check-label px-3">
                            <input className="form-check-input" type="radio" name="gender" id="" value="checkedValue" /> Male
                            </label>

                            <label className="form-check-label px-3">
                            <input className="form-check-input" type="radio" name="gender" id="" value="checkedValue" /> Female
                            </label>

                            </div>
                            </div>
                            <div className="form-group mb-3">
                            <label className="title divider-3 text-dark mb-3">about me</label>
                            <textarea className="form-control bg-white form-field" rows="3"></textarea>
                            </div>

                            <div className="form-group mb-3">
                            <div className="profile-info">
                            <p className="mb-0 text-dark"><i className="fa fa-info-circle" aria-hidden="true"></i> by clicking submit you are agreeing to our terms and conditions of use.</p>
                            </div>
                            </div>

                            </div>
                            </div>
                            <div className=" col-12 mb-0 "> <a className="button col-4 btn btn-theme rounded-sm animated right-icn" data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  <a className=" col-4 button btn-theme rounded-sm btn nextBtn btn   animated right-icn"><span>Next<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a></div>
                            </div>
                            </div>
                            </div> */}
                       <div className={(isActive==false) ? 'row ref-2 d-none': 'row ref-2 d-block'} id="step-2">
                            <div className="col-md-12">
                            <div className="row  justify-content-center">
                            <div className="col-md-12 text-start text-capitalize text-white">
                            <div className="row">
                            <label htmlFor="exampleInput">Email ID</label>
                            <div className="form-group mb-3">

                            <input type="text" name="email"  value={formValue.email} onChange={handleChange} className="form-control form-field p-2 " id="exampleInput" placeholder="Enter Email ID" />
                            </div>

                            <div className="form-group mb-3 text-center">
                            <label htmlFor="my-select" className="col-4 text-grey">Day
                            <select id="my-select" name="date_of_Birth_day"  value={formValue.date_of_Birth_day} onChange={handleChange} className="form-select">
                            <option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option>
                            </select>
                            </label>
                            <label htmlFor="my-select" className="col-4 text-grey">Month
                            <select id="my-select" className="form-select" value={formValue.date_of_Birth_month} onChange={handleChange} name="date_of_Birth_month">
                            <option vlaue="Jan">Jan</option><option vlaue="Feb">Feb</option><option vlaue="Mar">Mar</option><option vlaue="Apr">Apr</option><option vlaue="May">May</option><option vlaue="Jun">Jun</option><option vlaue="Jul">Jul</option><option vlaue="Aug">Aug</option><option vlaue="Sep">Sep</option><option vlaue="Oct">Oct</option><option vlaue="Nov">Nov</option><option vlaue="Dec">Dec</option>
                            </select>
                            </label>
                            <label htmlFor="my-select" className="col-4 text-grey">Month
                            <select id="my-select" className="form-select" value={formValue.date_of_Birth_year} onChange={handleChange} name="date_of_Birth_year">
                            <option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option><option value="1979">1979</option><option value="1978">1978</option><option value="1977">1977</option><option value="1976">1976</option><option value="1975">1975</option><option value="1974">1974</option><option value="1973">1973</option><option value="1972">1972</option><option value="1971">1971</option><option value="1970">1970</option><option value="1969">1969</option><option value="1968">1968</option><option value="1967">1967</option><option value="1966">1966</option><option value="1965">1965</option><option value="1964">1964</option><option value="1963">1963</option><option value="1962">1962</option><option value="1961">1961</option><option value="1960">1960</option><option value="1959">1959</option><option value="1958">1958</option><option value="1957">1957</option><option value="1956">1956</option><option value="1955">1955</option><option value="1954">1954</option><option value="1953">1953</option><option value="1952">1952</option><option value="1951">1951</option><option value="1950">1950</option>
                            </select>
                            </label>
                            </div>

                            <div className="form-group mb-3">
                            <label htmlFor="my-select" className="text-grey">Living In</label>
                            <select id="my-select" className="form-select" value={formValue.country} onChange={handleChange} name="country">
                            <option select hidden>Select Country</option>
                            {country?.map((data) => (
                                    <option value={data.id}>{data.name}</option>
                                   ))}
                            {/* <option>Australia</option><option>Canada</option><option>India</option><option>Kuwait</option><option>New Zealand</option><option>Pakistan</option><option>Saudi Arabia</option><option>South Africa</option><option>USA</option><option>UAE</option><option>UK</option> */}
                            </select>
                            </div>
                            <div className="form-group mb-3">
                            <label htmlFor="my-select" className="text-grey">Living In</label>
                            <select id="my-select" name="state" value={formValue.state} onChange={handleChange} className="form-select">
                            <option select hidden>Select State</option>
                            {state?.map((data) => (
                                    <option value={data.id}>{data.name}</option>
                                   ))}
                            {/* <option>Australia</option><option>Canada</option><option>India</option><option>Kuwait</option><option>New Zealand</option><option>Pakistan</option><option>Saudi Arabia</option><option>South Africa</option><option>USA</option><option>UAE</option><option>UK</option> */}
                            </select>
                            </div>
                            <div className="form-group mb-3">
                            <label htmlFor="my-select" className="text-grey">Living In</label>
                            <select id="my-select" name="city" value={formValue.city} onChange={handleChange} className="form-select">
                            <option select hidden>Select City</option>
                            {city?.map((data) => (
                                    <option value={data.id}>{data.name}</option>
                                   ))}
                            {/* <option>Australia</option><option>Canada</option><option>India</option><option>Kuwait</option><option>New Zealand</option><option>Pakistan</option><option>Saudi Arabia</option><option>South Africa</option><option>USA</option><option>UAE</option><option>UK</option> */}
                            </select>
                            </div>
                            

                            </div>

                            <div className="form-group mb-3">
                            <div className="profile-info">
                            <p className="mb-0 text-dark"><i className="fa fa-info-circle" aria-hidden="true"></i> by clicking submit you are agreeing to our terms and conditions of use.</p>
                            </div>
                            </div>


                            </div>

                            </div>
                            <div className=" col-12 mb-0 "> <a className="button col-4 btn btn-theme rounded-sm animated right-icn" data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> 
                            <button type="submit" className="button col-4 btn-theme rounded-sm btn btn   animated right-icn" data-bs-dismiss="modal"><span>submit<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></button>
                             {/* <a href='/createProfile' className="button col-4 btn-theme rounded-sm btn btn   animated right-icn" data-bs-dismiss="modal"><span>submit<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a>  */}
                             </div>
                            </div>
                            </div>
                        
                        </form>
                        </div>
                        </div>
                    </div>
                </div>
                </div>

                <div className="menu">

                    <nav id="menu" className="">

                        <section className="menu-list-items">
                            <div className="container-fluid mt-3">
                                <div className="row position-relative">
                                    <div className={(location.pathname=='/' || location.pathname=='') ?   ('col-12 position-relative d-flex') :("col-12 position-relative d-sm-flex d-block")}>
<div className={(location.pathname=='/' || location.pathname=='') ?  ("col-1 p-0") : ("col-sm-1 col-12  text-left text-sm-center p-0 d-none")}>


                                        <Link to="/"   >
                                            <img className="col-sm-12 col-4 offset-sm-0 offset-4 m-0"  src={window.location.origin + "/images/logo.png"}  alt="logo" /> 
                                            </Link> 
                                            </div>       
<div className={(location.pathname=='/' || location.pathname=='') ?("col") : ("col-12 col-sm-10")}>
            <ul className={(location.pathname=='/' || location.pathname=='') ?("float-right d-flex pt-4 text-white") : ("p-sm-4 p-0 pt-4 d-flex w-100 justify-content-center primary-text")} >
                                        {(location.pathname=='/' || location.pathname=='') ? (
                                            <>
                                                <li>
                                                    <a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal2" id="register">Register</a>
                                                </li>
                                                <li>
                                                    <a href="#"  data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>
                                                </li>
                                            </>
                                        
                                        ): (
                                            <>
                                            <li className="active  "><Link className='primary-text mx-2' to="/"> Home <i className="fa fa-angle-down fa-indicator"></i></Link>

    
                                            </li>
                                            <li><Link className='primary-text mx-2 ' to="/myaccount"> Profile <i className="fa fa-angle-down fa-indicator"></i></Link>

</li>
                                            <li><Link className='primary-text mx-2 ' to="/matches">Matches <i className="fa fa-angle-down fa-indicator"></i></Link>

                                            </li>
                                            <li><Link className='primary-text mx-2' to="/search">Search <i className="fa fa-angle-down fa-indicator"></i></Link>

                                            </li>
                                            <li>
                                                <div className="menu d-sm-none d-block" onClick={()=>{(store.subHeader==false)?(store.setSubHeader(true)):(store.setSubHeader(false))}}>
                                                    <i class="fa fa-bars" aria-hidden="true"></i>
                                                </div>
                                            </li>
                                            </>
                                        ) 
                                        }
                                        </ul>
                                        </div>
                                        {(location.pathname=='/' || location.pathname=='') ?(""): (
                                        <div className=" col d-sm-flex d-none flex-column justify-content-center">
                                        
                                         <Link to="/pricing" className="btn btn-outline border"> Upgrade</Link> 
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </nav>

                </div>
                
            </header>      
          
            
            </>
        )}
    </Observer >
  )
}

export default Header