const csv = require('csv-parser');
const fs = require('fs');

function readCSV(filePath) {
  return new Promise((resolve, reject) => {
    const fileData = [];

    fs.createReadStream(filePath, { encoding: 'utf8' })
      .pipe(csv())
      .on('data', data => {
        if (data.id) {
          data.id = parseInt(data.id);
          data.car_model_year = data.car_model_year
            ? parseInt(data.car_model_year)
            : null;
          fileData.push(data);
        }
      })
      .on('end', () => resolve(fileData))
      .on('error', () => reject(error));
  });
}

module.exports = readCSV;
