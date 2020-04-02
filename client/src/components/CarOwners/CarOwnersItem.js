import React from 'react';

import {
  CarOwnersCard,
  CarOwnersCardImage,
  Bio,
  Details,
} from './carOwners.style';
import { Color } from '../Filters/filters.style';

const CarOwnersItem = ({ carOwner, lastRef }) => {
  return (
    <CarOwnersCard ref={lastRef}>
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
        <p className="title">
          Email: <span>{carOwner.email}</span>
        </p>
        <Bio className="title">
          Bio: <span>{carOwner.bio}</span>
        </Bio>
      </Details>
    </CarOwnersCard>
  );
};

export default CarOwnersItem;
