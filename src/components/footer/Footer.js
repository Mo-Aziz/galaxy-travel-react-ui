import React from "react";
import "./FooterStyles.css";
import {
  FaFacebook,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaSearchLocation,
  FaTwitter
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {/* left section */}
        <div className="left">
          <div className="location">
            <FaSearchLocation className="footer-icon" />
            <div>
              <p> 78787 6th St. </p>
              <h4> Houston, TX</h4>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone className="footer-icon" />
              1-512-512-5122{" "}
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk className="footer-icon" /> trips@galaxy.com{" "}
            </h4>
          </div>
        </div>
        {/* right section */}
        <div className="right">
          <h4>About The Company </h4>
          <p>
            
            First company to manage and plan trips to different galaxies,
            different worlds and diffeent planets out of the milky way galaxy.
          </p>
          <div className="social">
            <FaFacebook className="footer-icon" />
            <FaLinkedin className="footer-icon" />
            <FaTwitter className="footer-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
