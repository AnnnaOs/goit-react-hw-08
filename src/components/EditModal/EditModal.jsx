import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { BsPhone, BsPerson } from 'react-icons/bs';
import css from './EditModal.module.css';

const EditSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^[0-9-]+$/, 'Only numbers and `-` are allowed')
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const EditModal = ({ id, initialValues, onSubmit }) => {
  return (
    <dialog id={`edit_modal_${id}`} className="modal">
      <div className="modal-box rounded-[20px]">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="text-[24px] font-bold text-center text-[#008080]">
          Edit contact:
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={EditSchema}
          onSubmit={onSubmit}
        >
          <Form className="flex flex-col gap-5 p-[5px]">
            <label className={css.contactFormLabel} htmlFor="name">
              Name
              <div className={css.contactFormInputWrap}>
                <Field id="name" name="name" className={css.contactFormInput} />
                <BsPerson className={css.contactFormIcon} size="20" />
              </div>
              <ErrorMessage
                name="name"
                component="span"
                className={css.contactFormError}
              />
            </label>
            <label className={css.contactFormLabel} htmlFor="number">
              Number
              <div className={css.contactFormInputWrap}>
                <Field
                  id="number"
                  name="number"
                  className={css.contactFormInput}
                />
                <BsPhone className={css.contactFormIcon} size="20" />
              </div>
              <ErrorMessage
                name="number"
                component="span"
                className={css.contactFormError}
              />
            </label>
            <button className={css.contactFormBtn} type="submit">
              Update
            </button>
          </Form>
        </Formik>
      </div>
    </dialog>
  );
};

export default EditModal;
