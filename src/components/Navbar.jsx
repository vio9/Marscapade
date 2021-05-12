import React from "react";
import "./Navbar.css";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar--logo-holder">
      <Link to="/">
        <h1>MarsCapade</h1>
      </Link>
    </div>
    <ul className="navbar--link">
      <li id="home" className="navbar--link-item">
        <Link to="/">Home</Link>
      </li>
      <li id="circuits" className="navbar--link-item">
        <Link to="/circuits">Circuits</Link>
      </li>
      <li id="activities" className="navbar--link-item">
        <Link to="/activities">Activities</Link>
      </li>
      <li id="dashboard" className="navbar--link-item">
        <Link to="/dashlogin">Dashboard</Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
