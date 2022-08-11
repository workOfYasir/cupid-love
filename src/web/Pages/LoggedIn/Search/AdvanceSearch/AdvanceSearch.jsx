import React from 'react'
import { Observer } from "mobx-react-lite";

const AdvanceSearch = () => {
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
              <select className="col-2 form-control " name="age_from" id="">
                <option>Doesn't Matter</option>
              <option>Select Age</option>
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
              <select className="col-2 form-control " name="age_to" id="">
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
              <select className="col-2 form-control " name="height_from" id="">
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
              <select className="col-2 form-control " name="height_to" id="">
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
              <select className="form-control " name="martial_status" id=""><option>Doesn't Matter</option>
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
              <select className="form-control " name="religion" id=""><option>Doesn't Matter</option>
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
              <select className="form-control " name="language" id=""><option>Doesn't Matter</option>
                <option>Urdu</option>
                <option>Punjabi</option>
                <option>English</option>
              </select>
            </div>
          </div>
          <div className="row pt-1">
            <div className="col-4">
                Sactor
            </div>
            <div className="col-8">
              <select className="form-control " name="sactor" id=""><option>Doesn't Matter</option>
                <option>Shia</option>
                <option>Sunni</option>
                <option>Deobandi</option>
                <option>ahl e hadis</option>
              </select>
            </div>
          </div>
          <div className="row">  
            <div className="accordion accordion-style" id="accordion-Two">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Location & Grew up in Details <i className="fas fa-chevron-down fa-xs"></i></button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion-Two">
                  <div className="accordion-body row p-0">
                  <div className="col-4 pt-2">
                Country Living In
                </div>
                <div className="col-8 pt-2">
                  <select className="form-control " name="country" id=""><option>Doesn't Matter</option>
                    <option>Pakistan</option>
                    <option>Europ</option>
                    <option>UAE</option>
                  </select>
                </div>
                <div className="col-4 pt-2">
                State Living In
                </div>
                <div className="col-8 pt-2">
                  <select className="form-control " name="state" id=""><option>Doesn't Matter</option>
                    <option>Punjab</option>
                    <option>Sindh</option>
                    <option>Sarhad</option>
                    <option>Balochistan</option>
                  </select>
                </div>
                <div className="col-4 pt-2">
                City / District
                </div>
                <div className="col-8 pt-2">
                  <select className="form-control " name="city" id=""><option>Doesn't Matter</option>
                    <option>Lahore</option>
                    <option>Sheikhupura</option>
                    <option>Mian Channu</option>
                    <option>Gujarawala</option>
                    <option>Gojra</option>
                    <option>KhariyaWala</option>
                  </select>
                </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Education & Professional Details <i className="fas fa-chevron-down fa-xs"></i></button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion-Two">
                  <div className="accordion-body row p-0">
                  <div className="col-4 pt-2">
                  Qualification
                  </div>
                  <div className="col-8 pt-2">
                    <select className="form-control " name="education" id=""><option>Doesn't Matter</option>
                      <option>Inter</option>
                      <option>Bacholer</option>
                      <option>Under Graduate</option>
                      <option>Graduate</option>
                      <option>Master</option>
                      <option>Phd</option>
                    </select>
                  </div>
                  <div className="col-4 pt-2">
                  Education Area
                  </div>
                  <div className="col-8 pt-2">
                    <select className="form-control " name="education_in" id=""><option>Doesn't Matter</option>
                      <option>Art</option>
                      <option>Science</option>
                      <option>Computer</option>
                      <option>Math</option>
                      <option>Chemistry</option>
                      <option>Physics</option>
                    </select>
                  </div>
                  <div className="col-4 pt-2">
                  Working With
                  </div>
                  <div className="col-8 pt-2">
                    <select className="form-control " name="working_with" id=""><option>Doesn't Matter</option>
                      <option>Govrt Sector</option>
                      <option>Private Sector</option>
                    </select>
                  </div>
                  <div className="col-4 pt-2">
                  Profession
                  </div>
                  <div className="col-8 pt-2">
                    <select className="form-control " name="working_in" id=""><option>Doesn't Matter</option>
                      <option>Hr</option>
                      <option>Manager</option>
                      <option>CEO</option>
                      <option>CTO</option>
                      <option>Accountent</option>
                      <option>Employee</option>
                      
                    </select>
                  </div>
                  <div className="col-4 pt-2">
                  Income (Anual)
                  </div>
                  <div className="col-8 pt-2">
                    <select className="form-control " name="income" id=""><option>Doesn't Matter</option>
                      <option>Less Then 1 lakh </option>
                      <option>1 Lakh</option>
                      <option>2 Lakh</option>
                      <option>3 Lakh</option>
                      <option>4 Lakh</option>
                      <option>5 Lakh</option>
                      <option>6 Lakh</option>
                      <option>7 Lakh</option>
                      <option>8 Lakh</option>
                      <option>9 Lakh +</option>
                    </select>
                  </div>
                  </div>
                </div>
              </div>
               {/*   <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Search using Keywords <i className="fas fa-chevron-down fa-xs"></i></button>
                </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion-Two">
                  <div className="accordion-body row p-0 d-block">
                  <div className="col-12 pt-2">
                  For very specific results, filter your search using keywords.
                  </div>
                  <div className="col-12 pt-2">
                    <input type="text" className="form-control" placeholder="e.g Lahore, 20-22, MBA"/>
                  </div>
                  </div>
                </div>
              </div> */}
              <div className="row pt-3">
            <div className="col-4">
                  Photo Setting
              </div>
              <div className="col-8 d-flex">
                <div className="form-check form-check-inline">
                
                <input className="form-check-input" type="checkbox" name="photo_visible" id="" value="checkedValue"/> Visible to all
            
                </div>
                <div className="form-check form-check-inline">
                  
                  <input className="form-check-input" type="checkbox" name="photo_visible" id="" value="checkedValue"/> Protected Picture
              
                </div>
              </div>
           
          </div>
              <div className="row pt-1">
            <div className="col-4">
            Do Not Show
              </div>
              <div className="col-8 d-flex">
                <div className="form-check form-check-inline">
                
                <input className="form-check-input" type="checkbox" name="visited_profiles" id="" value="checkedValue"/>  Profiles that I have already Viewed
            
                </div>
                <div className="form-check form-check-inline">
                  
                  <input className="form-check-input" type="checkbox" name="profiles_visited_me" id="" value="checkedValue"/>  Profiles that have Filtered me out
              
                </div>
              </div>
           
          </div>
          <div className="col-12">
            <b>Save upto 5 Searches</b>
          </div>
          {/* <div className="row pt-1">
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
          </div> */}
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

export default AdvanceSearch