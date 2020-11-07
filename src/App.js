import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [listItems, setListItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addListItem(item) {
    setListItems((items) => [...items, item]);
    console.log(listItems);
  }

  function handleSubmit(event) {
    addListItem(inputText);
    setInputText("");

    event.preventDefault();
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange} value={inputText} label="Test" />
        <Button type="submit" variant="contained" color="primary">
          Add
        </Button>
      </form>
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
