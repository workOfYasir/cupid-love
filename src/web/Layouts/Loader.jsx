import React,{useContext} from 'react'
import { StoreContext } from "../store";
import { Observer } from "mobx-react-lite";

const Loader = () => {
    const store = useContext(StoreContext);
  return (
     <Observer>
    {() =>
      store.linearLoader ? (
          <>
          <div id="preloader">
            <div className="clear-loading loading-effect"><img src={window.location.origin +"images/loading.gif"} alt="" /></div>
        </div>
        <div id="ajaxloader" ><img className="center-block" src={window.location.origin +"/images/loading.gif"} alt="" /></div>
          </>
        
      ) : null
    }
  </Observer>
  )
}

export default Loader