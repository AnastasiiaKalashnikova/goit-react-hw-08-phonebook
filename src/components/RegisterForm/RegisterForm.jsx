import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Registration</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={(value, actions) => {
          dispatch(
            register({
              name: value.name,
              email: value.email,
              password: value.password,
            })
          );
          console.log(value);
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" placeholder="Jane" />

          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="@mail.com" type="email" />

          <label htmlFor="password">Password</label>
          <Field name="password" />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};
