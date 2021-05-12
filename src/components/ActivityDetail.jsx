import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    padding: 10,
  },
  media: {
    height: 800,
  },
  global: {
    backgroundColor: "#332d3e",
    display: "flex",
    justifyContent: "center",
  },
  okey: {
    padding: 20,
    margin: 10,
    display: "flex",
    justifyContent: "center",
  },

  img: {
    height: 200,
    width: 250,
    "&:hover": {
      filter: "saturate(200%)",
      transition: "0.4s",
      transform: "scale(1.2)",
    },
  },
});

export default function ActivityDetail() {
  const classes = useStyles();

  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const getDetail = async () => {
      try {
        const detailData = await axios.get(
          `http://localhost:8080/activities/${id}`
        );
        setDetail(detailData.data[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    getDetail();
  }, [id]);

  console.log("detail", detail);
  if (loading) return <div>loading...</div>;

  return (
    <div className={classes.global}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={detail.image_1}
            name={detail.name}
          />

          <CardContent>
            <Typography variant="h5" component="h2">
              {detail.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {detail.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Typography variant="overline">
            <strong>Prix :{detail.price}</strong> euros
          </Typography>

          <Typography variant="overline">
            <strong>location:</strong> {detail.location}
          </Typography>

          <Typography variant="overline">
            <strong>Nombre de participants : </strong>
            {detail.nbpax}
          </Typography>

          <Button size="small" color="primary">
            Share !
          </Button>
        </CardActions>
    
        <Button size="small" color="primary">
            <Link className="link" to="/activities">Back to Activities</Link> 
        </Button>
         /*<div className={classes.okey}>
       
          
          <img className={classes.img} src={detail.image_2}
            title={detail.title} />
       
        
       <img className={classes.img} src={detail.image_3}
            title={detail.title} />
         
            
       <img className={classes.img} src={detail.image_4}
            title={detail.title} />
         
        
      </div>*/

        <div className={classes.okey}>
          <img
            className={classes.img}
            src={detail.image_2}
            title={detail.title}
          />

          <img
            className={classes.img}
            src={detail.image_3}
            title={detail.title}
          />

          <img
            className={classes.img}
            src={detail.image_4}
            title={detail.title}
          />
        </div>
      </Card>
    </div>
  );
}
