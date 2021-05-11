import React from "react";
import dataCircuits from "./DataCircuits";
import CardCircuit from "./CardCircuit";
import "./Circuits.css";

export default function Circuits () {
    return (
        <>
        <h1 className="title">LES CIRCUITS</h1>
        <div className="cardCircuitContainer">
            {dataCircuits.map((circuit) =>(
                <CardCircuit {... circuit}/>
            ))}
        </div>
        </>
    )
}