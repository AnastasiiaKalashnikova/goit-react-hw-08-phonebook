import { Formik, Field, ErrorMessage } from 'formik';
import { FormBtn, StyledForm } from './AddForm.styled';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selector';

const Schema = Yup.object().shape({
  name: Yup.string().min(2).required('must be filled'),
  number: Yup.number('not a number').required('must be filled'),
});

export const AddForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={Schema}
      onSubmit={(value, actions) => {
        if (
          contacts.find(
            contact => contact.name.toLowerCase() === value.name.toLowerCase()
          )
        ) {
          return alert(`${value.name} is already in contacts`);
        }
        dispatch(addContact(value));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label htmlFor="name">Name</label>
        <Field name="name" />
        <ErrorMessage name="name" />

        <label htmlFor="number">Number</label>
        <Field type="tel" name="number" />
        <ErrorMessage name="number" />

        <FormBtn type="submit">Add Contact</FormBtn>
      </StyledForm>
    </Formik>
  );
};
