import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';

const initialValues = {
  password: '',
  email: '',
  name: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate;
  const handleSubmit = (values, { resetForm }) => {
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate('/'))
      .catch(error => {
        console.error(error);
      });
    resetForm;
  };

  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <Form className='bg-white rounded-3xl shadow-xl p-4 flex flex-col md:bg-gray-100 xl:bg-slate-200 gap-4 w-1/2 md:w-1/3 xl:w-1/4  md:text-red-400 lg:text-blue-500'>
          <h3 className='text-center font-bold'>Register</h3>
          <label className='flex flex-col gap-2'>
            <span>Name:</span>
            <Field className='p-2 border-1 border-black shadow-md rounded-md' name='name' />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Email:</span>
            <Field className='p-2 border-1 border-black shadow-md rounded-md' name='email' />
          </label>
          <label className='flex flex-col gap-2'>
            <span>Password:</span>
            <Field className='p-2 border-1 border-black shadow-md rounded-md' name='password' type='password' />
          </label>
          <button
            className='px-4 py-2 shadow-2xl rounded-md bg-teal-400 text-white cursor-pointer hover:bg-teal-500 transition-all duration-300'
            type='submit'
          >
            Register
          </button>
          <p>
            You already have account? 
            <Link className='text-teal-500' to='/login'>
              Login!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
    // <div>
    //   <Formik
    //     initialValues={initialValues}
    //     onSubmit={handleSubmit}
    //     validationSchema={validationSchema}
    //   >
    //     <Form>
    //       <h3>Register</h3>
    //       <label>
    //         <span>Name:</span>
    //         <Field
    //           name="name"
    //           id="name"
    //           type="name"
    //           autoComplete="family-name"
    //           autoFocus
    //           required
    //         />
    //       </label>
    //       <label>
    //         <span>Email:</span>
    //         <Field
    //           name="email"
    //           id="email"
    //           type="email"
    //           autoComplete="email"
    //           required
    //         />
    //       </label>
    //       <label>
    //         <span>Password:</span>
    //         <Field
    //           name="password"
    //           id="password"
    //           type="password"
    //           autoComplete="new-password"
    //         />
    //       </label>
    //       <button type="submit">Register</button>
    //       <p>
    //         Already have an account? <Link to="/login">Log In here.</Link>
    //       </p>
    //     </Form>
    //   </Formik>
    // </div>
  );
};

export default RegistrationForm;