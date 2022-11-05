import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthenticationPage from "./components/authentication/AuthenticationPage";
import ProfilePage from "./components/profile/ProfilePage";
import ShopPage from "./components/shop/ShopPage";
import Register from "./components/authentication/Register";
import {useAppSelector} from "./hooks";
import CoursesPage from "./components/courses/CoursesPage";
import CourseSelectionPage from "./components/courses/CourseSelectionPage";
import Question from "./components/courses/QuestionView";
import CourseDetailView from "./components/courses/CourseDetailView";



function App() {
    const loggedIn = useAppSelector((state) => state.userSlice.isLogin);
  return (
      <Router>
          <div className="App">
              {loggedIn && <Navbar cash={3}/>}
              <Routes>
                  <Route path="/" element={loggedIn ? <ProfilePage/> : <AuthenticationPage/>}/>
                  <Route path="/profile" element={loggedIn ? <ProfilePage/> :  <AuthenticationPage/>}/>
                  <Route path="/shop" element={loggedIn ? <ShopPage/> : <AuthenticationPage/>}/>
                  <Route path="/courses" element={loggedIn ? <CoursesPage/> : <AuthenticationPage/>}/>
                  <Route path="/course-type/:type" element={loggedIn ? <CourseSelectionPage/> : <AuthenticationPage/>}/>
                  <Route path="/course/:id" element={loggedIn ? <CourseDetailView/> : <AuthenticationPage/>}/>
                  <Route path="/register" element={!loggedIn && <Register/>}/>
              </Routes>
          </div>
      </Router>
  );
}

export default App;
