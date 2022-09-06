import { StoreProvider } from "./web/store";
import LinearLoader from "./web/Layouts/Loader";
import Routes from "./web/Router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <StoreProvider>
        <>
          <LinearLoader />
          <ToastContainer/>
          <Routes />
        </>
      </StoreProvider>
    </>
  );
}

export default App;
