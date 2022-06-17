import React from 'react'
import './../assets/css/style.css'
import { Observer } from "mobx-react-lite";

const RecentlyView = () => {
   
  return (
    <Observer>
    {()=>(
        <>
<section className="space-ptb">
  <div className="container mt-3 p-2  shadow rounded bg-white">
    <h5 className=' pt-2'>
    Recently Viewed Members (4)
    </h5>
    <div className="pb-2">
    Profiles you have recently Viewed
    </div>
    
    <div className="row">
    <div className="col-sm-3 col-12 p-sm-0 p-3">
        <div className="shadow rounded p-0 m-1">
        <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
        <div className="p-1">
        <b className='text-primary'>Shumaila  A</b>
        <ul>
          <li>24 yrs, 5' 4", Muslim, Urdu</li>
          <li>Awan</li>
          <li>Lives in Lahore, Punjab</li>
        </ul>
        </div>
        </div>
      </div>
      <div className="d-sm-none d-block pt-3"> &nbsp;</div>
      <div className="col-sm-3 col-12 p-sm-0 p-3">
        <div className="shadow rounded p-0 m-1">
        <img className="img-fluid rounded" src={window.location.origin + "/images/profile/default.png"} alt="" />
        <div className="p-1">
        <b className='text-primary'>Goshi M</b>
        <ul>
          <li>24 yrs, 5' 4", Muslim, Urdu</li>
          <li>Awan</li>
          <li>Lives in Lahore, Punjab</li>
        </ul>
        </div>
        </div>
      </div>
      <div className="d-sm-none d-block pt-3"> &nbsp;</div>
      <div className="col-sm-3 col-12 p-sm-0 p-3">
        <div className="shadow rounded p-0 m-1">
        <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
        <div className="p-1">
        <b className='text-primary'>Shumaila </b>
        <ul>
          <li>24 yrs, 5' 4", Muslim, Urdu</li>
          <li>Awan</li>
          <li>Lives in Lahore, Punjab</li>
        </ul>
        </div>
        </div>
      </div>
      <div className="d-sm-none d-block pt-3"> &nbsp;</div>
      <div className="col-sm-3 col-12 p-sm-0 p-3">
        <div className="shadow rounded p-0 m-1">
        <img className="img-fluid" src={window.location.origin + "/images/profile/default.png"} alt="" />
        <div className="p-1">
        <b className='text-primary'>Shumaila  A</b>
        <ul>
          <li>24 yrs, 5' 4", Muslim, Urdu</li>
          <li>Awan</li>
          <li>Lives in Lahore, Punjab</li>
        </ul>
        </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )}
    </Observer>
  )
}

export default RecentlyView