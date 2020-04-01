const filterCarOwners = require('../filterCarOwners');

const sampleData = [
  {
    id: 22,
    first_name: 'Doug',
    last_name: 'McQuarrie',
    email: 'dmcquarriel@networksolutions.com',
    country: 'China',
    car_model: 'Buick',
    car_model_year: 1990,
    car_color: 'Yellow',
    gender: 'Male',
    job_title: 'Mechanical Systems Engineer',
    bio: 'Maecenas ut massa quis augue luctus tincidunt. ',
  },
  {
    id: 48,
    first_name: 'Marty',
    last_name: 'Beecheno',
    email: 'mbeecheno1b@prlog.org',
    country: 'Colombia',
    car_model: 'Buick',
    car_model_year: 1994,
    car_color: 'Violet',
    gender: 'Male',
    job_title: 'Nurse',
    bio: 'Nullam orci pede, venenatis non, sodales sed, tincidunt eu.',
  },
  {
    id: 69,
    first_name: 'Thaddeus',
    last_name: 'Jesse',
    email: 'tjesse1w@dot.gov',
    country: 'China',
    car_model: 'Kia',
    car_model_year: 2002,
    car_color: 'Aquamarine',
    gender: 'Male',
    job_title: 'Graphic Designer',
    bio: 'Morbi non quam nec dui luctus rutrum. Nulla tellus. ',
  },
];

describe('Filter Function', () => {
  test('Should filter data between range 1990 and 2010', () => {
    const result = filterCarOwners(sampleData, {
      id: 1,
      start_year: 1990,
      end_year: 2010,
      gender: '',
      countries: [],
      colors: [],
    });
    expect(result).toHaveLength(3);
  });

  test('Should filter data by countries', () => {
    const result = filterCarOwners(sampleData, {
      id: 2,
      start_year: 1990,
      end_year: 2010,
      gender: '',
      countries: ['Nigeria'],
      colors: [],
    });
    expect(result).toHaveLength(0);
  });

  test('Should filter data by countries', () => {
    const result = filterCarOwners(sampleData, {
      id: 3,
      start_year: 1990,
      end_year: 2002,
      gender: '',
      countries: [],
      colors: ['Aquamarine', 'Yellow'],
    });
    expect(result).toHaveLength(0);
  });
});
