import React from 'react'
 
import { Observer } from "mobx-react-lite";

const Profile = () => {
   
  return (
    <Observer>
    {()=>(
        <>
        <div className="col-12 p-3 h4 shadow rounded bg-white">
          <div className="container mt-3">
          Hamza Ejaz
          </div>

        </div>
        <div className="container mt-3 pt-5">
        <div className="col-12 d-sm-flex d-block">
   
          <div className="col-sm-4 col-12">
          <div className="card bg-dark text-white">
          <img src="images/team/team-v1.png" className="card-img-top" alt="..."/>
          <div className="card-img-overlay">
          
            

          </div>
          <a href="#" className="card-link">Browser</a>
        </div>
          </div>
        <div className="col-sm-8 col-12 text-center p-4 rounded shadow rounded-sm bg-white">
          <div className="col-12">
          <div className="col-6 d-flex pt-4">
        <div className="col-6  ">
Age/Height
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
:25 5.7ft
        </div>
        <div className="col-6 ">
Cast
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
Bhatti
        </div>


        
          </div>
          <div className="col-6 d-flex pt-4">
        <div className="col-6 ">
Nationality
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
Pakistani
        </div>
        <div className="col-6 ">
Religion
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
Islam
        </div>

          </div>
          <div className="col-6 d-flex pt-4">
        <div className="col-6 ">
Education
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
BSCS
        </div>
        <div className="col-6 ">
Job
        </div>
        <div className="col-6" style={{fontWeight:"bold"}}>
Engineer
        </div>
        
          </div>
         
          </div>
        
        </div>
        </div>
        <section>
  <div className="container mt-3">
    <div className="row">
      <div className="col-md-12">
        <div className="user-dashboard-info-box bg-white">
          <div className="section-title-02 mb-2 mt-4 d-grid">
            <h4>Basic Information</h4>
          </div>
          
          <form>
            <div className="row shadow rounded-lg p-3">
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Your Name</label>
                <input type="text" disabled className="form-control p-0" value="Felica Queen"/>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Email</label>
                <input type="email" disabled className="form-control p-0" value="felicaqueen@gmail.com"/>
              </div>
              <div className=" mb-3 col-md-6 datetimepickers">
                <label className="form-label text-dark">Date of birth</label>
                <div className="input-group date" id="datetimepicker-01" data-target-input="nearest">
                  <input type="text" disabled className="form-control p-0 datetimepicker-input" value="08/11/1999" data-target="#datetimepicker-01"/>
                  <div className="input-group-append d-flex" data-target="#datetimepicker-01" data-toggle="datetimepicker">
                    <div className="input-group-text"><i className="far fa-calendar-alt"></i></div>
                  </div>
                </div>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Phone</label>
                <input type="text" disabled className="form-control p-0" value="+(123) 345-6789" />
              </div>
              <div className=" mb-3 col-md-6">
                <label className="d-block mb-3">Gender</label>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="customRadio" id="customRadio1"/>
                    <label className="form-check-label" for="customRadio1">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="customRadio" id="customRadio2" checked="checked"/>
                    <label className="form-check-label" for="customRadio2">Female</label>
                  </div>
              </div>
              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Job Title</label>
                <input type="text" disabled className="form-control p-0" value="General Insurance"/>
              </div>
              <div className=" mb-3 col-md-6 select-border">
                <label className="form-label text-dark">Job Title</label>
                <select className="form-control p-0 basic-select" disabled>
                  <option value="value 01" selected="selected">Test Selector</option>
                  <option value="value 02">Needham, MA</option>
                  <option value="value 03">New Castle, PA</option>
                </select>
              </div>

              <div className=" mb-3 col-md-6">
                <label className="form-label text-dark">Salary</label>
                <input type="text" disabled className="form-control p-0" value="$33,000" />
              </div>
              <div className=" mb-0 col-md-12">
                <label className="form-label text-dark">Description</label>
                <textarea className="form-control p-0" disabled rows="5" placeholder="Give yourself the power of responsibility. Remind yourself the only thing stopping you is yourself."></textarea>
              </div>
            </div>
          </form>
        </div>
 
         <div className="user-dashboard-info-box bg-white">
          <div className=" mb-0 pt-5">
            <h4 className="mb-3">Address</h4>
            <div className=" mb-3 shadow rounded-lg p-3">
              <label className="form-label text-dark">Enter Your Location</label>
              <input type="text" disabled className="form-control p-0" value="214 West Arnold St. New York, NY 10002"/>
            </div>
            {/* <div className="company-address-map">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531590414!3d-37.817323442021134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1559039794237!5m2!1sen!2sin"  height="400" allowfullscreen></iframe>
            </div> */}
          </div>
        </div>
        <a className="btn btn-md btn-primary" href="#">Edit Settings</a>
      </div>
      </div>
    </div>
</section>
        </div>
        
        
        </>
    )}
    </Observer>
  )
}

export default Profile