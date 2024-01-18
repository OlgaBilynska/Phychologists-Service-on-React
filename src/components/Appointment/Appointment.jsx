import { Formik } from 'formik';
import * as yup from 'yup';
// import sprite from '../../assets/sprite.svg';
import { LogInTitle, LogInText } from 'components/LogInForm/LoginForm.styled';
import Button from 'components/Button';
import { Input } from 'components/LogInForm/LoginForm.styled';
import {
  AppointmentWrapper,
  AppointmentTextBlock,
  PhoneTimeBlock,
  InputsBlock,
  FormikAppointment,
  ImgPsy,
  PsyBlock,
  PsyTextBlock,
  PsyTitle,
  PsyName,
} from './Appointment.styled';
import { FormError } from 'components/LogInForm/LogInForm';
// import image from '../../assets/psy-img.jpg';

const Appointment = ({ psychologist }) => {
  const { name, avatar_url } = psychologist;

  const initialValues = {
    name: '',
    phone: '',
    time: '',
    email: '',
    comment: '',
  };

  const schema = yup.object().shape({
    name: yup.string().required('Name is a required field.'),
    phone: yup
      .number()
      .min(6)
      .max(16)
      .required('Phone number is a required field'),
    time: yup.date().required('Time is a required field'),
    email: yup.string().email().required('Email is a required field'),
    comment: yup.string().required('Write your comment here.'),
  });

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <AppointmentWrapper>
      <AppointmentTextBlock>
        <LogInTitle>Make an appointment with a psychologists</LogInTitle>
        <LogInText>
          You are on the verge of changing your life for the better. Fill out
          the short form below to book your personal appointment with a
          professional psychologist. We guarantee confidentiality and respect
          for your privacy.
        </LogInText>
      </AppointmentTextBlock>

      <PsyBlock>
        <ImgPsy alt="psychologist" src={avatar_url} />
        <PsyTextBlock>
          <PsyTitle>Your psychologist</PsyTitle>
          <PsyName>{name}</PsyName>
        </PsyTextBlock>
      </PsyBlock>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormikAppointment>
          <InputsBlock>
            <Input type="text" name="name" placeholder="Name" />
            <FormError name="name" />
            <PhoneTimeBlock>
              <Input type="phone" name="phone" placeholder="+380" />
              <FormError name="phone" />

              <Input
                type="time"
                name="time"
                views={['hours', 'minutes']}
                format="HH:mm"
                ampm={false}
                placeholder="00:00"
              />
              <FormError name="time" />
              {/* < ClockSvg>
                  <use href={`${sprite}#icon-clock`} />
                </> */}
            </PhoneTimeBlock>

            <Input type="email" name="email" placeholder="Email" />
            <FormError name="email" />
            <Input type="text" name="comment" placeholder="Comment" />
            <FormError name="comment" />
          </InputsBlock>

          <Button type="submit" width="100%">
            Send
          </Button>
        </FormikAppointment>
      </Formik>
    </AppointmentWrapper>
  );
};

export default Appointment;
