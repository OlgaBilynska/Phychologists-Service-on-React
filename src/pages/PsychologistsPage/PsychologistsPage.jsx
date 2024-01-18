import Header from 'components/Header';
import Filters from 'components/Filters';
import PsyList from 'components/PsyList/PsyList';
import { ContainerStyled } from 'components/Container/Container.styled';
import { PsyPageWrapper } from './PsychologistsPage.styled';

const PsychologistsPage = ({ psychologists }) => {
  return (
    <PsyPageWrapper>
      <Header />
      <ContainerStyled>
        <Filters />
        <PsyList psychologists={psychologists} />
      </ContainerStyled>
    </PsyPageWrapper>
  );
};

export default PsychologistsPage;
