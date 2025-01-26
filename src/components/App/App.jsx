import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { fetchContacts } from '../../redux/contactsOps';
import { RiContactsBook3Line } from 'react-icons/ri';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import Loader from '../Loader/Loader';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <section className={css.phonebook}>
      <div className={css.container}>
        <h1 className={css.mainTitle}>
          <RiContactsBook3Line className={css.mainIcon} />
          Phonebook
        </h1>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && <Loader />}
        {!isLoading && <ContactList />}
      </div>
    </section>
  );
};

export default App;
