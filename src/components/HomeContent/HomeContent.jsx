import image from '../../assets/psy-img.jpg';
import Button from 'components/Button/Button';
import { HeadingStyled, ImgStyled } from './HomeContent.styled';

const HomeContent = () => {
  return (
    <>
      <div>
        <HeadingStyled>The road to the depths of the human soul</HeadingStyled>
        <p>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <Button>Get Started</Button>
      </div>
      <ImgStyled alt="psychologist" src={image} />
    </>
  );
};

export default HomeContent;
