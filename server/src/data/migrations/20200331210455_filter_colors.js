exports.up = knex =>
  knex.schema.createTable('filter_colors', table => {
    table.increments('id');
    table
      .integer('filter_id')
      .references('id')
      .inTable('filters');
    table
      .integer('color_id')
      .references('id')
      .inTable('colors');
  });

exports.down = knex => knex.schema.dropTableIfExists('filter_colors');
