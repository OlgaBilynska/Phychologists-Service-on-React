import HomeContent from 'components/HomeContent/HomeContent';
import Header from 'components/Header';
import { ContainerStyled } from 'components/Container/Container.styled';
import { HomePageWrapper } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header />
      <ContainerStyled>
        <HomeContent />
      </ContainerStyled>
    </HomePageWrapper>
  );
};

export default HomePage;
