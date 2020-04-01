exports.up = knex =>
  knex.schema.createTable('filters', table => {
    table.increments('id').primary();
    table.integer('start_year').notNullable();
    table.integer('end_year').notNullable();
    table.string('gender').notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists('filters');
