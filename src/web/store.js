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

    // url
    url:"http://127.0.0.1:3232/api/",
    // url:"https://admin.urgentrishta.co/api/",
    setUrl: action((e) => (store.url = e)),

    
    // url
    mediaUrl:"http://127.0.0.1:3232/",
    // mediaUrl:"https://admin.urgentrishta.co/",
    setMediaUrl: action((e) => (store.mediaUrl = e)),
      
  }));

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};
