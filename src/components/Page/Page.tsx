import Pagination from '@material-ui/lab/Pagination';
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/action/paginate";
import {useStyles} from "./styles";
import {AppStateType} from "../../redux/store";


export const Page = () => {

    const dispatch = useDispatch()

    const {totalItemCount, currentPage, defaultItemsCount} = useSelector((state: AppStateType) => state.paginate);

    const pagesCount = Math.ceil(totalItemCount / defaultItemsCount);

    const onSetPage = (event: any, value: number) => {
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

