import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import { selectNameFilter } from '../../redux/selectors';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const handleFilterChange = filter => dispatch(changeFilter(filter));

  return (
    <div className={css.searchBoxContainer}>
      <label className={css.searchBoxLabel}>
        Find contacts by name
        <input
          className={css.searchBoxInput}
          type="text"
          name="filter"
          value={filter}
          onChange={e => handleFilterChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
