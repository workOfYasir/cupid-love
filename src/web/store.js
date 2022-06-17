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

   
  }));

  return (
    <StoreContext.Provider value={store}>
      {props.children}
    </StoreContext.Provider>
  );
};
