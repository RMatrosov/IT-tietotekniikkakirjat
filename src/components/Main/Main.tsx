import {Box, Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import CardItem from "../Card/Card";
import Skeleton from '@material-ui/lab/Skeleton';
import {Page} from "../Page/Page";
import {FunctionComponent, ReactElement} from "react";
import {AppStateType} from "../../redux/store";
import {itemsType} from "../../types/books";


type MainTypesProps = {
    items: Array<itemsType>
}

/*type TFilterFields = Pick<itemsType, 'author' | 'title' | 'type'>;*/

const filterFields = ['author', 'title', 'type']

const Main: FunctionComponent<MainTypesProps> = ({items}): ReactElement => {

    const isLoaded = useSelector((state: AppStateType) => state.books.isLoaded);

    const search = useSelector((state: AppStateType) => state.search);

    const dataSearch: Array<itemsType> = items.filter((item: itemsType) => {
        return Object.keys(item)
            .filter(key => filterFields.includes(key))
            .some((key: string) =>
                filterFields.includes(key) &&
                (item[key]).toString().toLowerCase().includes(search.search.toString().toLowerCase())
            )
    })

    return (
        <Box style={{display: 'flex', flexDirection: 'column'}}>
            <Grid container
                  direction="row"
                  justifyContent="space-evenly"
                  spacing={6}>
                {isLoaded ? dataSearch.map((card) => <Grid item key={card.id} xs={12} sm={6} md={4}>
                    <CardItem card={card}/>
                </Grid>) : Array(6)
                    .fill(0)
                    .map((_, index) => <Skeleton key={index} variant="rect" width={270} height={280}/>)}
            </Grid>
            <Page/>
        </Box>
    )
}

export default Main