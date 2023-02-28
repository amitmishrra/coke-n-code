import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import Events from "./Pages/EventPage";
import Home from "./Pages/HomePage";
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
              <Login />
              // </CommonContainer>
            } />

          <Route path="/signup"
            element={
              // <CommonContainer>
              <SignupPage />
              // </CommonContainer>
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
      </BrowserRouter>
    </>
  );
}

export default App;
