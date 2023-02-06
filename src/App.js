import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"
            element={
              <CommonContainer>
                <LandingPage />
              </CommonContainer>
            } />

          <Route path="/login"
            element={
              // <CommonContainer>
                <Login/>
              // </CommonContainer>
            } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
