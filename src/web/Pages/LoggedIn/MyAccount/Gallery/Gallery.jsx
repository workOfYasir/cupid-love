import React from 'react'
import Photos from './Photos/Photos'
import Settings from './Settings/Settings'
import { Observer } from "mobx-react-lite";
 

const Gallery = () => {
   
  return (
    <Observer>
    {()=>(
        <>
           <section >
  <div className="container mt-3 pb-5">
    <div className="row p-3 bg-white shadow rounded">
 
      <div className="col-md-12">
        <div className="section-title-02 mt-md-0">
          <h4>My Photos</h4>
        </div>
        <div className="browse-job d-flex">
          <div className="justify-content-start">
            <ul className="nav nav-tabs nav-tabs-02" role="tablist">
              
              <li className="nav-item">
                <a className="nav-link" id="tab-04" data-bs-toggle="tab" href="#tab-07" role="tab" aria-controls="tab-07" aria-selected="false">Photo Album</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="tab-05" data-bs-toggle="tab" href="#tab-08" role="tab" aria-controls="tab-08" aria-selected="false">Settings</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          
          <div className="tab-pane fade" id="tab-07" role="tabpanel" aria-labelledby="tab-04">
            <Photos/>
          </div>
          <div className="tab-pane fade" id="tab-08" role="tabpanel" aria-labelledby="tab-05">
            <Settings />
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

export default Gallery