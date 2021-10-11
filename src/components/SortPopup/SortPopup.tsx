import React, {FunctionComponent, ReactElement} from 'react';
import FormControl from '@material-ui/core/FormControl';
import {useStyles} from "./styles";
import {ISortItemsType} from "../../types/ISortItemsType";
import {Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";


type SortPopupTypesProps = {
    onSortBy(item: ISortItemsType): void
}

const SortPopup: FunctionComponent<SortPopupTypesProps> = ({onSortBy}): ReactElement => {

    const classes = useStyles();

    const {label} = useSelector((state: AppStateType) => state.filters.sortBy);

    const sortItems = [
        {name: 'Kaikki', type: '', order: '', label: 'all'},
        {name: 'Hinta, halvin ensin', type: 'price', order: 'asc', label: 'low'},
        {name: 'Hinta, kallein ensin', type: 'price', order: 'desc', label: 'high'},
        {name: 'A-Ö, nimen mukaan', type: 'title', order: 'asc', label: 'a-o'},
        {name: 'Ö-A, nimen mukaan', type: 'title', order: 'desc', label: 'o-a'},
    ];

    return (
        <FormControl component="fieldset" className={classes.root}>
            <div className={classes.btnGroup}>
                {sortItems.map((item, index) => <Button
                    key={`${item.type}_${index}`}
                    onClick={() => onSortBy(item)}
                    className={label === item.label ?
                        classes.activeBtn : classes.btn}
                >{item.name}</Button>)}
            </div>
        </FormControl>
    )
};

export default SortPopup
