import { useDispatch } from 'react-redux';
import { ContactItem, DeleteBtn } from './ContactList.styled';
import { deleteContact } from '../../redux/contacts/operations';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contacts/selector';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactItem key={contact.id} id={contact.id}>
          {contact.name}: {contact.phone}
          <DeleteBtn
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </DeleteBtn>
        </ContactItem>
      ))}
    </ul>
  );
};
