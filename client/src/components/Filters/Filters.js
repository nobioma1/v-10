import React, { useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import config from 'root/config';
import { FilterCard, Color, Country } from './filters.style';

const INITIAL_STATE = {
  loading: false,
  filters: [],
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        loading: true,
      };
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
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${config.API_URL}/filters`)
      .then(response => {
        dispatch({ type: 'START' });
        dispatch({ type: 'SET_FILTERS', payload: response.data.filters });
      })
      .catch(() => dispatch({ type: 'ERROR' }));
  }, []);
  return (
    <div>
      <div>
        <h1>Filter</h1>
      </div>
      {filterReducer.filters.map(filter => (
        <FilterCard
          key={filter.id}
          onClick={() => history.push(`/filter/${filter.id}`)}
        >
          <h2>
            {filter.start_year} - {filter.end_year}
          </h2>
          {filter.gender && <p>{filter.gender}</p>}
          {filter.countries.length > 0 && (
            <ul>
              {filter.countries.map((country, index) => (
                <Country key={`${country}-${index}`}>{country}</Country>
              ))}
            </ul>
          )}
          {filter.colors.length > 0 && (
            <ul>
              {filter.colors.map((color, index) => (
                <Color key={`${color}-${index}`} color={color} />
              ))}
            </ul>
          )}
        </FilterCard>
      ))}
    </div>
  );
};

export default Filters;
