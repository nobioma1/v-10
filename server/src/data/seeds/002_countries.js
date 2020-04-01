exports.seed = knex => {
  return knex('countries')
    .del()
    .then(() => {
      return knex('countries').insert([
        { id: 1, name: 'China' },
        { id: 2, name: 'South Africa' },
        { id: 3, name: 'france' },
        { id: 4, name: 'Mexico' },
        { id: 5, name: 'Japan' },
        { id: 6, name: 'Estonia' },
        { id: 7, name: 'Colombia' },
        { id: 8, name: 'China' },
      ]);
    });
};
