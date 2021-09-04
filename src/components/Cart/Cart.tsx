import {Link} from "react-router-dom";
import {Badge, Box, Button, Container} from "@material-ui/core";
import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {useDispatch, useSelector} from "react-redux";
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';
import Form from "../Form/Form";
import {useStyles} from "./styles";
import {minusCartItem, plusCartItem, removeCartItem} from "../../redux/action/cart";




const Cart = () => {
  const classes = useStyles();

  const {totalPrice, totalCount, items} = useSelector(({cart}) => cart);
  const dispatch = useDispatch()


  function onRemove(id) {
    if (window.confirm('Poistaa?')) {
      dispatch(removeCartItem(id))
    }
  }

  function onMinus(id) {
    dispatch(minusCartItem(id))
  }

  function onPlus(id) {
    dispatch(plusCartItem(id))
  }

  const addedBooks = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  return (
      <Container className={classes.container}>
        <Link to='/' className={classes.link}>
          <Button variant="contained" color="primary">
            Back
          </Button>
        </Link>
        <Typography component="h2" variant="h6">
          Ostoskori
        </Typography>
        <Typography component="h2" variant="h6">
          Yhteensä {totalPrice.toFixed(2)} €
        </Typography>
        <Box className={classes.boxWrapper}>
          <Box className={classes.box}>
            {totalCount ? addedBooks.map((item) => (
                <Card className={classes.root} key={item.id}>
                  <CardMedia
                      className={classes.cover}
                      image={`https:${item.imgSmall}`}
                      title={item.title}
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h6" variant="h6">
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {item.author}
                      </Typography>
                      <Typography variant="h6" color="initial">
                        {items[item.id].totalPrice.toFixed(2)} €
                      </Typography>
                    </CardContent>
                    <div className={classes.controls}>
                      <IconButton aria-label="minus" onClick={() => onMinus(item.id)}>
                        <RemoveIcon/>
                      </IconButton>
                      <IconButton aria-label="delete" onClick={() => onRemove(item.id)}>
                        <DeleteIcon/>
                      </IconButton>
                      <IconButton aria-label="plus" onClick={() => onPlus(item.id)}>
                        <AddIcon/>
                      </IconButton>
                      <Badge badgeContent={items[item.id].items.length}
                             color="primary" className={classes.badge}>
                        <MenuBookTwoToneIcon className={classes.bookIcon}/>
                      </Badge>
                    </div>
                  </div>
                </Card>)) : ('')}
          </Box>
          <Box className={classes.formBox} boxShadow={2}>
            <Form items={items}/>
          </Box>
        </Box>
      </Container>
  )
}

export default Cart