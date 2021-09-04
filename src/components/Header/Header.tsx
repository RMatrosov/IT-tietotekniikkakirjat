import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useDispatch, useSelector} from "react-redux";
import {searchBooks} from "../../redux/action/search";
import {Link} from "react-router-dom";
import {StyledBadge, useStyles} from "./styles";
import {AppStateType} from "../../redux/store";



const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  function onSearch(value:string) {
    dispatch(searchBooks(value))
  }

  const {totalCount} = useSelector((state: AppStateType) => state.cart);

  return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              IT tietotekniikkakirjat
            </Typography>
            <Link to='/cart'>
              <IconButton aria-label="cart">
                <StyledBadge overlap='rectangular' badgeContent={totalCount} color="secondary">
                  <ShoppingCartIcon className={classes.shopCard}/>
                </StyledBadge>
              </IconButton>
            </Link>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                  onChange={(event) => onSearch(event.target.value)}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{'aria-label': 'search'}}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
  )
}

export default Header;