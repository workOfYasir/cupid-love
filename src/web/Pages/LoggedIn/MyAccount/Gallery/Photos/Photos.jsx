import React from 'react'

import { Observer } from "mobx-react-lite";

const Photos = () => {
   
  return (
    <Observer>
    {()=>(
        <>
          
            
             <div className="row">

             
            <div className="col-3 p-1">
                <div className="thumbnail">
                <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='border p-1' style={{ border:"1px solid #eeeeee !important" }} srcset="" />
                    
                </div>
            </div>
            <div className="col-3 p-1">
                <div className="thumbnail">
                <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='border p-1' style={{ border:"1px solid #eeeeee !important" }} srcset="" />
                    
                </div>
            </div> 
            <div className="col-12 text-center">
            <a href="#" className="button btn-theme rouneded-sm animated right-icn">Browser Photo</a>
            
            </div>
            
            </div>
            Note: You can upload 20 photos to your profile. Each photos must be less than 15 MB and in jpg, gif, png, bmp or tiff format.
All photos uploaded are screened as per Photo Guidelines and 98% of those get activated within 2 hours.
        </>
    )}
    </Observer>
  )
}

export default Photos