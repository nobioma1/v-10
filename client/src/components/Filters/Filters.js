import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

import config from 'root/config';
import FilterCardItem from './FilterCardItem';
import Loader from '../shared/Loader';

const INITIAL_STATE = {
  loading: true,
  filters: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTERS':
      return {
        ...state,
        loading: false,
        filters: action.payload,
        error: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: 'Something went wrong fetching filters',
      };
    default:
      return state;
  }
};

const Filters = () => {
  const [filterReducer, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    axios
      .get(`${config.API_URL}/filters`)
      .then(response => {
        dispatch({ type: 'SET_FILTERS', payload: response.data.filters });
      })
      .catch(() => dispatch({ type: 'ERROR' }));
  }, []);
  return (
    <div>
      <div>
        <h1>Filter</h1>
      </div>

      {filterReducer.loading ? (
        <Loader title="filters" />
      ) : (
        filterReducer.filters.map(filter => (
          <FilterCardItem key={filter.id} filter={filter} />
        ))
      )}
    </div>
  );
};

export default Filters;
