import Button from 'components/Button';
import styled from 'styled-components';

export const HeadingStyled = styled.h1`
  font-size: 82px;
  margin-bottom: 20px;
`;

export const ImgStyled = styled.img`
  width: 464px;
  height: 526px;
  border-radius: 10px;
`;

export const ImgWrapper = styled.div`
  position: relative;
`;

export const HomeContentWrapper = styled.div`
  display: flex;
  gap: 125px;
  align-items: center;
  justify-content: space-between;
  margin-top: 78px;
`;

export const ContentBlock = styled.div`
  max-width: 595px;
`;

export const TitleAccent = styled.span`
  color: var(--color-accent);
  font-style: italic;
`;

export const Content = styled.p`
  margin-bottom: 40px;
  max-width: 470px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.36px;
`;

export const ArrowSvg = styled.svg`
  width: 18px;
  height: 18px;

  margin-left: 18px;

  fill: var(--color-white);
`;

export const BtnHome = styled(Button)`
  background-color: red;
`;

export const QuestionSvg = styled.svg`
  position: absolute;
  top: 53%;
  left: 45%;

  width: 17px;
  height: 25px;
  fill: var(--color-white);
  transform: translate(-50%, -50%);
  rotate: 15deg;
`;

export const QuestionWrapper = styled.div`
  position: absolute;
  top: 185px;
  left: -33px;

  width: 40px;
  height: 40px;

  background-color: #54be96;
  border-radius: 10px;
  rotate: 345deg;
`;

export const UsersSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 19.84px;
  height: 19.84px;

  fill: var(--color-white);
`;

export const UsersWrapper = styled.div`
  position: absolute;
  top: 38px;
  left: 449px;

  width: 40px;
  height: 40px;

  background-color: #fbc75e;
  border-radius: 10px;

  rotate: 15deg;
`;
