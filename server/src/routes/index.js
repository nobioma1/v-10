const { Router } = require('express');

const { getFilters } = require('../models');
const apiRouter = Router();

apiRouter.get('/filters', async (req, res, next) => {
  try {
    const filters = await getFilters();
    res.status(200).json({ filters });
  } catch (error) {
    next(error);
  }
});

module.exports = apiRouter;
