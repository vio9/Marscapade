import {useState, useEffect} from 'react';
import axios from 'axios';
import {CircularProgress} from '@material-ui/core';

export default function ActivityList(){
    
    
    const [activityList, setActivityList] = useState([])
    const [loading, setLoading] = useState(true)




    useEffect(() => {
        const getActivityList = async () => {
            try{
                const activityList = await axios.get('fakeurl')
                setActivityList(activityList.data.results)
            } catch(err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
            
        }
        getActivityList()     
        
    }, [loading])
    
    
    
    
    return(
        {
            activityList.map((act) => {
                return(
                    <>
                    
                    </>
                )
            })
        }
       
    )
}