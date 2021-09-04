import {Box, Grid} from "@material-ui/core";
import {useSelector} from "react-redux";
import CardItem from "../Card/Card";
import Skeleton from '@material-ui/lab/Skeleton';
import {Page} from "../Page/Page";



const Main = ({items}) => {


  const isLoaded = useSelector(({books}) => books.isLoaded);

  const search = useSelector(({search}) => search.search);

  let dataSearch = items.filter(item => {
    return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(search.toString().toLowerCase()))
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