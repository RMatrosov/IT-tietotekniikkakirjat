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
import {AppStateType} from "../../redux/store";
import {ICart} from "../../types/cart";


const Cart = () => {
    const classes = useStyles();

    const {cartList} = useSelector((state: AppStateType) => state.cart);
    const dispatch = useDispatch()

    function onRemove(id: string) {
        if (window.confirm('Poistaa?')) {
            dispatch(removeCartItem(id))
        }
    }

    function onMinus(id: string) {
        dispatch(minusCartItem(id))
    }

    function onPlus(id: string) {
        dispatch(plusCartItem(id))
    }


    let priceArr = cartList.map((item: ICart) => {
        return item.product.price * item.quantity
    })
    let totalPrice = priceArr.reduce((sum: number, i: number) => i + sum, 0);


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
                    {cartList ? cartList.map((item: ICart) => (
                        <Card className={classes.root} key={item.product.id}>
                            <CardMedia
                                className={classes.cover}
                                image={`https:${item.product.imgSmall}`}
                                title={item.product.title}
                            />
                            <div className={classes.details}>
                                <CardContent className={classes.content}>
                                    <Typography component="h6" variant="h6">
                                        {item.product.title}
                                    </Typography>
                                    <Typography variant="subtitle1" color="textSecondary">
                                        {item.product.author}
                                    </Typography>
                                    <Typography variant="h6" color="initial">
                                        {(item.product.price * item.quantity).toFixed(2)} €
                                    </Typography>
                                </CardContent>
                                <div className={classes.controls}>
                                    <IconButton aria-label="minus" onClick={() => onMinus(item.product.id)}>
                                        <RemoveIcon/>
                                    </IconButton>
                                    <IconButton aria-label="delete" onClick={() => onRemove(item.product.id)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                    <IconButton aria-label="plus" onClick={() => onPlus(item.product.id)}>
                                        <AddIcon/>
                                    </IconButton>
                                    <Badge badgeContent={item.quantity}
                                           color="primary">
                                        <MenuBookTwoToneIcon className={classes.bookIcon}/>
                                    </Badge>
                                </div>
                            </div>
                        </Card>)) : ('')}
                </Box>
                <Box className={classes.formBox} boxShadow={2}>
                    <Form items={cartList}/>
                </Box>
            </Box>
        </Container>
    )
}

export default Cart