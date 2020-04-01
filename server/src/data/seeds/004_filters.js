exports.seed = knex => {
  return knex('filters')
    .del()
    .then(() => {
      return knex('filters').insert([
        { id: 1, start_year: 1990, end_year: 2010, gender: 'male' },
        { id: 2, start_year: 1990, end_year: 2010, gender: '' },
        { id: 3, start_year: 1980, end_year: 2002, gender: 'female' },
        { id: 4, start_year: 1990, end_year: 2000, gender: '' },
        { id: 5, start_year: 1990, end_year: 2009, gender: '' },
      ]);
    });
};
