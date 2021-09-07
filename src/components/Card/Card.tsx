import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Button, CardActions} from "@material-ui/core";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import {useStyles} from "./styles";
import {addBookToCart} from "../../redux/action/cart";
import {FC, ReactElement} from "react";
import {itemsType} from "../../types/books";


type CartItemTypesProps = {
    card: itemsType
}

const CardItem: FC<CartItemTypesProps> = (card): ReactElement => {

    const classes = useStyles();

    const dispatch = useDispatch()

    const title = card.card.title;

    function onAddToCart(card: itemsType) {
        dispatch(addBookToCart(card))
    }

    return (
        <Card className={classes.root}>
            <Link to={`img/${title}`} className={classes.link}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="260"
                        image={`https:${card.card.imgSmall}`}
                        title="Contemplative Reptile"
                        className={classes.media}
                    />
                    <CardContent className={classes.cardContext}>
                        <Typography gutterBottom variant="h6" component="h2" className={classes.title}>
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={classes.type}>
                            {card.card.type}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h6" className={classes.price}>
                            {card.card.price} €
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                <Button fullWidth={true} onClick={() => onAddToCart(card.card)}
                        variant="outlined">
                    Lisää koriin
                </Button>
            </CardActions>
        </Card>)
}

export default CardItem