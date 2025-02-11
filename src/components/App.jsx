import { Route, Routes } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout/Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { refreshUserThunk } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

const HomePage = lazy(() => import('../pages/HomePage'));
const RegistrationPage = lazy(() => import('../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              element={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" element={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" element={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
