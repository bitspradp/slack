const { Model } = require('sequelize');
const logger = require('./logger');

const { findOrCreate } = Model;

Model.findOrCreate = async function debugFindOrCreate(...args) {
  try {
    return await findOrCreate.apply(this, args);
  } catch (err) {
    logger.error('Error found in findOrCreate', args);
    throw err;
  }
};
