import React from 'react'
import { Observer } from "mobx-react-lite";

const BasicSearch = () => {
  return (
    <Observer>
    {()=>(
        <>
        <div className="container mt-3">
          <div className="row">
            <div className="col-4">
                Age
            </div>
            <div className="col-8 d-flex">
              <select className="col-2 form-control " name="" id="">
              <option>Doesn't Matter</option>
              <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
              </select>
              <span className='px-2 align-self-center' >To</span>
              <select className="col-2 form-control " name="" id="">
              <option>Doesn't Matter</option>
              <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Height
            </div>
            <div className="col-8 d-flex">
              <select className="col-2 form-control " name="" id="">
              <option>Doesn't Matter</option>
                <option>5'1 ft</option>
                <option>5'2 ft</option>
                <option>5'3 ft</option>
                <option>5'4 ft</option>
                <option>5'5 ft</option>
                <option>5'6 ft</option>
                <option>5'7 ft</option>
                <option>5'8 ft</option>
                <option>5'9 ft</option>
                <option>6'0 ft</option>
                <option>6'1 ft</option>
                <option>6'2 ft</option>
                <option>6'3 ft</option>
                <option>6'4 ft</option>
              </select>
              <span className='px-2 align-self-center' >To</span>
              <select className="col-2 form-control " name="" id="">
              <option>Doesn't Matter</option>
              <option>5'1 ft</option>
                <option>5'2 ft</option>
                <option>5'3 ft</option>
                <option>5'4 ft</option>
                <option>5'5 ft</option>
                <option>5'6 ft</option>
                <option>5'7 ft</option>
                <option>5'8 ft</option>
                <option>5'9 ft</option>
                <option>6'0 ft</option>
                <option>6'1 ft</option>
                <option>6'2 ft</option>
                <option>6'3 ft</option>
                <option>6'4 ft</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Martial Status
            </div>
            <div className="col-8">
              <select className="form-control " name="" id="">      <option>Doesn't Matter</option>
                <option>Single</option>
                <option>Divorced</option>
                <option></option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Religion
            </div>
            <div className="col-8">
              <select className="form-control " name="" id="">      <option>Doesn't Matter</option>
                <option>Islam</option>
                <option>Christian</option>
                <option>Hindu</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Mother Tongue
            </div>
            <div className="col-8">
              <select className="form-control " name="" id="">      <option>Doesn't Matter</option>
                <option>Urdu</option>
                <option>Punjabi</option>
                <option>English</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Community
            </div>
            <div className="col-8">
              <select className="form-control " name="" id="">      <option>Doesn't Matter</option>
                <option>Muslim</option>
                <option>Hindu</option>
                <option>Christian</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Country Living In
            </div>
            <div className="col-8">
              <select className="form-control " name="" id="">      <option>Doesn't Matter</option>
                <option>Pakistan</option>
                <option>Europ</option>
                <option>UAE</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                State Living In
            </div>
            <div className="col-8">
              <select className="form-control " name="" id="">      <option>Doesn't Matter</option>
                <option>Punjab</option>
                <option>Sindh</option>
                <option>Sarhad</option>
                <option>Balochistan</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                City / District
            </div>
            <div className="col-8">
              <select className="form-control " name="" id="">      <option>Doesn't Matter</option>
                <option>Lahore</option>
                <option>Sheikhupura</option>
                <option>Mian Channu</option>
                <option>Gujarawala</option>
                <option>Gojra</option>
                <option>KhariyaWala</option>
              </select>
            </div>
          </div>
          <div className="row pt-3">
            <div className="col-4">
                  Photo Setting
              </div>
              <div className="col-8 d-flex">
                <div className="form-check form-check-inline">
                
                <input className="form-check-input" type="checkbox" name="check1" id="" value="checkedValue"/> Visible to all
            
                </div>
                <div className="form-check form-check-inline">
                  
                  <input className="form-check-input" type="checkbox" name="check2" id="" value="checkedValue"/> Protected Picture
              
                </div>
              </div>
           
          </div>
          <div className="row pt-1">
            <div className="col-4">
            Do Not Show
              </div>
              <div className="col-8 d-flex">
                <div className="form-check form-check-inline">
                
                <input className="form-check-input" type="checkbox" name="check1" id="" value="checkedValue"/>  Profiles that I have already Viewed
            
                </div>
                <div className="form-check form-check-inline">
                  
                  <input className="form-check-input" type="checkbox" name="check2" id="" value="checkedValue"/>  Profiles that have Filtered me out
              
                </div>
              </div>
           
          </div>
          <div className="col-12">
            <b>Save upto 5 Searches</b>
          </div>
          <div className="row pt-1">
            <div className="col-4">
            Save Search as
            </div>
            <div className="col-8 d-flex">
              <input type="text" placeholder='e.g Lahore, 20-22' className='form-control col-6' />
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
            Email me new Results
            </div>
            <div className="col-8 d-flex">
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="email" id="" value="checkedValue" /> Daily
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="email" id="" value="checkedValue" /> Twice A Week
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="email" id="" value="checkedValue" /> Once A Week
                </label>
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="email" id="" value="checkedValue" /> Never
                </label>
              </div>
            </div>
          </div>
          <div className="col-12 text-center pt-2">
            <button className='button col-4 btn btn-theme rounded-sm animated right-icn'>Search</button>
          </div>
        </div>
        </>
    )}
    </Observer>
  )
}

export default BasicSearch