// In ProtectedRoutes.js
import { Navigate, Outlet } from "react-router-dom";
import React,{useState,useContext,useEffect} from "react";
import { StoreContext } from "./store";
import Error from './Error'
const PreventRoutes = () => {
    const store = useContext(StoreContext);
    useEffect(() => {
        },[store.token])
    return (store.token === false ? <Outlet /> : <Navigate to="/myaccount" replace/> )
}
export default PreventRoutes;