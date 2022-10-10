import React from "react";
import { useLocalObservable } from "mobx-react-lite";
import { action } from "mobx";

export const StoreContext = React.createContext();

export const StoreProvider = (props) => {
  const store = useLocalObservable(() => ({
    // logged-in user id
    id: "",
    setId: action((e) => (store.id = e)),

    // linear loader
    linearLoader: false,
    setLinearLoader: action((e) => (store.linearLoader = e)),

    //subHeader
    subHeader: true,
    setSubHeader: action((e) => (store.subHeader = e)),

    // matchesVisible
    matchesVisibility: false,
    setMatchesVisibility: action((e) => (store.matchesVisibility = e)),

    //matchesAdvanceVisibility
    matchesAdvanceVisibility: false,
    setMatchesAdvanceVisibility: action((e) => (store.matchesAdvanceVisibility = e)),

    token: false,
    setToken: action((e) => (store.token = e)),

    forgotPassword: false,
    setForgotPassword: action((e) => (store.token = e)),

    auth:false,
    setAuth: action((e) => (store.auth = e)),

    count: 0,
    setCount: action((e) => (store.token = e)),

    requests: ([]),
    setRequests: action((e) => (store.token = e)),

    countFriendRequests:0,
    setCountFriendRequests: action((e) => (store.token = e)),

    // url
    url:"http://127.0.0.1:8000/api/",
    // url:"http://urgentrishtaadmin.urgentrishta.co/api/",
    setUrl: action((e) => (store.url = e)),

    
    // url
    mediaUrl:"http://127.0.0.1:8000/",
    // mediaUrl:"http://urgentrishtaadmin.urgentrishta.co/public/",
    setMediaUrl: action((e) => (store.mediaUrl = e)),
      
  }));

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};
