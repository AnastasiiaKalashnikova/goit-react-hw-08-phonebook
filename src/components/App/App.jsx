//import { Wrapper } from './App.styled';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
//import { fetchContacts } from '../../redux/contacts/operations';
//import { selectError, selectIsLoading } from '../../redux/contacts/selector';
//import { Loader } from 'components/Loader';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import ContactsPage from 'pages/ContactsPage';
import HomePage from 'pages/HomePage';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';
import { useAuth } from 'useAuthHook';
import { refreshUser } from '../../redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );

  //  <Wrapper>
  //    <h1>Phonebook</h1>
  //    <AddForm />
  //    <h2>Contacts</h2>
  //    <Filter />
  //    {isLoading && !error && <Loader status={isLoading} />}
  //    {error && <p>Sorry! {error}. Try again!</p>}
  //    <ContactList />
  //  </Wrapper>
};
