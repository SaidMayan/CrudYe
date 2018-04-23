const db = require('../config/connection');

function getAllKanyeTypes() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM kanye_types`);
  return queryPromise;
}

function getOneKanyeType(id) {
  const queryPromise = db.one(`
    SELECT * FROM kanye_types
    WHERE id = $1`, id);
  return queryPromise;
}

function getInstanceType(id) {
  const queryPromise = db.any(`
  SELECT * FROM kanye_types
  JOIN kanye_instances
  ON kanye_instances.kanye_type_id = kanye_types.id
  WHERE kanye_instances.kanye_type_id = $1`, id);
  return queryPromise;
}

module.exports = {
  getAllKanyeTypes,
  getOneKanyeType,
  getInstanceType
}
