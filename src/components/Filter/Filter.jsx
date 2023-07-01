import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import { setStatusFilter } from '../../redux/filterSlice';

import PropTypes from 'prop-types';
import style from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={style.filterLabel}>
      Find contacts by name
      <input
        className={style.filterInput}
        type="text"
        value={value}
        onChange={event =>
          dispatch(setStatusFilter(event.target.value.toLocaleLowerCase()))
        }
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
