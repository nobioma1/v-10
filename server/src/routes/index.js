const { Router } = require('express');

const { getFilters, getFilterById, getCarOwners } = require('../models');
const filterCarOwners = require('../utils/filterCarOwners');

const apiRouter = Router();

apiRouter.get('/filters', async (req, res, next) => {
  try {
    const filters = await getFilters();
    res.status(200).json({ filters });
  } catch (error) {
    next(error);
  }
});

apiRouter.get('/car_owners', async (req, res, next) => {
  try {
    if (req.query.filter) {
      const filter = await getFilterById(parseInt(req.query.filter, 10));
      const page = req.query.page ? parseInt(req.query.page, 10) : 1;
      if (filter) {
        const carOwners = await getCarOwners();
        const result = filterCarOwners(carOwners, filter, page);
        return res.status(200).json(result);
      }
      throw new Error('Filter with ID does not exist');
    }
    throw new Error('Provide the filter ID');
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
