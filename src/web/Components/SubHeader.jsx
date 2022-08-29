import React,{useContext} from 'react'
import {  useLocation} from "react-router-dom";
import { Observer } from "mobx-react-lite";
import Profile from '../Pages/LoggedIn/MyAccount/Profile/Profile'
import Dashboard from '../Pages/LoggedIn/MyAccount/Dashboard/Dashboard'
import Gallery from '../Pages/LoggedIn/MyAccount/Gallery/Gallery'
import More from '../Pages/LoggedIn/MyAccount/More/More'
import PartnerPreference from '../Pages/LoggedIn/MyAccount/PartnerPreference/PartnerPreference'
import Settings from '../Pages/LoggedIn/MyAccount/Settings/Settings'
import MoreMatches from '../Pages/LoggedIn/Matches/MoreMatches/MoreMatches'
import MyMatches from '../Pages/LoggedIn/Matches/MyMatches/MyMatches'
import NearMe from '../Pages/LoggedIn/Matches/NearMe/NearMe'
import NewMatches from '../Pages/LoggedIn/Matches/NewMatches/NewMatches'
import RecentlyView from './../Pages/LoggedIn/Matches/RecentlyView/RecentlyView'
import BasicSearch from './../Pages/LoggedIn/Search/BasicSearch/BasicSearch'
import AdvanceSearch from './../Pages/LoggedIn/Search/AdvanceSearch/AdvanceSearch'
import { StoreContext } from "./../store";
import Header from './Header'

const SubHeader = () => {
  const location = useLocation()
  const store = useContext(StoreContext);

  return (
    <Observer>
    {() => (
        <>
        <Header/>
        <div className='col-12'>
        {(location.pathname=='/myaccount') ? (
          <>
          <div className="text-center">
          <div className="justify-content-center">
              
            <ul className={(store.subHeader==false)?('profile-sub-nav primary-bg shadow nav nav-tabs d-flex justify-content-center col-12 nav-tabs-02'):('profile-sub-nav primary-bg shadow nav nav-tabs justify-content-center col-12 nav-tabs-02 d-none d-sm-flex')} role="tablist">
              <li className="nav-item">
                <a className="btn text-light  active ms-0" id="tab-01" data-bs-toggle="tab" href="#tab-10" role="tab" aria-controls="tab-10" aria-selected="true">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="btn text-light " id="tab-02" data-bs-toggle="tab" href="#tab-11" role="tab" aria-controls="tab-11" aria-selected="false">My Profile</a>
              </li>
              <li className="nav-item">
                <a className="btn text-light " id="tab-03" data-bs-toggle="tab" href="#tab-12" role="tab" aria-controls="tab-12" aria-selected="false">My Photos</a>
              </li>
              <li className="nav-item">
                <a className="btn text-light " id="tab-04" data-bs-toggle="tab" href="#tab-13" role="tab" aria-controls="tab-13" aria-selected="false">Partnership Prefernces</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="tab-10" role="tabpanel" aria-labelledby="tab-01">
            <p><Dashboard /></p>
          </div>
          <div className="tab-pane fade" id="tab-11" role="tabpanel" aria-labelledby="tab-02">
            <p>
                <Profile />
            </p>
          </div>
          <div className="tab-pane fade" id="tab-12" role="tabpanel" aria-labelledby="tab-02">
            <p><Gallery /></p>
          </div>
          <div className="tab-pane fade" id="tab-13" role="tabpanel" aria-labelledby="tab-03">
            <p><PartnerPreference/></p>
          </div>
          {/* <div className="tab-pane fade" id="tab-14" role="tabpanel" aria-labelledby="tab-04">
            <p><Settings /></p>
          </div>
          <div className="tab-pane fade" id="tab-15" role="tabpanel" aria-labelledby="tab-05">
            <p><More /></p>
          </div> */}
        </div>
          </>
        ) : (location.pathname=='/matches') ? (
          <>
          <div className="text-center">
          <div className="justify-content-center">
              
            <ul className={(store.subHeader==false)?('matches-sub-nav primary-bg shadow nav nav-tabs d-flex justify-content-center col-12 nav-tabs-02'):('matches-sub-nav primary-bg shadow nav nav-tabs justify-content-center col-12 nav-tabs-02 d-none d-sm-flex')} role="tablist">
              {/* <li className="nav-item">
                <a className="btn text-light  active ms-0" id="tab-01" data-bs-toggle="tab" href="#tab-10" role="tab" aria-controls="tab-10" aria-selected="true">New Matches</a>
              </li> */}
              <li className="nav-item">
                <a className="btn text-light " id="tab-02" data-bs-toggle="tab" href="#tab-11" role="tab" aria-controls="tab-11" aria-selected="false">My Matches</a>
              </li>
              <li className="nav-item">
                <a className="btn text-light " id="tab-04" data-bs-toggle="tab" href="#tab-13" role="tab" aria-controls="tab-13" aria-selected="false">Recently Viewed</a>
              </li>
              {/* <li className="nav-item">
                <a className="btn text-light " id="tab-05" data-bs-toggle="tab" href="#tab-14" role="tab" aria-controls="tab-14" aria-selected="false">More Matches</a>
              </li> */}
           
            </ul>
          </div>
        </div>
        <div className="tab-content">
          {/* <div className="tab-pane fade active show" id="tab-10" role="tabpanel" aria-labelledby="tab-01">
            <p><NewMatches /></p>
          </div> */}
          <div className="tab-pane fade" id="tab-11" role="tabpanel" aria-labelledby="tab-02">
            <p>
                <MyMatches />
            </p>
          </div>
          <div className="tab-pane fade" id="tab-13" role="tabpanel" aria-labelledby="tab-03">
            <p><RecentlyView/></p>
          </div>
          {/* <div className="tab-pane fade" id="tab-14" role="tabpanel" aria-labelledby="tab-04">
            <p><MoreMatches /></p>
          </div>
           */}
        </div>
          </>
          ) : (location.pathname=='/search') ? (
          <>
          <div className="text-center">
          <div className="justify-content-center">
              
            <ul className={(store.subHeader==false)?('search-sub-nav primary-bg shadow nav nav-tabs d-flex justify-content-center col-12 nav-tabs-02'):('profile-sub-nav primary-bg shadow nav nav-tabs justify-content-center col-12 nav-tabs-02 d-none d-sm-flex')} role="tablist">
              <li className="nav-item">
                <a className="btn text-light  active ms-0" id="tab-01" data-bs-toggle="tab" href="#tab-10" role="tab" aria-controls="tab-10" aria-selected="true">Basic Search</a>
              </li>
              <li className="nav-item">
                <a className="btn text-light " id="tab-02" data-bs-toggle="tab" href="#tab-11" role="tab" aria-controls="tab-11" aria-selected="false">Advance Search</a>
              </li>
              
           
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade active show" id="tab-10" role="tabpanel" aria-labelledby="tab-01">
            <p><BasicSearch /></p>
          </div>
          <div className="tab-pane fade" id="tab-11" role="tabpanel" aria-labelledby="tab-02">
            <p>
                <AdvanceSearch />
            </p>
          </div>
          
        </div>
          </>
        ) : ("")}
        </div>
        </>
    )}
    </Observer>
  )
}

export default SubHeader