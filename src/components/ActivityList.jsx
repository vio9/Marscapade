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

    if(loading) return <CircularProgress />

    return(
        <>
            <Activity />
            <Activity />
            <Activity />
            <Activity />
        </>
    )
    
    /*
    
    return(
        <>
        {activityList.map((act) => {
                return(
                    <Wrapper>
                        
                    <Activity
                    id={act.id}
                    name={act.name}
                    description={act.description} 
                    price={act.price}
                    location={act.location}
                    nbpax={act.nbpax}
                    />

                    </Wrapper>
                )
            })
        }
      </> 
    )*/
} 