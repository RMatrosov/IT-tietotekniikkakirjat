import {Link, useParams} from 'react-router-dom'
import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Button} from "@material-ui/core";
import {useStyles} from "./styles";



const Image = ({items}) => {

  const getImageById = (items, title) => items.find(image => image.title === title)

  const {title} = useParams();

  const image = getImageById(items, title);
  const classes = useStyles();

  return (
      <>

        {image ? <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {image.author}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {image.type}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {image.price} €
                  </Typography>
                </CardContent>
              </div>
              <CardMedia
                  className={classes.cover}
                  image={`https:${image.imgMedium}`}
                  title={image.title}
              />
              <Link to='/' className={classes.link}>
                <Button variant="contained" color="primary">
                  Back
                </Button>
              </Link>
            </Card>
            : ''}
      </>

  )
}

export default Image