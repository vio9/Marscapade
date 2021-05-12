import {useState, useEffect} from 'react';
import axios from 'axios';
import Activity from './Activity';
import {CircularProgress} from '@material-ui/core';
import './Circuits/Circuits.scss';


export default function ActivityList(){
   
    
    const [activityList, setActivityList] = useState([])
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        const getActivityList = async () => {
            try{
                const response = await axios.get('http://localhost:8081/activities')
                console.log('response', response)
                setActivityList(response.data)
            } catch(err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
            
        }
        getActivityList()     
        
    }, [loading])

    if(loading) return <CircularProgress />
    
    return(
        <div className="allCircuitsElements">
            <div className="titleContainer">
        <h1>LES ACTIVITES</h1></div>
        <div className="cardCircuitsContainer">
        { 
        activityList && activityList.length > 0 && (
        activityList.map((act) => {
                return(   
                    <Activity
                    id={act.id}
                    name={act.name}
                    image_1={act.image_1}
                    description={act.description} 
                    price={'10euros'}
                    location={act.location}
                    nbpax={act.nbpax}
                    />

                    
                )
            })
        )
        }
        </div>
        </div>
      
    )
} 