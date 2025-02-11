import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { logInThunk } from '../../redux/auth/operations';

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logInThunk(values))
      .unwrap()
      .then(() => navigate('/'))
      .catch(error => {
        console.error(error);
      });
    resetForm;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="bg-white rounded-3xl shadow-xl p-4 flex flex-col gap-4  w-1/4">
          <h3 className="text-center font-bold">Login</h3>
          <label className="flex flex-col gap-2">
            <span>Email:</span>
            <Field
              className="p-2 border-1 border-black shadow-md rounded-md"
              name="email"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span>Password:</span>
            <Field
              className="p-2 border-1 border-black shadow-md rounded-md"
              name="password"
              type="password"
            />
          </label>
          <button
            className="px-4 py-2 shadow-2xl rounded-md bg-teal-400 text-white cursor-pointer hover:bg-teal-500"
            type="submit"
          >
            Login
          </button>
          <p>
            You do not have account?{' '}
            <Link className="text-teal-500" to="/register">
              Lets create one!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
    // <div className={css.formContainer}>
    //   <Formik
    //     initialValues={initialValues}
    //     validationSchema={validationSchema}
    //     onSubmit={handleSubmit}
    //   >
    //     <Form className={css.form}>
    //       <label className={css.label}>
    //         <span>Email:</span>
    //         <Field
    //           name="email"
    //           id="email"
    //           autoComplete="email"
    //           autoFocus
    //           required
    //         />
    //       </label>
    //       <label className={css.label}>
    //         <span>Password:</span>
    //         <Field
    //           name="password"
    //           type="password"
    //           id="password"
    //           autoComplete="current-password"
    //           required
    //         />
    //       </label>
    //       <button className={css.formBtn} type="submit">
    //         Log In
    //       </button>
    //       <p>
    //         Don’t have an account? <Link to="/register">Register here</Link> to
    //         continue.
    //       </p>
    //     </Form>
    //   </Formik>
    // </div>
  );
};

export default LoginForm;
