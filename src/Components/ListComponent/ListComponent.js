import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';

import InputArea from "./InputArea"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 280,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ListComponent() {
    const classes = useStyles();
    const [listItems, setListItems] = useState([]);

    function addListItem(item) {
        setListItems((items) => [...items, item]);
    }

    return (
        <div className={classes.root}>
            <InputArea onSubmit={addListItem} />
            <List>
                {listItems.map(item => {
                    return (
                        <ListItem>
                            <ListItemText
                                primary={item}
                            />
                            <ListItemSecondaryAction>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )

                })}
            </List>
        </div>
    )
}