import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/contacts/operations';
import css from './DeleteModal.module.css';

const DeleteModal = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <dialog id="delete_modal" className="modal">
      <div className="modal-box rounded-[20px]">
        <form method="dialog">
          <button className="absolute right-2 top-2 rounded-[50%] border-[#004aad] px-[7px] py-[3px] hover:cursor-pointer">
            ✕
          </button>
        </form>
        <h3 className="text-[24px] font-bold text-center text-red-500">
          Delete contact:
        </h3>
        <p className="py-4 text-center">
          Are you sure you want to delete this contact?
        </p>
        <button
          className={css.contactDeleteBtn}
          onClick={() => dispatch(deleteContactThunk(id))}
        >
          Delete
        </button>
      </div>
    </dialog>
  );
};

export default DeleteModal;
