import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Log in</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(value, actions) => {
          dispatch(
            logIn({
              email: value.email,
              password: value.password,
            })
          );
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <label htmlFor="password">Password</label>
          <Field name="password" />
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
};
