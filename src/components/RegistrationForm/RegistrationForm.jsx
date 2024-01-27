import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { auth, db } from '../../firebase.js'; // Import the 'db' module
import { createUserWithEmailAndPassword } from '@firebase/auth';
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
import { useState, useEffect } from 'react';
import { ref, onValue, set, child, push, update } from 'firebase/database';
import { nanoid } from 'nanoid';

const RegistrationForm = () => {
  const [toggleIcon, setToggleIcon] = useState(`${sprite}#icon-eye`);
  const [type, setType] = useState('password');

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required('Name is a required field.'),
    email: yup.string().email().required('Email is a required field.'),
    password: yup.string().min(6).max(20).required('Password is required.'),
  });

  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorText>{message}</ErrorText>}
      />
    );
  };

  useEffect(() => {
    const favoritesRef = ref(db, 'users');
    console.log('users', favoritesRef);

    const query = onValue(favoritesRef, snapshot => {
      const data = snapshot.val();

      console.log('data', data);

      //  if (data) {
      //    const psychologistsArray = Object.values(data);
      //    setPsychologists(prevPsychologists => [
      //      ...prevPsychologists,
      //      ...psychologistsArray,
      //    ]);
      //  }
    });
    return () => query();
  }, []);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await createUserWithEmailAndPassword(auth, values.email, values.password);

      // const uid = nanoid();

      const postData = {
        name: values.name,
        email: values.email,
        // uid: uid,
      };

      const newPostKey = push(child(ref(db), 'users')).key;

      const updates = {};
      updates['/users/' + newPostKey] = postData;
      // updates['/user-posts/' + uid + '/' + newPostKey] = postData;

      update(ref(db), updates);

      // set(ref(db, 'users/'), {
      //   username: values.name,
      //   email: values.email,
      // });
      // Add data to Realtime Database
      // const contactsRef = ref(db, 'users'); // Set reference to "Contacts" node
      // contactsRef.push({
      //   name: values.name,
      //   email: values.email,
      //   // You can add more fields as needed
      // });

      resetForm();
    } catch (error) {
      console.error('Error registering user:', error.message);
    }
  };

  const togglePassInput = () => {
    setType(prevType => (prevType === 'password' ? 'text' : 'password'));
    setToggleIcon(prevIcon =>
      prevIcon === `${sprite}#icon-eye-off`
        ? `${sprite}#icon-eye`
        : `${sprite}#icon-eye-off`
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
              <Input type={type} name="password" placeholder="Password" />
              <EyeIcon onClick={togglePassInput}>
                <use href={toggleIcon} />
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
