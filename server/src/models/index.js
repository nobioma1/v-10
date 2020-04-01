const db = require('../data/db');

function getColors(filterId) {
  return db('filter_colors')
    .select('colors.name')
    .join('colors', 'colors.id', 'filter_colors.color_id')
    .where({ filter_id: filterId });
}

function getCountries(filterId) {
  return db('filter_countries')
    .select('countries.name')
    .join('countries', 'countries.id', 'filter_countries.country_id')
    .where({ filter_id: filterId });
}
exports.getFilters = async function() {
  const filters = await db('filters');
  return Promise.all(
    filters.map(async filter => {
      const countries = await getCountries(filter.id);
      const colors = await getColors(filter.id);

      return {
        ...filter,
        countries: countries.map(country => country.name),
        colors: colors.map(color => color.name),
      };
    })
  );
};

