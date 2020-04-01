exports.seed = knex => {
  return knex('filter_colors')
    .del()
    .then(() => {
      return knex('filter_colors').insert([
        { id: 1, filter_id: 1, color_id: 1 },
        { id: 2, filter_id: 1, color_id: 2 },
        { id: 3, filter_id: 1, color_id: 3 },
        { id: 4, filter_id: 1, color_id: 4 },
        { id: 5, filter_id: 1, color_id: 5 },
        { id: 6, filter_id: 1, color_id: 6 },
        { id: 7, filter_id: 1, color_id: 7 },
        { id: 8, filter_id: 1, color_id: 8 },
        { id: 9, filter_id: 1, color_id: 9 },
        { id: 10, filter_id: 1, color_id: 10 },
        { id: 11, filter_id: 2, color_id: 1 },
        { id: 12, filter_id: 2, color_id: 2 },
        { id: 13, filter_id: 2, color_id: 3 },
        { id: 14, filter_id: 2, color_id: 4 },
        { id: 15, filter_id: 2, color_id: 5 },
        { id: 16, filter_id: 2, color_id: 6 },
        { id: 17, filter_id: 2, color_id: 7 },
        { id: 18, filter_id: 2, color_id: 8 },
        { id: 19, filter_id: 2, color_id: 9 },
        { id: 20, filter_id: 2, color_id: 10 },
        { id: 21, filter_id: 3, color_id: 2 },
        { id: 22, filter_id: 3, color_id: 2 },
        { id: 23, filter_id: 3, color_id: 3 },
        { id: 24, filter_id: 3, color_id: 4 },
        { id: 25, filter_id: 3, color_id: 5 },
        { id: 26, filter_id: 3, color_id: 6 },
        { id: 27, filter_id: 3, color_id: 7 },
        { id: 28, filter_id: 3, color_id: 8 },
        { id: 29, filter_id: 3, color_id: 9 },
        { id: 30, filter_id: 3, color_id: 10 },
      ]);
    });
};
