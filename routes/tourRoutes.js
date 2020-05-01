const express = require('express');

const router = express.Router();
const tourController = require('../controllers/tourController');

router.param('id', tourController.checkID);
//router.param('/', tourController.checkBody);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour);

module.exports = router;
