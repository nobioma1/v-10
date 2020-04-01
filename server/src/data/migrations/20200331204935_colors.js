exports.up = knex =>
  knex.schema.createTable('colors', table => {
    table.increments('id').primary();
    table.string('name', 128).notNullable();
  });

exports.down = knex => knex.schema.dropTableIfExists('colors');
