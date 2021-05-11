
import {useState, useEffect} from 'react';
import axios from 'axios';
import {CircularProgress} from '@material-ui/core';


export default function() {

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

    console.log('activities', activityList)
    if(loading) return <CircularProgress />

    return(

        activityList && activityList.length > 0 && (
            activityList.map((act) => {

                <div>
                    <div>Activity #{act.id}</div><div>img: {act.image_1}</div><div>activity title{act.title}</div>
                    <div>Activity Desc: {act.description}</div><div>Price: {'pas chere'}</div><div>Location: {act.location}</div><div>Nbr de participant: {act.nbpax}</div>

                </div>

            }
        )
        )
    )
}