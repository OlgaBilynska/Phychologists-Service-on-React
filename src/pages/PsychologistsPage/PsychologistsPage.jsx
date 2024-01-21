import Header from 'components/Header';
import Filters from 'components/Filters';
import PsyList from 'components/PsyList/PsyList';
import { ContainerStyled } from 'components/Container/Container.styled';
import { PsyPageWrapper } from './PsychologistsPage.styled';

const PsychologistsPage = () => {
  return (
    <PsyPageWrapper>
      <Header />
      <ContainerStyled>
        <Filters />
        <PsyList />
      </ContainerStyled>
    </PsyPageWrapper>
  );
};

export default PsychologistsPage;
