
import {useState, useEffect} from 'react';
import axios from 'axios';
import {CircularProgress} from '@material-ui/core';


export default function() {

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

    if(loading) return <CircularProgress />

    return(

        circuitList && circuitList.length > 0 && (
            circuitList.map((circuit) => {

                <div>
                    <div>Activity #{circuit.id}</div><div>img: {circuit.image_1}</div><div>activity title{circuit.title}</div>
                    <div>Activity Desc: {circuit.description}</div><div>Price: {'pas chere'}</div><div>Location: {circuit.location}</div><div>Nbr de participant: {circuit.nbpax}</div>

                </div>

            }
        )
        )
    )
}