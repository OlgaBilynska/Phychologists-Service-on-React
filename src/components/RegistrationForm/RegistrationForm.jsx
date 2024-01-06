import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Button from 'components/Button';
import sprite from '../../assets/sprite.svg';
import {
  RegTitle,
  RegText,
  FormWrapper,
  EyeIcon,
} from './RegistrationForm.styled';
import {
  ErrorText,
  Input,
  FormikWrapper,
  InputWrapper,
} from 'components/LogInForm/LoginForm.styled';

const RegistrationForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required('Name is a required field.'),
    email: yup.string().email().required('Email is a required field.'),
    password: yup
      .string()
      .min(6)
      .max(20)
      .required('Password is a required field.'),
  });

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  return (
    <FormWrapper>
      <RegTitle>Registration</RegTitle>
      <RegText>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information.
      </RegText>
      <Formik
        onSubmit={handleSubmit}
        validationSchema={schema}
        initialValues={initialValues}
      >
        <Form autoComplete="off">
          <FormikWrapper>
            <label>
              <Input type="text" name="name" placeholder="Name" />
              <FormError name="name" />
            </label>
            <label>
              <Input type="email" name="email" placeholder="Email" />
              <FormError name="email" />
            </label>
            <InputWrapper>
              <Input type="password" name="password" placeholder="Password" />
              <EyeIcon>
                <use href={`${sprite}#icon-eye-off`} />
              </EyeIcon>
            </InputWrapper>
            <FormError name="password" />
          </FormikWrapper>
          <Button type="submit" width="100%">
            Sign Up
          </Button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default RegistrationForm;
