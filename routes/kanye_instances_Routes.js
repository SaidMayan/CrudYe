const kanye_instances_Router = require('express').Router();
const kanye_instances_Controller = require('../controllers/kanye_instances/kanye_instances_controller');
const kanye_instances_viewController = require('../controllers/kanye_instances/kanye_instances_viewController');

const kanye_instancesDb = require('../models/kanye_instances');

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

kanye_instances_Router.route('/')
  .get(kanye_instances_Controller.getAll, kanye_instances_viewController.sendKanye_instances, sendError)
  .post(kanye_instances_Controller.create, kanye_instances_viewController.sendCreateKanye_instance)

kanye_instances_Router.route('/new')
  .get(kanye_instances_Controller.getKanye_types, kanye_instances_viewController.sendKanye_types)

kanye_instances_Router.route('/:id')
  .get(kanye_instances_Controller.getOne, kanye_instances_viewController.sendOneKanye_instance)
  .put(kanye_instances_Controller.update)
  .delete(kanye_instances_Controller.destroy, kanye_instances_viewController.deleteKanye_instance)


kanye_instances_Router.route('/:id/edit')
.get(kanye_instances_Controller.getOne, kanye_instances_Controller.getKanye_types, kanye_instances_viewController.editKanye_instance)

module.exports = kanye_instances_Router;


