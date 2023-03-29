import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import Events from "./Pages/Events";
import Home from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/"
            element={
              <CommonContainer>
                <LandingPage />
              </CommonContainer>
            } />

          <Route path="/login"
            element={
              <Login />
            } />

          <Route path="/signup"
            element={
              <SignupPage />
            } />

          <Route path="/home"
            element={
              <CommonContainer>
                <Home />
              </CommonContainer>
            } />
          
          <Route path="/events"
            element={
              <CommonContainer>
                <Events />
              </CommonContainer>
            } />

        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
