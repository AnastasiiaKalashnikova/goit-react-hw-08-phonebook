import { AddForm } from 'components/AddForm/AddForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../redux/contacts/selector';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <AddForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader status={isLoading} />}
      {error && <p>Sorry! {error}. Try again!</p>}
      <ContactList />
    </>
  );
}
