import React,{useState} from 'react'
import MultiRangeSlider from "multi-range-slider-react";
import { Observer } from "mobx-react-lite";
 
import './assets/css/preferences.css'
const PartnerPreference = () => {
  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const [minValue1, set_minValue1] = useState(25);
  const [maxValue1, set_maxValue1] = useState(75);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };
  const handleInput1 = (e) => {
    set_minValue1(e.minValue);
    set_maxValue1(e.maxValue);
  };
  return (
    <Observer>
    {()=>(
        <>
            <div className="container mt-3">

  
      
      
              <div className="row p-3 bg-white shadow rounded">
              
                <form className="form-inline">
                  <div className="form-group d-flex">
                    <div className="col-2">
                    <label for="">Age</label>
                    </div>

                    <div className="col-8">
                    <MultiRangeSlider
                      min={0}
                      max={100}
                      step={5}
                      ruler={true}
                      label={true}
                      preventWheel={false}
                      minValue={minValue1}
                      maxValue={maxValue1}
                      onInput={(e) => {
                        handleInput1(e);
                      }}
                    />
                    </div>
                    
                  </div>
                  <div className="form-group d-flex">
                    <div className="col-2">
                    <label for="">Height</label>
                    </div>

                    <div className="col-8">
                    <MultiRangeSlider
                      min={0}
                      max={100}
                      step={5}
                      ruler={true}
                      label={true}
                      preventWheel={false}
                      minValue={minValue}
                      maxValue={maxValue}
                      onInput={(e) => {
                        handleInput(e);
                      }}
                    />
                    
                    </div>
                    
                  </div>
                  <div className="form-group d-flex">
                    <div className="col-2 align-self-center">
                    <label for="" className=''>Marital status</label>
                    </div>

                    <div className="col-8">
                    <div className="mb-3">

                      <select className="form-control p-2" name="" id="">
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

                    <div className="col-8">
                    <div className="mb-3">

                      <select className="form-control p-2" name="" id="">
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
                    <label for="" className=''>Location</label>
                    </div>

                    <div className="col-8">
                    <div className="mb-3">

                      <select className="form-control p-2" name="" id="">
                        <option>Punjab</option>
                        <option>Sindh</option>
                        <option>Sarhad</option>
                        <option>Balochistaan</option>
                      </select>
                    </div>
                    </div>
                    
                  </div>
                  <div className="form-group d-flex">
                    <div className="col-2 align-self-center">
                    <label for="" className=''>Cast</label>
                    </div>

                    <div className="col-8">
                    <div className="mb-3">

                      <select className="form-control p-2" name="" id="">
                        <option>Butt</option>
                        <option>Sheikh</option>
                        <option>Bhatti</option>
                      </select>
                    </div>
                    </div>
                    
                  </div>
                  <div className="col-12 text-center">
                  <a className="button col-4 btn btn-theme rounded-sm animated right-icn" data-bs-dismiss="modal"><span>Close<i className="glyph-icon flaticon-hearts" aria-hidden="true"></i></span></a> 
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