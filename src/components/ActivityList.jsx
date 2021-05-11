import {useState, useEffect} from 'react';
import axios from 'axios';
import Activity from './Activity';
import {CircularProgress} from '@material-ui/core';






export default function ActivityList(){
    
    
    const [activityList, setActivityList] = useState([])
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        const getActivityList = async () => {
            try{
                const response = await axios.get('http://localhost:8080/activities')
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
        <>
        <h1>Activités</h1>
        { 
        activityList && activityList.length > 0 && (
        activityList.map((act) => {
                return(   
                    <Activity
                    id={act.id}
                    title={act.title}
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
      </> 
    )
} 