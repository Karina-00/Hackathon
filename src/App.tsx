import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./components/authentication/AuthenticationPage";
import ProfilePage from "./components/profile/ProfilePage";
import ShopPage from "./components/shop/ShopPage";
import Register from "./components/authentication/Register";
import {useAppSelector} from "./hooks";



function App() {
    const loggedIn = useAppSelector((state) => state.userSlice.isLogin);
  return (
      <Router>
          <div className="App">
              <Navbar
                cash={3}
              />
              <Routes>
                  {/*if not logged in display only the authentication page - try to do it better*/}
                  <Route path="/" element={loggedIn ? <ProfilePage/> : <AuthenticationPage/>}/>
                  <Route path="/profile" element={loggedIn ? <ProfilePage/> :  <AuthenticationPage/>}/>
                  <Route path="/shop" element={loggedIn ? <ShopPage/> : <AuthenticationPage/>}/>
                  <Route path="/register" element={!loggedIn && <Register/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
