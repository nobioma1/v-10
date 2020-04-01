const readCSV = require('../../utils/readCSV');

exports.seed = knex => {
  return knex('car_owners')
    .del()
    .then(async () => {
      const carOwners = await readCSV(__dirname + '/car_owners_data.csv');
      return knex.batchInsert('car_owners', carOwners, 1000);
    });
};
