import React from 'react';
import { useHistory } from 'react-router-dom';

import { FilterCard, Color, Country } from './filters.style';

const FilterCardItem = ({ filter }) => {
  const history = useHistory();

  return (
    <FilterCard onClick={() => history.push(`/filter/${filter.id}`)}>
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
  );
};

export default FilterCardItem;
