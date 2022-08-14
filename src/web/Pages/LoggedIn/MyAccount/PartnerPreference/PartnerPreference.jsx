import React,{ useLayoutEffect,useState ,useContext} from 'react'
import MultiRangeSlider from "multi-range-slider-react";
import { Observer } from "mobx-react-lite";
import axios from 'axios'; 
import { StoreContext } from "./../../../../store";
import './assets/css/preferences.css'

const PartnerPreference = () => {
  const [minValueHeight, set_minHeight] = useState(25);
  const [maxValueHeight, set_maxHeight] = useState(75);
  const [minValueAge, set_minValueAge] = useState(25);
  const [maxValueAge, set_maxValueAge] = useState(75);
  const [country, setCountries] = useState();
  const [state, setStates] = useState();
  const [city, setCities] = useState();
  const [cast, setCasts] = useState();

  const handleInputHeight = (e) => {
    set_minHeight(e.minHeight);
    set_maxHeight(e.maxHeight);
  };
  const handleInputAge = (e) => {
    set_minValueAge(e.minValueAge);
    set_maxValueAge(e.maxValueAge);
  };
  const store = useContext(StoreContext);
  const [profileData,setPartner] = useState()
  const [formValue, setformValue] = React.useState({
    gender: '',
    material_status: '',
    // min_height: '',
    // min_age:'',
    // max_height: '',
    // max_age:'',
    cast: '',
    education: '',
    country:'',
    state:'',
    city:''
  });
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
    // console.log(formValue);
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
            console.log(data);
            setStates(data)
        })
      } catch(error) {
        console.log(error)
      }
  }
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
  const casts = async()=>{
    try {
      const token = localStorage.getItem('accessToken')
          axios({
            method: "get",
            url: `${store.url}get-casts`,
            headers: { "Content-Type": "multipart/form-data",    'Authorization': `Bearer ${token}`  },
          
     }).then((response)=>{
            const data = response.data[0].casts
            setCasts(data)
        })
      } catch(error) {
        console.log(error)
      }
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log('ok');
    const token = localStorage.getItem('accessToken')
    const user = localStorage.getItem('user')
    const formData = new FormData();
const user_id = JSON.parse(user)['id'];
    formData.append('data[user_id]',user_id)
    formData.append('data[martial_status]',formValue.material_status)
    formData.append('data[min_height]',minValueHeight)
    formData.append('data[min_age]',minValueAge)
    formData.append('data[max_height]',maxValueHeight)
    formData.append('data[max_age]',maxValueAge)
    formData.append('data[cast_id]',formValue.cast)
    formData.append('data[education]',formValue.education)
    formData.append('data[country_living_in]',formValue.country)
    formData.append('data[state_living_in]',formValue.state)
    formData.append('data[city/district]',formValue.city)

    try {
   
    const headers = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}` 
  };
  console.log(formData);
      const response =   await axios({

        method: "post",
        url: `${store.url}update-partner`,
        data: formData,
        headers: headers,
        
    }).then((response)=>{
      //   setformValue({ 
      //   material_status: '',
      //   cast: '',
      //   education: '',
      //   country:'',
      //   city:''
      // })
console.log('done');
        const data = response.data
        })

      } catch(error) {
        console.log('nononononmnponpno');
        console.log(error)
      }
  }

  const getPartner = async(access_token,user_id)=>{
    try {
      const userId = new FormData();
      userId.append("id", user_id)
    const headers = { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${access_token}` 
  };
      const response =   await axios({

        method: "post",
        url: `${store.url}get-partner`,
        data: userId,
        headers: headers,
              
        
     }).then((response)=>{
            const data = response.data
            
            setformValue({ 
              gender:data[0]['gender'],
              material_status:data[0]['material_status'],
              min_height:data[0]['min_height'],
              min_age:data[0]['min_age'],
              max_height:data[0]['max_height'],
              max_age:data[0]['max_age'],
              cast:data[0]['cast'],
              education:data[0]['qualification'],
              country:data[0]['country'],
              city:data[0]['city']
          })
           
        })

      } catch(error) {
        console.log(error)
      }
  }

  
  useLayoutEffect(()=>{
   const token = localStorage.getItem('accessToken')
   const user = localStorage.getItem('user')
   countries();
   casts();
  //  getPartner(token,JSON.parse(user).id)
  },[])

  return (
    <Observer>
    {()=>(
        <>
            <div className="container mt-3">

              <div className="row p-3 bg-white shadow rounded">
              
                <form 
                onSubmit={handleSubmit} 
                className="form-inline">
                  <div className="form-group d-flex">
                    <div className="col-2">
                    <label for="">Age</label>
                    </div>

                    <div className="col-8 offset-sm-0 offset-1">
                    <MultiRangeSlider
                      min={0}
                      max={100}
                      step={5}
                      ruler={true}
                      label={true}
                      preventWheel={false}
                      minValue={minValueAge}
                      maxValue={maxValueAge}
                      onInput={(e) => {
                        handleInputAge(e);
                      }}
                    />
                    </div>
                    
                  </div>
                  <div className="form-group d-flex">
                    <div className="col-2">
                    <label for="">Height</label>
                    </div>

                    <div className="col-8 offset-sm-0 offset-1">
                    <MultiRangeSlider
                      min={0}
                      max={100}
                      step={5}
                      ruler={true}
                      label={true}
                      preventWheel={false}
                      minValue={minValueHeight}
                      maxValue={maxValueHeight}
                      onInput={(e) => {
                        handleInputHeight(e);
                      }}
                    />
                    
                    </div>
                    
                  </div>
                  <div className="form-group d-flex">
                    <div className="col-2 align-self-center">
                    <label for="" className=''>Marital status</label>
                    </div>

                    <div className="col-8 offset-sm-0 offset-1">
                    <div className="mb-3">

                      <select className="form-control p-2" name="maritalStatus" value={formValue.material_status} onChange={handleChange} id="">
                        <option>Single</option>
                        <option>Divorsed</option>
                        
                      </select>
                    </div>
                    </div>
                    
                  </div>
                  <div className="form-group d-flex">
                    <div className="col-2 align-self-center">
                    <label for="" className=''>Education</label>
                    </div>

                    <div className="col-8 offset-sm-0 offset-1">
                    <div className="mb-3">

                      <select className="form-control p-2" name="education" value={formValue.education} onChange={handleChange}  id="">
                        <option>Graduation</option>
                        <option>Bacholar</option>
                        <option>Master</option>
                        <option>Phd</option>
                      </select>
                    </div>
                    </div>
                    
                  </div>
                  <div className="form-group d-flex">
                    <div className="col-2 align-self-center">
                    <label for="" className=''>Country</label>
                    </div>

                    <div className="col-8 offset-sm-0 offset-1">
                    <div className="mb-3">

                      <select className="form-control p-2" name="country" value={formValue.country} onChange={handleChange} id="">
                    <option>select country</option>
                      {country?.map((data) => (
                                    <option value={data.id}>{data.name}</option>
                                   ))}
                      </select>
                    </div>
                    </div>
                    
                  </div>
                  <div className="form-group d-flex">
                    <div className="col-2 align-self-center">
                    <label for="" className=''>Country</label>
                    </div>

                    <div className="col-8 offset-sm-0 offset-1">
                    <div className="mb-3">

                      <select className="form-control p-2" name="state" value={formValue.state} onChange={handleChange} id="">
                      <option>select state</option>
                      {state?.map((data) => (
                                    <option value={data.id}>{data.name}</option>
                                   ))}
                      </select>
                    </div>
                    </div>
                    
                  </div>
                  <div className="form-group d-flex">
                    <div className="col-2 align-self-center">
                    <label for="" className=''>City</label>
                    </div>

                    <div className="col-8 offset-sm-0 offset-1">
                    <div className="mb-3">

                      <select className="form-control p-2" name="city" value={formValue.city} onChange={handleChange} id="">
                      <option>select city</option>
                      {city?.map((data) => (
                                    <option value={data.id}>{data.name}</option>
                                   ))}
                      </select>
                    </div>
                    </div>
                    
                  </div>
                  <div className="form-group d-flex">
                    <div className="col-2 align-self-center">
                    <label for="" className=''>Cast</label>
                    </div>

                    <div className="col-8 offset-sm-0 offset-1">
                    <div className="mb-3">

                      <select className="form-control p-2" name="cast" value={formValue.cast} onChange={handleChange} id="">
                      {cast?.map((data) => (
                                    <option value={data.id}>{data.name}</option>
                                   ))}
                      </select>
                    </div>
                    </div>
                    
                  </div>
                  <div className="col-12 text-center">
                  <button type='submit' className="button col-4 btn btn-theme rounded-sm animated right-icn" data-bs-dismiss="modal"><span>Save<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></button> 
                  </div>
                  
                </form>
              </div>
            </div>
        </>
    )}
    </Observer>
  )
}

export default PartnerPreference