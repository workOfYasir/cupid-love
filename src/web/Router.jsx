import React from "react";
import {BrowserRouter,Routes, Route  } from "react-router-dom";
import Home from './Pages/Home/Home'
import AuthHome from './Pages/LoggedIn/Home/Home'
import Pricing from './Pages/LoggedIn/Package/Pricing'
import CreateProfile from './Pages/CreateProfile/CreateProfile'
import PublicProfile from './Pages/LoggedIn/Profile/Profile'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes >
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/myaccount" element={<AuthHome/>} />
          <Route exact path="/matches" element={<AuthHome/>} />
          <Route exact path="/search" element={<AuthHome/>} />
          <Route exect path='/createProfile' element={<CreateProfile/>} />
          <Route exect path='/pricing' element={<Pricing/>} />
          <Route exact path="/public/profile/:userId" element={<PublicProfile/>} />
          
      </Routes >
    </BrowserRouter>
          
  )
}

export default Router