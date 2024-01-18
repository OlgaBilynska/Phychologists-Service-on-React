import {
  FilterText,
  FilterContainer,
  SelectPsyCategory,
} from './Filters.styled';

const Filters = () => {
  return (
    <FilterContainer>
      <FilterText>Filters</FilterText>
      <SelectPsyCategory>
        <option>A to Z</option>
        <option>Z to A</option>
        <option>Less than 10$</option>
        <option>Greater than 10$</option>
        <option>Popular</option>
        <option>Not popular</option>
        <option>Show all</option>
      </SelectPsyCategory>
    </FilterContainer>
  );
};

export default Filters;
