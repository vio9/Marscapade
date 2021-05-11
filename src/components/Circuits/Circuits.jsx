import React from "react";
import dataCircuits from "./DataCircuits";
import CardCircuit from "./CardCircuit";
import "./Circuits.scss";

export default function Circuits () {
    return (
        <div className="allCircuitsElements">
            <div className="titleContainer">
                <h1>LES CIRCUITS</h1>
            </div>
            <div className="cardCircuitsContainer">
                {dataCircuits.map((circuit) =>(
                    <CardCircuit {... circuit}/>
                ))}
            </div>
        </div>
    )
}