import React from "react";
import "./Navbar.css";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = ({ sticky }) => (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
        <div className="navbar--logo-holder">
            {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
            <h1> MarsCapade</h1>
        </div>
        <ul className="navbar--link">
            <li className="navbar--link-item"><Link to="/">Home</Link></li>
            <li className="navbar--link-item"><Link to="/circuits">Circuits</Link></li>
            <li className="navbar--link-item"><Link to="/activities">Activities</Link></li>
        </ul>
    </nav>
)
export default Navbar