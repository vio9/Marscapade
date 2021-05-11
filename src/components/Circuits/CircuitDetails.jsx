import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function CircuitDetails () {
    
    const [circuitDetails, setCircuitDetails] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { id } = useParams()
    console.log("from detail", id)
    
    useEffect(() => {
        const getCircuitsDetails = async () => {
            try {
                const circuitsDetails = await axios.get(`http://localhost:8080/circuits/${id}`)
                setCircuitDetails(circuitsDetails.data)
            } catch(err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        getCircuitsDetails()
    }, [id])
    
    return (
        <div className="cardCircuit">
                <Link className="link" to="/">Back to home</Link>
                <img className="pictureCircuit" src={circuitDetails.image_1} alt={circuitDetails.title}/>
                <h2 className="titleCircuit">{circuitDetails.title}</h2>
                <p className="infosCircuit">{circuitDetails.description}</p>
                <p className="infosCircuit"><i class="fas fa-user-astronaut" style={{color:"#bd4f35"}}></i> Distance : {circuitDetails.distance}</p>
                <p className="infosCircuit"><i class="fas fa-stopwatch" style={{color:"#bd4f35"}}></i> Duration : {circuitDetails.duration}</p>
                <p className="infosCircuit"><i class="fas fa-rocket" style={{color:"#bd4f35"}}></i> Difficulty level : {circuitDetails.difflevel}</p>
        </div>
    )
}