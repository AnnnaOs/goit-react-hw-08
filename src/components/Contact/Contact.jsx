import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import { BsPhone, BsPerson, BsTrash } from 'react-icons/bs';
import css from './Contact.module.css';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div className={css.contactContainer}>
      <ul className={css.contactDetailsList}>
        <li className={css.contactName}>
          <BsPerson className={css.contactIcon} size="18" />
          {name}
        </li>
        <li className={css.contactNumber}>
          <BsPhone className={css.contactIcon} size="18" />
          {number}
        </li>
      </ul>
      <button
        className={css.contactDeleteBtn}
        type="button"
        onClick={handleDelete}
      >
        <BsTrash className={css.deleteBtnIcon} size="15" />
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default Contact;
