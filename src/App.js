import { StoreProvider } from "./web/store";
import LinearLoader from "./web/Layouts/Loader";
import Routes from "./web/Router";


function App() {

  return (
    <>
      <StoreProvider>
        <>
          <LinearLoader />
          <Routes />
        </>
      </StoreProvider>
    </>
  );
}

export default App;
