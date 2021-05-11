import React from "react"
import "./Navbar.css"
import Logo from "../logo.svg"

const Navbar = ({ sticky }) => (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
        <div className="navbar--logo-holder">
            {sticky ? <img src={Logo} alt="logo" className="navbar--logo" /> : null}
            <h1> MarsCapade</h1>
        </div>
        <ul className="navbar--link">
            <li className="navbar--link-item">Home</li>
            <li className="navbar--link-item">Circuits</li>
            <li className="navbar--link-item">Activities</li>
            <li className="navbar--link-item">Contact</li>
        </ul>
    </nav>
)
export default Navbar