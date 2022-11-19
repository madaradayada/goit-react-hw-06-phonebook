import PropTypes from 'prop-types';
import { onDeleteContact } from 'redux/contactsSlice';
import { List, Item, Button } from './ContactListStyled';
import { useDispatch } from 'react-redux';


export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const ContactItem = contacts.map(({ id, name, number }) => {
    return (    
      <Item key={id}>
        <p>
          {name}: {number}
        </p>
        <Button type="button" onClick={() => dispatch(onDeleteContact(id))}>
          Delete
        </Button>
      </Item>
    );
  });

  return <List>{ContactItem}</List>
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ), 
};