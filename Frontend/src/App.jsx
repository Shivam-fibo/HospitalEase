import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import AboutUs from "./Pages/AboutUs";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.min.css";
import { Context } from "./main";
import { useContext } from "react";
import { useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer";

const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const respone = await axios.get(
          "http://localhost:4000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true)
        setUser(respone.data.user)
      } catch (error) {
        setIsAuthenticated(false);
        setUser({})
      }
    };
    fetchUser()
  }, [isAuthenticated]);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
