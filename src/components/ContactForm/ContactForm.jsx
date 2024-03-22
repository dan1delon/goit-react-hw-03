import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// import css from './ContactForm.module.css';

const initialFormValues = {
  name: '',
  number: '',
};

const formValidation = Yup.object({
  name: Yup.string('You must enter a valid name!')
    .trim()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Name is required!'),
  number: Yup.string('You must enter a valid number!')
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Number is required!'),
});

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={formValidation}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <span>Name:</span>
          <Field type="text" name="name" />
          <ErrorMessage component="p" name="name" />
        </label>
        <label>
          <span>Number:</span>
          <Field type="number" name="number" />
          <ErrorMessage component="p" name="number" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
