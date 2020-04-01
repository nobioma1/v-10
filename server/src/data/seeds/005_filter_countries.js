exports.seed = knex => {
  return knex('filter_countries')
    .del()
    .then(() => {
      return knex('filter_countries').insert([
        { id: 1, filter_id: 1, country_id: 1 },
        { id: 2, filter_id: 1, country_id: 2 },
        { id: 3, filter_id: 1, country_id: 3 },
        { id: 4, filter_id: 1, country_id: 4 },
        { id: 5, filter_id: 1, country_id: 5 },
        { id: 6, filter_id: 1, country_id: 6 },
        { id: 7, filter_id: 1, country_id: 7 },
        { id: 8, filter_id: 1, country_id: 8 },
        { id: 9, filter_id: 2, country_id: 1 },
        { id: 10, filter_id: 2, country_id: 2 },
        { id: 11, filter_id: 2, country_id: 3 },
        { id: 12, filter_id: 2, country_id: 4 },
        { id: 13, filter_id: 2, country_id: 5 },
        { id: 14, filter_id: 2, country_id: 6 },
        { id: 15, filter_id: 2, country_id: 7 },
        { id: 16, filter_id: 2, country_id: 8 },
        { id: 17, filter_id: 5, country_id: 1 },
        { id: 18, filter_id: 5, country_id: 2 },
        { id: 19, filter_id: 5, country_id: 3 },
        { id: 20, filter_id: 5, country_id: 4 },
        { id: 21, filter_id: 5, country_id: 5 },
        { id: 22, filter_id: 5, country_id: 6 },
        { id: 23, filter_id: 5, country_id: 7 },
        { id: 24, filter_id: 5, country_id: 8 },
      ]);
    });
};
