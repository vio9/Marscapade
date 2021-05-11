import React from "react"
import "./Navbar.css"

const Navbar = () => (
    <nav className="navbar">
        <div className="navbar--logo-holder">
            <h1>MarsCapade</h1>
        </div>
        <ul className="navbar--link">
            <li className="navbar--link-item">Home</li>
            <li className="navbar--link-item">Circuits</li>
            <li className="navbar--link-item">Activities</li>
        </ul>
    </nav>
)
export default Navbar