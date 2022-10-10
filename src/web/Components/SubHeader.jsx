import React,{useState,useContext,useEffect} from 'react'
import {Link, useLocation} from "react-router-dom";
import { Observer } from "mobx-react-lite";
import Profile from '../Pages/LoggedIn/MyAccount/Profile/Profile'
import TodayProfile from '../Pages/LoggedIn/Matches/TodayProfile/Profile'
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

  const [componentCount, setComponentCount] = useState([]);

  const onClickAddDashboardComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<Dashboard/>));
      console.log(componentCount)
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      store.setCount(0);
      setComponentCount(componentCount.concat(<Dashboard/>));
    }
  };
  const onClickAddProfileComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<Profile/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      store.setCount(0);
      setComponentCount(componentCount.concat(<Profile/>));
    }
  };
  const onClickAddTodayProfileComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<TodayProfile/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      store.setCount(0);
      setComponentCount(componentCount.concat(<TodayProfile/>));
    }
  };
  const onClickAddGalleryComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<Gallery/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      store.setCount(0);
      setComponentCount(componentCount.concat(<Gallery/>));
    }
  };
  const onClickAddMoreComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<More/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      store.setCount(0);
      setComponentCount(componentCount.concat(<More/>));
    }
  };
  const onClickAddPartnerPreferenceComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<PartnerPreference/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      store.setCount(0);
      setComponentCount(componentCount.concat(<PartnerPreference/>));
    }
  };
  const onClickAddSettingsComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<Settings/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      setComponentCount(componentCount.concat(<Settings/>));
      store.setCount(0);
    }
  };
  const onClickAddMoreMatchesComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<MoreMatches/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      setComponentCount(componentCount.concat(<MoreMatches/>));
      store.setCount(0);
    }
  };
  const onClickAddMyMatchesComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<MyMatches/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      setComponentCount(componentCount.concat(<MyMatches/>));
      store.setCount(0);
    }
  };
  const onClickAddNearMeComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<NearMe/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      setComponentCount(componentCount.concat(<NearMe/>));
      store.setCount(0);
    }
  };
  const onClickAddNewMatchesComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<NewMatches/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      setComponentCount(componentCount.concat(<NewMatches/>));
      store.setCount(0);
    }
  };
  const onClickAddRecentlyViewComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<RecentlyView/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      setComponentCount(componentCount.concat(<RecentlyView/>));
      store.setCount(0);
    }
  };
  const onClickAddBasicSearchComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<BasicSearch/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      setComponentCount(componentCount.concat(<BasicSearch/>));
      store.setCount(0);
    }
  };
  const onClickAddAdvanceSearchComponent = event => {
    if(store.count===0){
      setComponentCount(componentCount.concat(<AdvanceSearch/>));
      store.setCount(store.count++);
    }else if(store.count>0){
      setComponentCount(componentCount.splice(-1));
      setComponentCount(componentCount.concat(<AdvanceSearch/>));
      store.setCount(0);
    }
  };
  //
  useEffect(() => {
    console.log('store.count,componentCount.location===>',location)
    if(location.pathname==='/search'){
      onClickAddBasicSearchComponent()
      store.setCount(0)
    }else if(location.pathname==='/matches'){
      onClickAddNewMatchesComponent()
      store.setCount(0)
    }else if(location.pathname==='/myaccount'){
      onClickAddDashboardComponent()
      store.setCount(0)
    }
  }, [location.pathname,store.count]);
  //




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
                <a className="btn text-light ms-0" onClick={onClickAddDashboardComponent} >Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="btn text-light " onClick={onClickAddProfileComponent}>My Profile</a>
              </li>
              <li className="nav-item">
                <a className="btn text-light " onClick={onClickAddGalleryComponent}>My Photos</a>
              </li>
              <li className="nav-item">
                <a className="btn text-light " onClick={onClickAddPartnerPreferenceComponent}>Partnership Prefernces</a>
              </li>
              {/*<li>*/}
              {/*  <Link*/}
              {/*      to="/chat"*/}
              {/*  >*/}
              {/*    CHat*/}
              {/*  </Link>*/}
              {/*</li>*/}
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div> {componentCount}</div>
        </div>
          </>
        ) : (location.pathname=='/matches') ? (
          <>
          <div className="text-center">
          <div className="justify-content-center">
              
            <ul className={(store.subHeader==false)?('matches-sub-nav primary-bg shadow nav nav-tabs d-flex justify-content-center col-12 nav-tabs-02'):('matches-sub-nav primary-bg shadow nav nav-tabs justify-content-center col-12 nav-tabs-02 d-none d-sm-flex')} role="tablist">
              <li className="nav-item">
                <a className="btn text-light   ms-0" onClick={onClickAddNewMatchesComponent}>New Matches</a>
              </li>
              <li className="nav-item">
                <a className="btn text-light " onClick={onClickAddMyMatchesComponent}>My Matches</a>
              </li>
              <li className="nav-item">
                <a className="btn text-light " onClick={onClickAddRecentlyViewComponent}>Recently Viewed</a>
              </li>
               <li className="nav-item">
                <a className="btn text-light " onClick={onClickAddTodayProfileComponent}>Today Match</a>
              </li>
           
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div>  {componentCount} </div>
        </div>
          </>
          ) : (location.pathname=='/search') ? (
          <>
          <div className="text-center">
          <div className="justify-content-center">
              
            <ul className={(store.subHeader==false)?('search-sub-nav primary-bg shadow nav nav-tabs d-flex justify-content-center col-12 nav-tabs-02'):('profile-sub-nav primary-bg shadow nav nav-tabs justify-content-center col-12 nav-tabs-02 d-none d-sm-flex')} role="tablist">
              <li className="nav-item">
                <a className="btn text-light  active ms-0"
                 onClick={() => {
                  store.matchesVisibility == true
                    ? store.setMatchesVisibility(false)
                    :   (store.matchesVisibility == false ?store.setMatchesVisibility(false):store.setMatchesVisibility(false))
                    ; onClickAddBasicSearchComponent()
                }}
                >Basic Search</a>
              </li>
              <li className="nav-item">
                <a className="btn text-light "
                  onClick={() => {
                    store.matchesAdvanceVisibility == true
                      ? store.setMatchesAdvanceVisibility(false)
                      :   (store.matchesAdvanceVisibility == false ?store.setMatchesAdvanceVisibility(false):store.setMatchesAdvanceVisibility(false))
                      ; onClickAddAdvanceSearchComponent()
                  }}
                id="tab-02">Advance Search</a>
              </li>
              
           
            </ul>
          </div>
        </div>
        <div className="tab-content">
          <div> {componentCount} </div>
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