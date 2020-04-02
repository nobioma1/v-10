function splitToPages(arr, perPage = 50) {
  let totalPages = Math.ceil(arr.length / perPage);
  let currentPage = 1;
  let start = 0;
  let end = perPage;
  let pages = {};

  for (let i = 0; i < totalPages; i++) {
    const page = arr.slice(start, end);
    pages[currentPage] = page;
    currentPage++;
    start += perPage;
    end += perPage;
  }

  return { pages, totalPages };
}

function filterCarOwners(carOwners, filter, page = 1, cache = {}) {
  // If there is a change in number of car owners reset cache
  if (cache.carOwnersLength && cache.carOwnersLength !== carOwners.length) {
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

    const { pages, totalPages } = splitToPages(filtered);
    cache['carOwnersLength'] = carOwners.length;
    cache[filter.id] = {};
    cache[filter.id]['pages'] = pages;
    cache[filter.id]['totalPages'] = totalPages;
  }

  return {
    nextPage: page + 1 > cache[filter.id]['totalPages'] ? null : page + 1,
    filteredCarOwners: cache[filter.id]['pages'][page] || [],
  };
}

module.exports = filterCarOwners;
