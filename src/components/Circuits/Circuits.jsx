import WallE from "../WallE/WallE";
import React from "react";
import CardCircuit from "./CardCircuit";
import axios from "axios";
import "./Circuits.scss";
import { useState, useEffect } from "react";

export default function Circuits() {
  const [circuitsList, setCircuitsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCircuitsList = async () => {
      try {
        const circuitsList = await axios.get("http://localhost:8081/circuits");
        setCircuitsList(circuitsList.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getCircuitsList();
  }, []);

  console.log(circuitsList);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="allCircuitsElements">
      <WallE />
      <div className="titleContainer">
        <h1>LES CIRCUITS</h1>
      </div>
      <div className="cardCircuitsContainer">
        {circuitsList.map((circuit) => (
          <CardCircuit
            id={circuit.id}
            circuitName={circuit.title}
            picture={circuit.image_1}
            distance={circuit.distance}
            duration={circuit.duration}
            difflevel={circuit.difflevel}
          />
        ))}
      </div>
    </div>
  );
}
