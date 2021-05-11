import React from "react";

export default function CardCircuit ({circuitName, picture, description, distance, duration, difflevel}) {
    return (
        <div className="cardCircuit">
            <img className="pictureCircuit" src={picture} alt={circuitName}/>
            <h2 className="titleCircuit">{circuitName}</h2>
            <p className="infosCircuit">{description}</p>
            <p className="infosCircuit"><i class="fas fa-user-astronaut"></i> Distance : {distance}</p>
            <p className="infosCircuit"><i class="fas fa-stopwatch"></i> Duration : {duration}</p>
            <p className="infosCircuit"><i class="fas fa-rocket"></i> Difficulty level : {difflevel}</p>
        </div>
    )
}