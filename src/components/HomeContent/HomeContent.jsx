import { useState } from 'react';
import image from '../../assets/psy-img.jpg';
import Button from 'components/Button/Button';
import Stats from 'components/Stats';
import sprite from '../../assets/sprite.svg';

import {
  HeadingStyled,
  ImgStyled,
  ImgWrapper,
  HomeContentWrapper,
  ContentBlock,
  TitleAccent,
  Content,
  ArrowSvg,
  QuestionSvg,
  UsersSvg,
  QuestionWrapper,
  UsersWrapper,
} from './HomeContent.styled';
import PopUpWindow from 'components/PopUpWindow';
import Appointment from 'components/Appointment';

const HomeContent = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <HomeContentWrapper>
      <ContentBlock>
        <HeadingStyled>
          The road to the <TitleAccent>depths</TitleAccent> of the human soul
        </HeadingStyled>
        <Content>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </Content>
        <div onClick={toggleModal}>
          <Button display="flex">
            <span>Get Started</span>
            <ArrowSvg>
              <use href={`${sprite}#icon-arrow`} />
            </ArrowSvg>
          </Button>
        </div>
        {showModal && (
          <PopUpWindow onClick={toggleModal}>
            <Appointment />
          </PopUpWindow>
        )}
      </ContentBlock>
      <ImgWrapper>
        <ImgStyled alt="psychologist" src={image} />
        <QuestionWrapper>
          <QuestionSvg>
            <use href={`${sprite}#icon-question`} />
          </QuestionSvg>
        </QuestionWrapper>
        <UsersWrapper>
          <UsersSvg>
            <use href={`${sprite}#icon-users`} />
          </UsersSvg>
        </UsersWrapper>
        <Stats />
      </ImgWrapper>
    </HomeContentWrapper>
  );
};

export default HomeContent;
