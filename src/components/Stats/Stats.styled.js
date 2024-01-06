import styled from 'styled-components';

export const StatsWrapper = styled.div`
  position: absolute;
  top: 333px;
  left: -101px;

  display: flex;
  gap: 16px;

  background-color: var(--color-accent);
  width: 311px;
  height: 118px;

  padding: 32px;

  border-radius: 20px;
`;

export const SvgWrapper = styled.div`
  width: 54px;
  height: 54px;

  background-color: var(--color-white);

  border-radius: 13px;
  padding: 12px;
`;

export const SvgCheckIcon = styled.svg`
  width: 30px;
  height: 30px;

  fill: var(--color-accent);
`;

export const StatsText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  color: var(--color-white);
`;

export const StatsDescription = styled.p`
  font-size: 14px;
  color: rgba(251, 251, 251, 0.5);
`;

export const StatsNumbers = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
