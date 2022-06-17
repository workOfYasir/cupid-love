import React from 'react'

import { Observer } from "mobx-react-lite";

const Settings = () => {
   
  return (
    <Observer>
    {()=>(
        <>
            <div className="d-sm-flex d-block">
                <div className="col-sm-6 col-12 ">
                    <b>Choose display option</b><br />
                    <div className="d-flex pt-3">
                        <input type="radio" className='p-1 align-self-center' name="option"  /><span className='px-2'>Visible to all Members</span> <span className="rounded p-1 font-size-10 align-self-center border primary-text">Recommended</span>
                    </div>
                    <div className="d-flex">
                        <input type="radio" className='p-1 align-self-center' name="option"  /><span className='px-2'>Visible to Members I like and to all Premium Members</span> <span className='align-self-center'><i className="fa fa-question-circle-o" aria-hidden="true"></i></span>
                    </div>
                    
                </div>
                <div className="col-sm-4 col-12 text-center pt-2 bg-grey">
                This is how your Photos will look to other Members
                    <div className="px-2 pb-5 pt-1 ">
                        
                    
                        <div className="thumbnail">
                        <img src={ process.env.PUBLIC_URL +"/images/thumbnail/thum-1.jpg"} alt="" className='border p-2 bg-white' style={{ border:"1px solid #eeeeee !important" }} srcset="" />
                            
                        </div>
                    </div>
                </div> 
            </div>
        </>
    )}
    </Observer>
  )
}

export default Settings