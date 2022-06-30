import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // handling state for the hamburger icon clicking and events triggering.
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to="/">
        <h1> Galaxy TRVL </h1>
      </Link>
      {/* navagation menu */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/">Pricing</Link>
        </li>
        <li>
          <Link to="/">Training</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </div>
  );
};

export default Navbar;
