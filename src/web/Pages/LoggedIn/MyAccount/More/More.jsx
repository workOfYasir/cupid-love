import React from 'react'
 

import { Observer } from "mobx-react-lite";

const More = () => {
   
  return (
    <Observer>
    {()=>(
        <>
            my More
        </>
    )}
    </Observer>
  )
}

export default More