import React, {
  useEffect,
  useReducer,
  useRef,
  useCallback,
  useState,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import config from 'root/config';
import { Header } from './carOwners.style';
import CarOwnersItem from './CarOwnersItem';
import Loader from '../shared/Loader';

const INITIAL_STATE = {
  loading: true,
  carOwners: [],
  nextPage: null,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'START':
      return {
        ...state,
        loading: true,
      };
    case 'SET_CAR_OWNERS':
      return {
        ...state,
        loading: false,
        carOwners: [...state.carOwners, ...action.payload.filteredCarOwners],
        nextPage: action.payload.nextPage,
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

const CarOwners = () => {
  const [carOwnersReducer, dispatch] = useReducer(reducer, INITIAL_STATE);
  const history = useHistory();
  const { filterId } = useParams();

  const getPage = (pageNumber = 1) => {
    dispatch({ type: 'START' });
    axios
      .get(`${config.API_URL}/car_owners?filter=${filterId}&page=${pageNumber}`)
      .then(response => {
        dispatch({
          type: 'SET_CAR_OWNERS',
          payload: response.data,
        });
      })
      .catch(() => dispatch({ type: 'ERROR' }));
  };

  useEffect(() => {
    getPage();
  }, []);

  const observer = useRef();
  const lastElemRef = useCallback(
    node => {
      if (carOwnersReducer.loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && carOwnersReducer.nextPage !== null) {
          getPage(carOwnersReducer.nextPage);
        }
      });
      if (node) observer.current.observe(node);
    },
    [carOwnersReducer.loading]
  );

  return (
    <div>
      <Header>
        <div onClick={() => history.push('/')}>&larr; Home</div>
        <h2>Filtered Car Owners</h2>
      </Header>
      {!carOwnersReducer.loading && carOwnersReducer.carOwners.length === 0 ? (
        <p>There are no car owners for the selected filter</p>
      ) : (
        carOwnersReducer.carOwners.map((carOwner, index) =>
          carOwnersReducer.carOwners.length !== index + 1 ? (
            <CarOwnersItem key={carOwner.id} carOwner={carOwner} />
          ) : (
            <CarOwnersItem
              key={carOwner.id}
              carOwner={carOwner}
              lastRef={lastElemRef}
            />
          )
        )
      )}
      {carOwnersReducer.loading && <Loader title="filtered car owners" />}
    </div>
  );
};

export default CarOwners;
