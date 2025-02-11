import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //
import DocumentTitle from '../components/DocumentTitle';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import { fetchContactsThunk } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your contacts</DocumentTitle>
      {isLoading && 'Request in progress...'}
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
};

export default ContactsPage;
