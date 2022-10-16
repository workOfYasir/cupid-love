// In ProtectedRoutes.js
import { Navigate, Outlet } from "react-router-dom";
import React,{useState,useContext,useEffect} from "react";
import { StoreContext } from "./store";
import Error from './Error'
const ProtectedRoutes = () => {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");
 
    return (token !=null ? <Outlet /> :  <Navigate to="/" replace/> )
}
//
export default ProtectedRoutes;