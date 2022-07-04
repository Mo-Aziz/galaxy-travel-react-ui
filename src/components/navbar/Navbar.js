import React, { useState } from "react";
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // handling state for the hamburger icon clicking and events triggering.
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  //adding the overlay color for the header when scroll down
  const [color, setColor] = useState(false);


  // change color function when scrolling down
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  // adding event listener.
  window.addEventListener('scroll', changeColor)


  return (
    <div className={color ? 'header header-bg' : 'header'}>
      <Link to="/">
        <h1> Galaxy TRVL </h1>
      </Link>
      {/* navagation menu */}
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/training">Training</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? <FaTimes className="icon" /> : <FaBars className="icon" />}
      </div>
    </div>
  );
};

export default Navbar;
