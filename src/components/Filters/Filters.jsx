import {
  FilterText,
  FilterContainer,
  SelectPsyCategory,
  FilterOption,
} from './Filters.styled';

const Filters = () => {
  return (
    <FilterContainer>
      <FilterText>Filters</FilterText>
      <SelectPsyCategory>
        <FilterOption>A to Z</FilterOption>
        <FilterOption>Z to A</FilterOption>
        <FilterOption>Less than 10$</FilterOption>
        <FilterOption>Greater than 10$</FilterOption>
        <FilterOption>Popular</FilterOption>
        <FilterOption>Not popular</FilterOption>
        <FilterOption>Show all</FilterOption>
      </SelectPsyCategory>
    </FilterContainer>
  );
};

export default Filters;
