import { useDispatch } from 'react-redux';
import EditModal from '../EditModal/EditModal';
import DeleteModal from '../DeleteModal/DeleteModal';
import { editContactThunk } from '../../redux/contacts/operations';
import { BsPhone, BsPerson, BsPersonDash, BsPersonGear } from 'react-icons/bs';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const initialValues = { name, number };

  const handleSubmit = (values, actions) => {
    dispatch(editContactThunk({ id, values }));
    actions.resetForm();
    document.getElementById(`edit_modal_${id}`).close();
  };

  return (
    <>
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
          onClick={() =>
            document.getElementById(`edit_modal_${id}`).showModal()
          }
        >
          <BsPersonGear className={css.deleteBtnIcon} size="15" />
          Edit
        </button>
        <button
          className={css.contactDeleteBtn}
          type="button"
          onClick={() => document.getElementById('delete_modal').showModal()}
        >
          <BsPersonDash className={css.deleteBtnIcon} size="15" />
          Delete
        </button>
      </div>
      <EditModal
        id={id}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      />
      <DeleteModal id={id} />
    </>
  );
};
export default Contact;
