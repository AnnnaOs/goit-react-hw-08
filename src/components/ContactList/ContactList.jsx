import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from '../../redux/selectors';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {filteredContacts.length === 0 && !isLoading ? (
        <p className={css.infoText}>No contacts found</p>
      ) : (
        <ul className={css.contactList}>
          {filteredContacts.map(contact => (
            <li key={contact.id} className={css.contactItem}>
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      )}
      {filteredContacts.length === 0 && filteredContacts.length !== 0 && (
        <p className={css.infoText}>Your phonebook is empty</p>
      )}
    </>
  );
};

export default ContactList;
