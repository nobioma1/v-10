exports.up = knex =>
  knex.schema.createTable('filter_countries', table => {
    table.increments('id');
    table
      .integer('filter_id')
      .references('id')
      .inTable('filters');
    table
      .integer('country_id')
      .references('id')
      .inTable('countries');
  });

exports.down = knex => knex.schema.dropTableIfExists('filter_countries');
