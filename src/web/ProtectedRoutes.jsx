// In ProtectedRoutes.js
import { Navigate, Outlet } from "react-router-dom";
import React,{useState,useContext,useEffect} from "react";
import { StoreContext } from "./store";
import Error from './Error'
const ProtectedRoutes = () => {
  const store = useContext(StoreContext);
  useEffect(() => {
  },[store.token])
    return (store.token === true ? <Outlet /> : <Error/> )
}
export default ProtectedRoutes;