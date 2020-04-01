import React, { useEffect, useReducer } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';

import config from 'root/config';
import {
  CarOwnersCard,
  CarOwnersCardImage,
  Details,
  Bio,
  Header,
} from './carOwners.style';
import { Color } from '../Filters/filters.style';

const INITIAL_STATE = {
  loading: false,
  carOwners: [],
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
        carOwners: action.payload,
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

  useEffect(() => {
    axios
      .get(`${config.API_URL}/car_owners?filter=${1}`)
      .then(response => {
        dispatch({ type: 'START' });
        dispatch({
          type: 'SET_CAR_OWNERS',
          payload: response.data.filteredCarOwners,
        });
      })
      .catch(() => dispatch({ type: 'ERROR' }));
  }, []);

  return (
    <div>
      <Header>
        <div onClick={() => history.push('/')}>&larr; Home</div>
        <h2>Filtered Car Owners</h2>
      </Header>
      {carOwnersReducer.carOwners.length === 0 ? (
        <p>There are no car owners for the selected filter</p>
      ) : (
        carOwnersReducer.carOwners.map(carOwner => (
          <CarOwnersCard key={carOwner.id}>
            <CarOwnersCardImage>
              <img src="https://img.icons8.com/ios-filled/100/000000/car.png" />
            </CarOwnersCardImage>
            <Details>
              <h2>
                {carOwner.first_name} {carOwner.last_name}
              </h2>
              <section className="car">
                <div>
                  <p>
                    Brand <br />
                    <span>{carOwner.car_model}</span>{' '}
                  </p>
                </div>
                <div>
                  <p>
                    Year
                    <br />
                    <span>{carOwner.car_model_year}</span>
                  </p>
                </div>
                <div>
                  <p>
                    Color <br />
                    <Color color={carOwner.car_color} />{' '}
                  </p>
                </div>
              </section>
              <section className="owner">
                <div>
                  <p>Country</p>
                  <p>{carOwner.country}</p>
                </div>
                <div>
                  <p>Gender</p>
                  <p>{carOwner.gender}</p>
                </div>
                <div>
                  <p>Job</p>
                  <p>{carOwner.job_title}</p>
                </div>
              </section>
              <p>
                Email: <span>{carOwner.email}</span>
              </p>
              <Bio>
                Bio: <span>{carOwner.bio}</span>
              </Bio>
            </Details>
          </CarOwnersCard>
        ))
      )}
    </div>
  );
};

export default CarOwners;
