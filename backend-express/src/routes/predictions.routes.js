const express = require("express");
const router = express.Router();
const PredictionController = require("../controllers/predictions.controller")

router.get('/:id', PredictionController.getPredictionById);
router.post('/', PredictionController.createPrediction);

module.exports = router