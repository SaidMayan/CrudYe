const db = require('../config/connection');

function getAllKanyeInstances() {
  const queryPromise = db.manyOrNone(`
    SELECT kanye_instances.id, kanye_instances.context, kanye_instances.img_url, kanye_types.kanye_type FROM kanye_instances
    JOIN kanye_types ON kanye_types.id = kanye_instances.kanye_type_id
    `);
  return queryPromise;
}

function getOneKanyeInstance(id) {
  const queryPromise = db.one(`
    SELECT * FROM kanye_instances
    WHERE id = $1`, id);
  return queryPromise;
}

function createKanyeInstance(kanye_instance) {
  const queryPromise = db.one(`
    INSERT INTO kanye_instances (context, img_url, kanye_type_id)
    VALUES ($/context/, $/img_url/, $/kanye_type_id/)
    RETURNING *`, kanye_instance);
  return queryPromise;
}

function updateKanyeInstance(kanye_instance) {
  const queryPromise = db.one(`
    UPDATE kanye_instances
    SET context = $/context/,
    img_url = $/image/,
    kanye_type_id = $/kanye_type_id/
    WHERE id = $/id/
    RETURNING *`, kanye_instance);
  return queryPromise;
}

function deleteKanyeInstance(id) {
  const queryPromise = db.none(`
    DELETE FROM kanye_instances
    WHERE id = $1`, id);
    return queryPromise;
}

module.exports = {
  getAllKanyeInstances,
  getOneKanyeInstance,
  createKanyeInstance,
  updateKanyeInstance,
  deleteKanyeInstance
}
