import HomeContent from 'components/HomeContent/HomeContent';
// import Header from 'components/Header/Header';

import { ContainerStyled } from 'components/Container/Container.styled';
import Header from 'components/Header';

const HomePage = () => {
  return (
    <>
      <ContainerStyled>
        <Header />
        <HomeContent />
      </ContainerStyled>
    </>
  );
};

export default HomePage;
