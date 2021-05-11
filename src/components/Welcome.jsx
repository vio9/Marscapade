import React from "react"

import "./Welcome.css"
import Logo from "../logo.svg"

const Welcome = ({ element }) => {
    return (
        <main>
            <section className="welcome">
                <div ref={element}>
                    <img src={Logo} alt="logo" className="welcome--logo" />
                    <p>Welcome to MarsCapade ! Travel on Mars with us !</p>
                    <button className="welcome__cta-primary">Contact us</button>
                </div>
            </section>
        </main>
    )
}

export default Welcome