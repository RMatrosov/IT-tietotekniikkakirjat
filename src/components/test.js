

/*export const Paginator = () => {*/

  /*const dispatch = useDispatch()

  const {totalItemCount, currentPage} = useSelector(({paginate}) => paginate);

  const pagesCount = Math.ceil(totalItemCount / 10);

  let pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  let portionSize = 5;

  const onSetPage = (item) => {
    dispatch(setCurrentPage(item))
  }

  const classes = useStyles();

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;*/

/*
  return (
      /!*<>
       <ButtonGroup variant="contained" className={classes.btnGroup}
                    color="primary" aria-label="contained primary button group">
         {portionNumber > 1 && (<Button onClick={() => setPortionNumber(portionNumber - 1)}>prev</Button>)}
         {pages && pages.filter(item => item >= leftPortionPageNumber && item <= rightPortionPageNumber).map((item, index) => {
           return <Button key={index} disabled={item === currentPage}
                          onClick={() => onSetPage(item)}
                          className={classes.pageBtn}
           >
             {item}
           </Button>
         })}
         {portionCount > portionNumber && (<Button onClick={() => setPortionNumber(portionNumber + 1)}>next</Button>)}
       </ButtonGroup>
     </>*!/
  );
}
*/
