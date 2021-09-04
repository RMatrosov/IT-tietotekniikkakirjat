
import Pagination from '@material-ui/lab/Pagination';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/action/paginate";
import {useStyles} from "./styles";



export const Page = () => {

  const dispatch = useDispatch()

  const {totalItemCount, currentPage, defaultItemsCount} = useSelector(({paginate}) => paginate);

  const pagesCount = Math.ceil(totalItemCount / defaultItemsCount);

  const onSetPage = (event, value) => {
    dispatch(setCurrentPage(value))
  }

  const classes = useStyles();


  return (
      <div className={classes.btnGroup}>
        <Pagination count={pagesCount} page={currentPage}
                    onChange={onSetPage} color="primary"/>
      </div>

  )
}

