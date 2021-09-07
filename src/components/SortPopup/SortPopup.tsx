import React, {FunctionComponent, ReactElement} from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import {useStyles} from "./styles";
import {ISortItemsType} from "../../types/ISortItemsType";



type SortPopupTypesProps = {
    onSortBy(item: ISortItemsType):void
}

const SortPopup: FunctionComponent<SortPopupTypesProps> = ({onSortBy}): ReactElement => {

    const classes = useStyles();

    const sortItems = [
        {name: 'Kaikki', type: '', order: '', label: 'all'},
        {name: 'Hinta, halvin ensin', type: 'price', order: 'asc', label: 'low'},
        {name: 'Hinta, kallein ensin', type: 'price', order: 'desc', label: 'high'},
        {name: 'A-Ö, nimen mukaan', type: 'title', order: 'asc', label: 'a-o'},
        {name: 'Ö-A, nimen mukaan', type: 'title', order: 'desc', label: 'o-a'},
    ];

    return (
        <FormControl component="fieldset" className={classes.root}>
            <RadioGroup row aria-label="position" name="position"
                        defaultValue="all">
                {sortItems.map((item, index) => <FormControlLabel
                    key={`${item.type}_${index}`}
                    value={item.label}
                    control={<Radio color="default"/>}
                    label={item.name}
                    labelPlacement="bottom"
                    onChange={() => onSortBy(item)}
                    className={classes.label}
                />)}
            </RadioGroup>
        </FormControl>
    )
};

export default SortPopup