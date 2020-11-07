import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";

export default function InputArea({ onSubmit }) {
    const [inputText, setInputText] = useState("");

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function handleSubmit(event) {
        onSubmit(inputText);
        setInputText("");

        event.preventDefault();
    }

    return <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange} value={inputText} label="Test" />
        <Button type="submit" variant="contained" color="primary">
            Add
        </Button>
    </form>
}

InputArea.propTypes = {
    onSubmit: PropTypes.func.isRequired
};