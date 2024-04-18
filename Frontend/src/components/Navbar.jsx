import axios from "axios";
import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const navigateTo = useNavigate()
  const handleLogout = async() =>{
      
        await axios.get("http://localhost:4000/api/v1/user/patient/logout", {
          withCredentials: true
        }).then(res =>{
          toast.success(res.data.message);
          setIsAuthenticated(false)
        }).catch(err =>{
          toast.error(err.response.data.message )
        })
      
  }

  const gotoLogin = async() =>{
    navigateTo("/login")
  }
  return (
    <div>
      <nav className="container">
        <div className="logo">HospitalEase</div>
        <div className={show ? "navlinks showmenu" : "navlinks"}>
          <div className="links">
            <Link to={"/"}>Home</Link>
            <Link to={"/appointment"}>Appointment</Link>
            <Link to={"/about"}>About Us</Link>
          </div>

          {isAuthenticated ? (
            <button className="logoutBtn btn" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="logoutBtn" onClick={gotoLogin}>
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
