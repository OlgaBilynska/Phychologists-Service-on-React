import { Formik, ErrorMessage, Form } from 'formik';
import * as yup from 'yup';
import { auth, googleAuthProvider } from '../../firebase.js';
import { signInWithEmailAndPassword, signInWithPopup } from '@firebase/auth';

import {
  FormWrapper,
  LogInText,
  LogInTitle,
  ErrorText,
  Input,
  FormikWrapper,
  InputWrapper,
  ButtonBlock,
} from './LoginForm.styled';
import { EyeIcon } from 'components/RegistrationForm/RegistrationForm.styled';
import sprite from '../../assets/sprite.svg';
import { ButtonStyled } from 'components/Button/Button.styled.js';
import { useState } from 'react';

export const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const LoginForm = () => {
  const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye-off`);
  const [type, setType] = useState('password');

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

  const onLogInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    console.log('values.email', values.email);
    try {
      await signInWithEmailAndPassword(auth, values.email, values.password)
        .then(userCredential => {
          const user = userCredential.user;
          console.log('User', user);
          // setValues(values);
          resetForm();
        })
        .catch(error => {
          const errorCode = error.code;
          console.log('error code', errorCode);
          const errorMessage = error.message;
          console.log('errorMessage :>> ', errorMessage);
        });
    } catch (e) {
      console.error(e);
    }
  };

  const togglePassInput = () => {
    if (type === 'password') {
      setType('text');
      setToggleIcon(`${sprite}#icon-eye`);
    } else {
      setType('password');
      setToggleIcon(`${sprite}#icon-eye-off`);
    }
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
              <Input type={type} name="password" placeholder="Password" />
              <EyeIcon onClick={togglePassInput}>
                <use href={toggleIcon} />
              </EyeIcon>
            </InputWrapper>
            <FormError name="password" />
          </FormikWrapper>

          <ButtonBlock>
            <ButtonStyled type="submit" width="100%">
              Log In
            </ButtonStyled>

            <ButtonStyled
              type="submit"
              width="100%"
              onClick={onLogInWithGoogle}
            >
              Sign in with Google
            </ButtonStyled>
          </ButtonBlock>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default LoginForm;
