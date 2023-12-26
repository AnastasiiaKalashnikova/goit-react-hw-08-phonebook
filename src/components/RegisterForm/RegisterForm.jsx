import React from 'react';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { FormBtn } from 'components/AddForm/AddForm.styled';
import {
  StyledRegisterLogForm,
  StyledRegistretionLogTitle,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledRegistretionLogTitle>Registration</StyledRegistretionLogTitle>
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
        <StyledRegisterLogForm>
          <label htmlFor="name">Name</label>
          <Field name="name" placeholder="Jane" />

          <label htmlFor="email">Email</label>
          <Field name="email" placeholder="@mail.com" type="email" />

          <label htmlFor="password">Password</label>
          <Field name="password" />
          <FormBtn type="submit">Register</FormBtn>
        </StyledRegisterLogForm>
      </Formik>
    </>
  );
};
