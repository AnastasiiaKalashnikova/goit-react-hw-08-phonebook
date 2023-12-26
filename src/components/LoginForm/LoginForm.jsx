import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { FormBtn } from 'components/AddForm/AddForm.styled';
import {
  StyledRegisterLogForm,
  PageTitle,
} from 'components/RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <PageTitle>Log in</PageTitle>
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
        <StyledRegisterLogForm>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <label htmlFor="password">Password</label>
          <Field name="password" />
          <FormBtn type="submit">Log in</FormBtn>
        </StyledRegisterLogForm>
      </Formik>
    </div>
  );
};
