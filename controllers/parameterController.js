// controllers/parameterController.js
import parameters from '../models/parameters.json' assert { type: 'json' };

export const getAllParameters = (req, res) => {
  res.status(200).json(parameters);
};
