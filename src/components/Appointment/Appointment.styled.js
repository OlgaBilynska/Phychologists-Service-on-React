import { Form } from 'formik';
import styled from 'styled-components';

export const AppointmentWrapper = styled.div`
  max-width: 440px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const AppointmentTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ClockSvg = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16.83px;
  width: 20px;
  height: 20px;
  stroke: var(--color-text);
  fill: var(--color-white);
`;

export const PhoneTimeBlock = styled.div`
  display: flex;
  gap: 8px;
  :nth-child(1) {
    width: 50%;
  }
  :nth-child(2) {
    width: 50%;
  }
`;

export const InputsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormikAppointment = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const PsyBlock = styled.div`
  display: flex;
  gap: 14px;
`;

export const ImgPsy = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 15px;
`;

export const PsyTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const PsyTitle = styled.p`
  color: #8a8a89;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;

export const PsyName = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
