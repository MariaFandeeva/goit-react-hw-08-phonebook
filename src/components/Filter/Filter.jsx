import { useDispatch } from 'react-redux';
import { filteredContacts } from 'redux/filter/filterSlice';
import './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeInput = e => {
    dispatch(filteredContacts(e.target.value));
  };
  return (
    <label>
      <input
        type="text"
        name="filter"
        onChange={changeInput}
        placeholder="Find contacts by name"
      />
    </label>
  );
};
