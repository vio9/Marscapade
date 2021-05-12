import React from "react";
/*import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';*/
import { Link } from "react-router-dom";
import "./Circuits/Circuits.scss";

/*
const useStyles = makeStyles({
  root: {
    maxWidth: "50%",

  },
  media: {
    height: 200,
  },
  globals: {
    backgroundColor:'#332d3e',
  }

  
});*/

export default function Activity({
  name,
  image_1,
  description,
  price,
  duration,
  location,
  id,
}) {
  return (
    <div className="cardCircuit">
      <img className="pictureCircuit" src={image_1} alt={name} />
      <div className="circuit-detail">
        <h2 className="titleCircuit">{name}</h2>
        <div className="circuit-info">
          <p className="infosCircuit">
            <i
              className="fas fa-user-astronaut"
              style={{ color: "#bd4f35" }}
            ></i>{" "}
            price : {price}
          </p>
          <p className="infosCircuit">
            <i className="fas fa-stopwatch" style={{ color: "#bd4f35" }}></i>{" "}
            Description : {description}
          </p>
          <p className="infosCircuit">
            <i className="fas fa-stopwatch" style={{ color: "#bd4f35" }}></i>
            duration : {duration}
          </p>
          <p className="infosCircuit">
            <i className="fas fa-stopwatch" style={{ color: "#bd4f35" }}></i>{" "}
            location : {location}
          </p>
        </div>

        <Link to={`/activities/${id}`} className="seeMoreCircuit">
          Voir plus
        </Link>
      </div>
    </div>

    /*


    <div className={classes.globals}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image_1}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography variant="overline">
         Prix : {price} euros
         </Typography>titleline">
         location: {location}
         </Typography>

        <Button size="small" color="primary">
          En savoir plus  <Link to={`/activities/${id}`}>Voir plus</Link>
        </Button>
      </CardActions>
    </Card>
    </div> !*/
  );
}
