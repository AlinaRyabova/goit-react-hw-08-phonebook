import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/filterSlice';

import style from './Filter.module.css';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setStatusFilter(event.target.value.toLowerCase()));
  };

  return (
    <label className={style.filterLabel}>
      Find contacts by name
      <input
        className={style.filterInput}
        type="text"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default Filter;
