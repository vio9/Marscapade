import React from "react"
import "./Welcome.css"

const Welcome = () => {

    return (
        <main>
            <section className="welcome">
                <div>
                    <h2>Welcome to MarsCapade ! Travel on Mars with us !</h2>
                    <iframe
                        src="/mars-live.html"
                        id="marsLive"
                        className="mars-live"
                        title="mars-live"
                    ></iframe>
                </div>
            </section>
        </main>
    )
}

export default Welcome