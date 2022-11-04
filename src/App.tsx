import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./components/authentication/AuthenticationPage";
import ProfilePage from "./components/profile/ProfilePage";
import ShopPage from "./components/shop/ShopPage";

const loggedIn = true;

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar/>
              <Routes>
                  {/*if not logged in display only the authentication page - try to do it better*/}
                  <Route path="/" element={loggedIn ? <ProfilePage/> : <AuthenticationPage/>}/>
                  <Route path="/profile" element={loggedIn ? <ProfilePage/> :  <AuthenticationPage/>}/>
                  <Route path="/shop" element={loggedIn ? <ShopPage/> : <AuthenticationPage/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
