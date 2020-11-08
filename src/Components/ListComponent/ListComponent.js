import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from "react";

import InputArea from "./InputArea"

export default function ListComponent() {
    const [listItems, setListItems] = useState([]);

    function addListItem(item) {
        setListItems((items) => [...items, item]);
    }

    return (
        <div>
            <InputArea onSubmit={addListItem} />
            <List>
                {listItems.map(item => {
                    return (
                        <ListItem>
                            <ListItemText
                                primary={item}
                            />
                        </ListItem>
                    )

                })}
            </List>
        </div>
    )
}