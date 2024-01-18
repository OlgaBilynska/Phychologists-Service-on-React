import styled from 'styled-components';

export const FilterText = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;
`;

export const FilterContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 32px;
  margin-top: 64px;

  max-width: 226px;
`;

export const SelectPsyCategory = styled.select`
  width: 100%;
  padding: 14px 18px;
  border: transparent;
  border-radius: 14px;
  background: var(--color-accent);
  color: var(--color-white);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;

  &:focus:active {
    border: transparent;
  }
`;
