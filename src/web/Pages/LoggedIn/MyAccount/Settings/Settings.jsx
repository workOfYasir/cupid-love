import React from 'react'
 
import { Observer } from "mobx-react-lite";

const Settings = () => {
   
  return (
    <Observer>
    {()=>(
        <>
            my Settings
        </>
    )}
    </Observer>
  )
}

export default Settings