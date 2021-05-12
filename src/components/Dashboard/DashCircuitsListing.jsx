import "./Dashboard.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export default function DashCircuitListing() {
  const [circuitList, setCircuitList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCircuitList = async () => {
      try {
        const response = await axios.get("http://localhost:8080/circuits");
        console.log("response", response);
        setCircuitList(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getCircuitList();
  }, [loading]);

  const handleDeleteCircuit = (id) => {
    const deleteCircuit = async () => {
      try {
        const response = await axios.delete(
          `http://localhost:8080/circuits/${id}`
        );
        setCircuitList(circuitList.filter((circuit) => circuit.id !== id));
      } catch (err) {
        console.log(err);
      }
    };
    deleteCircuit();
  };

  if (loading) return <CircularProgress />;

  console.log("dash circuits");

  return (
    circuitList &&
    circuitList.length > 0 &&
    circuitList.map((circuit, index) => {
      return (
        <div className="dash-item" key={index}>
          <div className="item-head">
            <h3>
              #{circuit.id} {circuit.title}
            </h3>
            <DeleteIcon onClick={() => handleDeleteCircuit(circuit.id)} />
          </div>
          <div className="dash-imgs">
            {circuit.image_1 && <img src={circuit.image_1}></img>}
            {circuit.image_2 && <img src={circuit.image_2}></img>}
            {circuit.image_3 && <img src={circuit.image_3}></img>}
            {circuit.image_4 && <img src={circuit.image_4}></img>}
          </div>
          <p>Circuit Desc: {circuit.description}</p>
          <p>Distance: {circuit.distance}m</p>
          <p>Durée: {circuit.duration}</p>
          <p>Difficulté: {circuit.difflevel}</p>
        </div>
      );
    })
  );
}
