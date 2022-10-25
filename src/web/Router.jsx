import React,{useEffect} from "react";
import {BrowserRouter,Routes, Route,Navigate,useLocation,useNavigate } from "react-router-dom";
import Home from './Pages/Home/Home'
import AuthHome from './Pages/LoggedIn/Home/Home'
import Pricing from './Pages/LoggedIn/Package/Pricing'
import CreateProfile from './Pages/CreateProfile/CreateProfile'
import PublicProfile from './Pages/LoggedIn/Profile/Profile'
import SearchedMatches from "./Pages/LoggedIn/Matches/SearchedMatches/SearchedMatches";
import ProtectedRoutes from "./ProtectedRoutes"
import PreventRoutes from "./PreventRoutes"
import Chatpanel from "./Pages/LoggedIn/Chat/chatpanel";
import FriendsTab from "./Pages/LoggedIn/FriendRequests/FriendsTab";
import Terms from "./Pages/Terms/Terms";
import AboutUs from "./Pages/AboutUs/AboutUs";

const Router = () => {
  const token = localStorage.getItem("accessToken");
  const authRoute = () => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    if(token!=null || token!='undefined' || token!=undefined){
      return (
      <Navigate to="/myaccount" replace/>
      )
    }else if(token==null || token=='undefined' || token==undefined){
      return (
      <Navigate to="/" replace/>
      )
    }
  }
  useEffect(() => {

  }, [token]);
  return (
    <BrowserRouter>
     

      <Routes>
          <Route exect path='/createProfile' element={<CreateProfile/>} />
          <Route exact path="/aboutus" element={<AboutUs/>} />
        <Route element={<PreventRoutes/>}>
        <Route exact path="/"  element={<Home/>} />
        </Route>
        <Route element={<ProtectedRoutes/>}>
          <Route exact path="/myaccount" element={<AuthHome/>} />
          <Route exact path="/matches" element={<AuthHome/>} />
          <Route exact path="/search" element={<AuthHome/>} />
          <Route exect path='/pricing' element={<Pricing/>} />
          <Route exact path="/public/profile/:userId" element={<PublicProfile/>} />
          <Route exect path='/chat' element={<Chatpanel/>} />
          <Route exact path="/searched/profile" element={<SearchedMatches/>} />
     
          <Route exact path="/friendslist" element={<FriendsTab/>} />
        </Route>
      </Routes>

    </BrowserRouter>
          
  )
}

export default Router