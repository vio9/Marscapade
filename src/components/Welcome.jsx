import React from "react"
import "./Welcome.css"
import Logo from "../logo.svg"

const Welcome = ({ element }) => {
    return (
        <main>
            <section 
            className="welcome" 
            >
                <div ref={element}>
                    {/* <img src={Logo} alt="logo" className="welcome--logo" /> */}
                    <h2>Welcome to MarsCapade ! Travel on Mars with us !</h2>
                    <button className="welcome__cta-primary">Contact us</button>
                </div>
            </section>
        </main>
    )
}

export default Welcome