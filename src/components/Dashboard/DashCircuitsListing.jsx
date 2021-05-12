
import {useState, useEffect} from 'react';
import axios from 'axios';
import {CircularProgress} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


export default function DashCircuitListing() {

    const [circuitList, setCircuitList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getCircuitList = async () => {
            try{
                const response = await axios.get('http://localhost:8080/circuits')
                console.log('response', response)
                setCircuitList(response.data)
            } catch(err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
            
        }
        getCircuitList()     
        
    }, [loading])

    const handleDeleteCircuit = (id) => {
        const deleteCircuit = async () => {
            try{
                const response = await axios.delete(`http://localhost:8080/circuits/${id}`)
                setCircuitList(circuitList.filter((circuit) => circuit.id !== id))
            } catch(err) {
                console.log(err)
            }
            
        }
        deleteCircuit()
    }
    

    if(loading) return <CircularProgress />

    console.log('dash circuits')

    return(

        circuitList && circuitList.length > 0 && (
            circuitList.map((circuit, index) => {

                return (
                    <div key={index}>
                    <div>Circuit #{circuit.id}</div><div>img: {circuit.image_1}</div><div>Circuit title{circuit.title}</div>
                    <div>Circuit Desc: {circuit.description}</div><div>Price: {'pas chere'}</div><div>Location: {circuit.location}</div><div>Nbr de participant: {circuit.nbpax}</div>
                    <div><DeleteIcon onClick={() => handleDeleteCircuit(circuit.id)}/></div>
                    </div>
                )

            }
        )
        )
    )
}