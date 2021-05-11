import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';


export default function ActivityDetail(){

const [detail, setDetail] =useState([])
const [loading, setLoading] = useState(true)

const {id} = useParams()

    useEffect(() => {

        const getDetail = async () => {
            try{
                const detailData = await axios.get('fakeurl')
                setDetail(detailData.data)
            } catch(err) {
                console.log(err)
            } finally {
                setloading(false)
            }
        }
        getDetail()
    }, [id])
    if(loading) return <div>loading...</div>

    return(
        <>
        <Link to={`/`}>Accueil</Link>
        <h1>{detail.name}</h1>
        <img src={detail.image} alt="activity" />
        <p>{detail.description}</p>
        <p>{detail.duration}</p>
        <p>{difflevel}</p>
        <button>links réseaux?</button>
        <button>links visite virtuelle ?</button>
        <div>gallery?</div>
        </>
    )
}