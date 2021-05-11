import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: "50%",
    marginBottom: 30,
    marginLeft:10,
  },
  media: {
    height: 200,
  },

  
});



export default function ActivityDetail(){
  const classes = useStyles();

        const [detail, setDetail] =useState()
        const [loading, setLoading] = useState(true)

        const {id} = useParams()

            useEffect(() => {

                const getDetail = async () => {
                    try{
                        const detailData = await axios.get(`http://localhost:8080/activities/${id}`)
                        setDetail(detailData.data[0])
                    } catch(err) {
                        console.log(err)
                    } finally {
                        setLoading(false)
                    }
                }
                getDetail()
            }, [id])

            console.log("detail", detail)
            if(loading) return <div>loading...</div>

    return(
       <>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={detail.image_1}
            title={detail.title}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             {detail.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {detail.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <Typography variant="overline">
           Prix :{detail.price} euros
           </Typography>
  
           <Typography variant="overline">
           Durée : {detail.duration}
           </Typography>
  
           <Typography variant="overline">
           location: {detail.location}
           </Typography>

           <Typography variant="overline">
          Difficulté : {detail.difflevel}
           </Typography>

           <Typography variant="overline">
          Nombre de participants : {detail.nbpax}
           </Typography>

          <Button size="small" color="primary">
            Share ! 
          </Button>
        </CardActions>
      </Card>
      
</>


    )
}