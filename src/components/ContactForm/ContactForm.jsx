import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AppTitle from '../AppTitle/AppTitle';
import { addContactThunk } from '../../redux/contacts/operations';
import { BsPhone, BsPerson, BsPersonAdd } from 'react-icons/bs';
import { RiContactsBook3Line } from 'react-icons/ri';
import css from './ContactForm.module.css';

const initialValues = {
  id: '',
  name: '',
  number: '',
};

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
    .required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContactThunk(values));
    resetForm();
  };

  return (
    <>
      <AppTitle>
        <>
          <RiContactsBook3Line style={{ color: 'teal' }} />
          <span style={{ color: 'teal' }}>Phonebook</span>
        </>
      </AppTitle>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form autoComplete="off" className={css.contactFormWrap}>
          <label className={css.contactFormLabel} htmlFor="name">
            Name
          </label>
          <div className={css.contactFormInputWrap}>
            <Field
              className={css.contactFormInput}
              id="name"
              type="text"
              name="name"
            />
            <BsPerson className={css.contactFormIcon} size="20" />
          </div>
          <ErrorMessage
            name="name"
            component="span"
            className={css.contactFormError}
          />

          <label className={css.contactFormLabel} htmlFor="number">
            Number
          </label>
          <div className={css.contactFormInputWrap}>
            <Field
              className={css.contactFormInput}
              id="number"
              type="text"
              name="number"
            />
            <BsPhone className={css.contactFormIcon} size="20" />
          </div>
          <ErrorMessage
            name="number"
            component="span"
            className={css.contactFormError}
          />

          <button className={css.contactFormBtn} type="submit">
            <BsPersonAdd className={css.contactFormBtnIcon} size="15" />
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
