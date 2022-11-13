import { Formik } from 'formik';
import { FilterInput, Title, FilterWrap } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterWrap>
      <Title>Find contact by name</Title>
      <Formik>
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeFilter}
          autoComplete="off"
        ></FilterInput>
      </Formik>
    </FilterWrap>
  );
};
