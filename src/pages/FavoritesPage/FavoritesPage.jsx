import { ContainerStyled } from 'components/Container/Container.styled';
import FavList from 'components/FavList';
import Filters from 'components/Filters';
import Header from 'components/Header';
import { PsyPageWrapper } from 'pages/PsychologistsPage/PsychologistsPage.styled';

const FavoritePage = () => {
  return (
    <PsyPageWrapper>
      <Header />
      <ContainerStyled>
        <Filters />
        <FavList />
      </ContainerStyled>
    </PsyPageWrapper>
  );
};

export default FavoritePage;
