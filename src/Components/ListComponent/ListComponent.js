import List from '@material-ui/core/List';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import InputArea from "./InputArea";
import ListItemComponent from "./ListItemComponent";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 280
    },
}));

export default function ListComponent() {
    const classes = useStyles();
    const [listItems, setListItems] = useState([]);

    function addListItem(item) {
        setListItems((items) => [...items, item]);
    }

    function deleteListItem(id) {
        setListItems(listItems.filter((listItem, index) => index !== id));
    }

    return (
        <div className={classes.root}>
            <h1>List</h1>
            <InputArea onSubmit={addListItem} />
            <List>
                {listItems.map((item, index) => {
                    return (
                        <ListItemComponent
                            key={index}
                            id={index}
                            text={item}
                            onDelete={deleteListItem}
                        />
                    )

                })}
            </List>
        </div>
    )
}