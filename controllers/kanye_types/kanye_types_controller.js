const kanye_typesDb = require('../../models/kanye_types');

function getAll(req, res, next) {
  console.log('About to query the DB');
  kanye_typesDb.getAllKanyeTypes()
    .then(data => {
      console.log('Queried DB and got' + data.length + 'results');
      res.locals.kanye_types = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

function getOne(req, res, next) {
  kanye_typesDb.getOneKanyeType(req.params.id)
    .then(data => {
      res.locals.kanye_types = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

function getInstanceType(req, res, next) {
  kanye_typesDb.getInstanceType(req.params.id)
    .then(data => {
      res.locals.kanye_instances = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}

module.exports = {
  getAll,
  getOne,
  getInstanceType
}
