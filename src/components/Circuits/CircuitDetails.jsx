import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
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
      maxWidth: "90%",
      padding:10,
    },
    media: {
      height: 800,
    },
  global: {
    backgroundColor:'#332d3e',
    display:"flex",
    justifyContent:"center",
  
  },
  okey: {
    padding:20,
    margin:10,
    display:"flex",
    justifyContent:"center",
    
  },
    
  img: {
    height:200,
    width:250,
    '&:hover': {
     filter:"saturate(200%)",
     transition:"0.4s",
     transform: "scale(1.2)",
   },
  },
  
  });


export default function CircuitDetails () {
    const classes = useStyles();
    const [circuitDetails, setCircuitDetails] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { id } = useParams()
    console.log("from detail", id)
    
    useEffect(() => {
        const getCircuitsDetails = async () => {
            try {
                const circuitsDetails = await axios.get(`http://localhost:8081/circuits/${id}`)
                setCircuitDetails(circuitsDetails.data[0])
            } catch(err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        }
        getCircuitsDetails()
    }, [id])

    console.log("circuitDetail", circuitDetails)
    
    if(loading) return <div>Loading...</div>
    
    return (
            <>
                
                
                <div className={classes.global}>
                    <Card className={classes.root}>
                    <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={circuitDetails.image_1}
                        name={circuitDetails.title}
                    />

                    <CardContent>
                    <Typography variant="h5" component="h2">
                        {circuitDetails.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {circuitDetails.description}
                    </Typography>
                    </CardContent>
                    </CardActionArea>
                    <CardActions>
                    <Typography variant="overline">
                        Durée : {circuitDetails.duration}
                    </Typography>

                    <Typography variant="overline">
                        Difficulté : {circuitDetails.difflevel}
                    </Typography>

                    <Button size="small" color="primary">
                        Share ! 
                    </Button>
                    </CardActions>
                    <Button size="small" color="primary">
                    <Link className="link" to="/circuits">Back to Circuits</Link> 
                    </Button>
       
                    <div className={classes.okey}>
      
         
                        <img className={classes.img} src={circuitDetails.image_2}
                        title={circuitDetails.title} />
      
       
                        <img className={classes.img} src={circuitDetails.image_3}
                        title={circuitDetails.title} />
        
           
                        <img className={classes.img} src={circuitDetails.image_4}
                        title={circuitDetails.title} />
        
                    </div>

         

                    </Card>
            </div>

        </>
    )
}