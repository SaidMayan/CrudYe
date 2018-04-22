const kanye_types_Router = require('express').Router();
const kanye_types_controller = require('../controllers/kanye_types/kanye_types_controller');
const kanye_types_viewController = require('../controllers/kanye_types/kanye_types_viewController');

const kanye_typesDb = require('../models/kanye_types');

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

kanye_types_Router.route('/')
  .get(kanye_types_controller.getAll, kanye_types_viewController.sendKanyeTypes, sendError);

kanye_types_Router.route('/:id')
  .get(kanye_types_controller.getOne, kanye_types_controller.getInstanceType, kanye_types_viewController.sendInstanceType)


module.exports = kanye_types_Router;
