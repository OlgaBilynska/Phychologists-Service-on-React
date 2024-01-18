import styled from 'styled-components';

export const NameRatingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CircleName = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  background-color: rgba(252, 131, 44, 0.2);
  color: var(--color-accent);
  border-radius: 50%;
`;

export const FirstLetter = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CircleAndInfo = styled.div`
  display: flex;
  gap: 12px;
`;
