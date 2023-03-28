import { Route, Routes, HashRouter, BrowserRouter } from "react-router-dom";
import CommonContainer from "./CommonContainer";
import Events from "./Pages/EventPage";
import Home from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import SingularEvent from "./Pages/EventPage/singularEvents";
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
          <Route path="/si"
            element={
              <CommonContainer>
                <SingularEvent />
              </CommonContainer>
            } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
