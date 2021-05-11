import React from "react"
import "./Welcome.css"

const Welcome = ({ element }) => {
    return (
        <main>
            <section className="welcome">
                <div ref={element}>
                    <h2>Welcome to MarsCapade ! Travel on Mars with us !</h2>
                </div>
            </section>
        </main>
    )
}

export default Welcome