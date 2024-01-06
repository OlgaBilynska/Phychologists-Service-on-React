import sprite from '../../assets/sprite.svg';
import {
  StatsWrapper,
  SvgWrapper,
  SvgCheckIcon,
  StatsDescription,
  StatsNumbers,
  StatsText,
} from './Stats.styled';

const Stats = () => {
  return (
    <StatsWrapper>
      <SvgWrapper>
        <SvgCheckIcon>
          <use href={`${sprite}#icon-check`} />
        </SvgCheckIcon>
      </SvgWrapper>
      <StatsText>
        <StatsDescription>Experienced psychologists</StatsDescription>
        <StatsNumbers>15,000</StatsNumbers>
      </StatsText>
    </StatsWrapper>
  );
};

export default Stats;
