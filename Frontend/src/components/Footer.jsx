import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhone, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="hospital-footer">
        <div className="footer-top">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>We are dedicated to providing the best healthcare services to our patients. Our hospital is equipped with state-of-the-art facilities and a team of experienced professionals.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to={"/"} >Home</Link></li>
              <li><Link to={"/appointment"}>Appointment</Link></li>
              <li><Link to={"/about"}>About Us</Link></li>
             
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <div><FaPhone /><span>999-999-9999</span></div>
            <div><MdEmail /><span>contact@hospital.com</span></div>
            <div><FaMapMarkerAlt /><span>123 Hospital St, City, Country</span></div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 HospitalEase. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
