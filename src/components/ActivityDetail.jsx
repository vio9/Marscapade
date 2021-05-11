import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import Exemple from './Exemple.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';





export default function ActivityDetail(){

        const [detail, setDetail] =useState([])
        const [loading, setLoading] = useState(true)

        const {id} = useParams()

            useEffect(() => {

                const getDetail = async () => {
                    try{
                        const detailData = await axios.get('http://localhost:8080/activities/id')
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
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={/*detail.image*/}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Title demo {/*{detail.name}*/}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
               industry's standard dummy text ever since th
              e 1500s, when an unknown printer took a galley of type and scrambled it to make a type s
              pecimen book. It{/*detail.description*/}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Typography variant="overline">
           Prix :{/*{price}*/} euros
           </Typography>
  
           <Typography variant="overline">
           Durée : {/*{detail.duration}*/}
           </Typography>
  
           <Typography variant="overline">
           location: {/*{location}*/}
           </Typography>

           <Typography variant="overline">
          Difficulté : {/*{difflevel}*/}
           </Typography>

           <Typography variant="overline">
          Nombre de participants : {/*{nbpax}*/}
           </Typography>

          <Button size="small" color="primary">
            Share ! {/**links réseaux?*/}
          </Button>
        </CardActions>
      </Card>
      <ImageList />
</>


    )
}