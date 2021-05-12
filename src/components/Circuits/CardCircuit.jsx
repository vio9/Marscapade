import React from "react";
import { Link } from "react-router-dom";

export default function CardCircuit({
  id,
  circuitName,
  picture,
  distance,
  duration,
  difflevel,
}) {
  return (
    <div className="cardCircuit">
      <img className="pictureCircuit" src={picture} alt={circuitName} />
      <div className="circuit-detail">
        <h2 className="titleCircuit">{circuitName}</h2>
        <div className="circuit-info">
          <p className="infosCircuit">
            <i
              className="fas fa-user-astronaut"
              style={{ color: "#bd4f35" }}
            ></i>{" "}
            Distance : {distance}
          </p>
          <p className="infosCircuit">
            <i className="fas fa-stopwatch" style={{ color: "#bd4f35" }}></i>{" "}
            Duration : {duration}
          </p>
          <p className="infosCircuit">
            <i className="fas fa-rocket" style={{ color: "#bd4f35" }}></i>{" "}
            Difficulty level : {difflevel}
          </p>
        </div>
        <Link to={`/circuits/${id}`} className="seeMoreCircuit">
          Voir plus
        </Link>
      </div>
    </div>
  );
}
