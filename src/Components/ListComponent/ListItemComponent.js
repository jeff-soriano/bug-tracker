import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PropTypes from 'prop-types';

export default function ListItemComponent({ id, text, onDelete }) {
    return <ListItem button>
        <ListItemText
            primary={text}
        />
        <ListItemSecondaryAction>
            <IconButton onClick={() => onDelete(id)}>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
}

ListItemComponent.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};