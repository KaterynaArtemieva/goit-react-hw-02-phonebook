import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import {
  FormField,
  Form,
  ErrorMessage,
  Field,
  Button,
} from './ContactForm.styled';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .matches(nameRegExp, 'Name is not valid')
    .required('Required field!'),
  number: Yup.string()
    .trim()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Required field!'),
});

export const ContactForm = ({ addContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        addContact({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="div" />
        </FormField>
        <FormField>
          Number
          <Field name="number" />
          <ErrorMessage name="number" component="div" />
        </FormField>
        <Button type="submit">Save contact</Button>
      </Form>
    </Formik>
  );
};
