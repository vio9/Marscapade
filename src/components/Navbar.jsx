import React from "react";
import "./Navbar.css";
import Logo from "../logo.svg";
import { Link } from "react-router-dom";


const Navbar = () => (
    <nav className="navbar">
        <div className="navbar--logo-holder">
            <h1>MarsCapade</h1>
        </div>
        <ul className="navbar--link">
            <li id="home" className="navbar--link-item"><Link to="/">Home</Link></li>
            <li id="circuits"className="navbar--link-item"><Link to="/circuits">Circuits</Link></li>
            <li id="activities"className="navbar--link-item"><Link to="/activities">Activities</Link></li>
        </ul>
    </nav>
)
export default Navbar