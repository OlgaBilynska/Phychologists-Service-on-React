import { Formik, ErrorMessage, Form } from 'formik';
import * as yup from 'yup';
import Button from 'components/Button';
import {
  FormWrapper,
  LogInText,
  LogInTitle,
  ErrorText,
  Input,
  FormikWrapper,
  InputWrapper,
} from './LoginForm.styled';
import { EyeIcon } from 'components/RegistrationForm/RegistrationForm.styled';
import sprite from '../../assets/sprite.svg';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email().required('Email is a required field'),
    password: yup
      .string()
      .min(6)
      .max(20)
      .required('Password is a required field'),
  });

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <FormWrapper>
      <LogInTitle>Log In</LogInTitle>
      <LogInText>
        Welcome back! Please enter your credentials to access your account and
        continue your search for a psychologist.
      </LogInText>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <Form autoComplete="off">
          <FormikWrapper>
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
            Log In
          </Button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default LoginForm;
