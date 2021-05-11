import React from "react";

export default function CardCircuit ({circuitName, picture, description, distance, duration, difflevel}) {
    return (
        <div className="cardCircuit">
                <img className="pictureCircuit" src={picture} alt={circuitName}/>
                <h2 className="titleCircuit">{circuitName}</h2>
                <p className="infosCircuit">{description}</p>
                <p className="infosCircuit"><i class="fas fa-user-astronaut" style={{color:"#bd4f35"}}></i> Distance : {distance}</p>
                <p className="infosCircuit"><i class="fas fa-stopwatch" style={{color:"#bd4f35"}}></i> Duration : {duration}</p>
                <p className="infosCircuit"><i class="fas fa-rocket" style={{color:"#bd4f35"}}></i> Difficulty level : {difflevel}</p>
        </div>
    )
}