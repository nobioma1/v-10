let cache = {};

function filterCarOwners(carOwners, filter) {
  // If there is a change in number of car owners reset cache
  if (cache.carOwnerLength && cache.carOwnerLength !== carOwners.length) {
    cache = {};
  }

  if (!cache[filter.id]) {
    const filtered = carOwners.filter(carOwner => {
      return (
        carOwner.car_model_year >= filter.start_year &&
        carOwner.car_model_year <= filter.end_year &&
        (filter.gender
          ? carOwner.gender.toLowerCase() === filter.gender.toLowerCase()
          : true) &&
        (filter.countries.length > 0
          ? filter.countries.includes(carOwner.country)
          : true) &&
        (filter.colors.length > 0
          ? filter.colors.includes(carOwner.car_color)
          : true)
      );
    });
    cache['carOwnerLength'] = carOwners.length;
    cache[filter.id] = filtered;
  }
  return cache[filter.id];
}

module.exports = filterCarOwners;
