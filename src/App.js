import './App.css';
import Container from '@material-ui/core/Container';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from "react";

import InputArea from "./Components/ListComponent/InputArea"

function App() {
  const [listItems, setListItems] = useState([]);

  function addListItem(item) {
    setListItems((items) => [...items, item]);
    console.log(listItems);
  }

  return (
    <Container>
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
    </Container>
  );
}

export default App;
