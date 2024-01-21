import { ContainerStyled } from 'components/Container/Container.styled';
import Filters from 'components/Filters';
import Header from 'components/Header';
import { PsyPageWrapper } from 'pages/PsychologistsPage/PsychologistsPage.styled';

const FavoritePage = () => {
  return (
    <PsyPageWrapper>
      <Header />
      <ContainerStyled>
        <Filters />
      </ContainerStyled>
    </PsyPageWrapper>
  );
};

export default FavoritePage;
