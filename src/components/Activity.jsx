import React from 'react';
import Exemple from './Exemple.jpg';
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

export default function Activity() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Exemple}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Title demo {/*(name}*/}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
             industry's standard dummy text ever since th
            e 1500s, when an unknown printer took a galley of type and scrambled it to make a type s
            pecimen book. It{/*(description}*/}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Typography variant="overline">
         Prix : +++ euros{/*{price}*/}
         </Typography>

         <Typography variant="overline">
         Durée : +++ {/*{duration}*/}
         </Typography>

         <Typography variant="overline">
         location: xxxxx{/*{location}*/}
         </Typography>

        <Button size="small" color="primary">
          En savoir plus {/**link to detail*/}
        </Button>
      </CardActions>
    </Card>
  );
}





/*
        <>
        <h1>(name}</h1>
        <p>{description}</p>
        <div>{price}</div>
        <p>{location}</p>
         <div>{nbpax}</div>   
        </>
    )
}
*/