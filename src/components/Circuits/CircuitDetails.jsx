import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function CircuitDetails ({circuitName, picture, description, distance, duration, difflevel}) {
    
{/*
    const [circuitDetails, setCircuitDetails] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { id } = useParams()
    console.log("from detail", id)
    
    useEffect(() => {
    const getCircuitDetails = async () => {
        try {
            const circuitDetailsData = await axios.get(`/${id}`)
            setCircuitDetails(circuitDetailsData.data)
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    getCircuitDetails()
}, [id])


*/}
    
    return (
        <div className="cardCircuit">
                {/*<Link className="link" to="/">Back to home</Link>*/}
                <img className="pictureCircuit" src={picture} alt={circuitName}/>
                <h2 className="titleCircuit">{circuitName}</h2>
                <p className="infosCircuit">{description}</p>
                <p className="infosCircuit"><i class="fas fa-user-astronaut" style={{color:"#bd4f35"}}></i> Distance : {distance}</p>
                <p className="infosCircuit"><i class="fas fa-stopwatch" style={{color:"#bd4f35"}}></i> Duration : {duration}</p>
                <p className="infosCircuit"><i class="fas fa-rocket" style={{color:"#bd4f35"}}></i> Difficulty level : {difflevel}</p>
        </div>
    )
}