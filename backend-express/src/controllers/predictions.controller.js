const { successResponse, errorResponse } = require('../utils/responseHelper');
const PredictionService = require('../services/predictions.service');
const axios = require('axios');

const getPredictionById = async (req, res) => {
  try {
    const { id } = req.params;
    const prediction = await PredictionService.getPredictionById(id);
    if (!prediction) {
      return errorResponse(res, 404, 'Prediction not found');
    }
    return successResponse(res, 200, 'Prediction retrieved successfully', prediction);
  } catch (error) {
    return errorResponse(res, 500, 'Internal Server Error', error.message);
  }
};

const createPrediction = async (req, res) => {
  try {
    const target_next_month_spending = 12;
    const saving_suggestion = "AA";

    const {
      income,
      fixed_expenses,
      weekly_food_spending,
      weekly_transport_spending,
      subscription_services_count,
      employment_status,
      age,
      last_month_spending,
      savings_last_month
    } = req.body;

    const predictionData = {
      income: Number(income),
      fixed_expenses: Number(fixed_expenses),
      weekly_food_spending: Number(weekly_food_spending),
      weekly_transport_spending: Number(weekly_transport_spending),
      subscription_services_count: Number(subscription_services_count),
      employment_status,
      age: Number(age),
      last_month_spending: Number(last_month_spending),
      savings_last_month: Number(savings_last_month)
    };

    const response = await axios.post('http://localhost:9000/predict', predictionData);

    const result = {...predictionData, ...response.data.data}
    const prediction = await PredictionService.createPrediction(result);
    return successResponse(res, 201, 'Prediction created successfully', prediction);
  } catch (error) {
    console.error("Prediction Error:", error);
    return errorResponse(res, 500, 'Internal Server Error', error.message);
  }
};

module.exports = {
  getPredictionById,
  createPrediction
};
