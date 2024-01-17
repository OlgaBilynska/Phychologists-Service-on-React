import HomeContent from 'components/HomeContent/HomeContent';
import Header from 'components/Header';
import { ContainerStyled } from 'components/Container/Container.styled';
import { HomePageWrapper } from './HomePage.styled';
import { AuthProvider } from 'auth';

const HomePage = () => {
  return (
    <AuthProvider>
      <HomePageWrapper>
        <Header />
        <ContainerStyled>
          <HomeContent />
        </ContainerStyled>
      </HomePageWrapper>
    </AuthProvider>
  );
};

export default HomePage;
