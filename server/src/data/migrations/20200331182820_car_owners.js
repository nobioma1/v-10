exports.up = knex =>
  knex.schema.createTable('car_owners', table => {
    table.increments('id').primary();
    table.string('first_name', 128).notNullable();
    table.string('last_name', 128).notNullable();
    table.string('email', 128).notNullable();
    table.string('country', 128).notNullable();
    table.string('car_model', 128).notNullable();
    table.integer('car_model_year').notNullable();
    table.string('car_color', 128).notNullable();
    table.string('gender', 10).notNullable();
    table.string('job_title', 128).notNullable();
    table.text('bio');
  });

exports.down = knex => knex.schema.dropTableIfExists('car_owners');
