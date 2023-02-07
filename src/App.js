import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
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
          
          <Route path="/signup"
            element={
              // <CommonContainer>
             <SignupPage/>
              // </CommonContainer>
            } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
