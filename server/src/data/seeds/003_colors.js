exports.seed = knex => {
  return knex('colors')
    .del()
    .then(() => {
      return knex('colors').insert([
        { id: 1, name: 'Green' },
        { id: 2, name: 'Violet' },
        { id: 3, name: 'Yellow' },
        { id: 4, name: 'Blue' },
        { id: 5, name: 'Teal' },
        { id: 6, name: 'Maroon' },
        { id: 7, name: 'Red' },
        { id: 8, name: 'Aquamarine' },
        { id: 9, name: 'Orange' },
        { id: 10, name: 'Mauv' },
      ]);
    });
};
