const kanye_instancesDb = require('../../models/kanye_instances');
const kanye_typesDb = require('../../models/kanye_types');


function getAll(req, res, next) {
  kanye_instancesDb.getAllKanyeInstances()
    .then(data => {
      res.locals.kanye_instances = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

function getOne(req, res, next) {
  kanye_instancesDb.getOneKanyeInstance(req.params.id)
    .then(data => {
      res.locals.kanye_instances = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

function getKanye_types(req, res, next) {
  kanye_typesDb.getAllKanyeTypes()
    .then(data => {
      res.locals.kanye_types = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

function create(req, res, next) {
  kanye_instancesDb.createKanyeInstance(req.body)
    .then(data => {
      res.locals.kanye_instances = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

function edit(req, res, next) {
  kanye_instancesDb.getOneKanyeInstance(req.params.id)
    .then(data => {
      res.locals.kanye_instances = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

function update(req, res, next) {
  req.body.id = req.params.id;
  kanye_instancesDb.updateKanyeInstance(req.body)
    .then(data => {
      res.send('Edited successfuly');
    })
    .catch(err=> {
      next(err);
    })
}

function destroy(req, res) {
  kanye_instancesDb.deleteKanyeInstance(req.params.id)
    .then(() => {
      res.send(`Deleted successfully`);
    })
    .catch(err => {
      res.status(500).json({
        message:err.message
      })
    })
}

module.exports = {
  getAll,
  getOne,
  getKanye_types,
  create,
  edit,
  update,
  destroy,
}
