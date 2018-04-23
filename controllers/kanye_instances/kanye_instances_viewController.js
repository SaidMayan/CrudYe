function sendKanye_instances(req, res) {
  res.render('kanye_instances/index', {
    kanye_instances: res.locals.kanye_instances
  })
}

function sendOneKanye_instance(req, res) {
  res.render('kanye_instances/show', {
    kanye_instances: res.locals.kanye_instances
  })
}

function sendCreateKanye_instance(req, res) {
  kanye_instances = res.locals.kanye_instances
  res.redirect(`kanye_instances/${kanye_instances.id}`);
}

function sendKanye_types(req, res) {
  res.render('kanye_instances/new', {
    kanye_instances: res.locals.kanye_instances
  })
}

function editKanye_instance(req, res) {
  kanye_instances = res.locals.kanye_instances;
  res.render(`kanye_instances/edit`, {
    kanye_instances: res.locals.kanye_instances
  })
}

function sendUpdatedInstance(req, res) {
  kanye_instances = res.locals.kanye_instances;
  res.redirect(`/kanye_instances/${res.locals.kanye_instances.id}`);
}

function deleteKanye_instance(req, res) {
  res.redirect(`/kanye_instances/${res.locals.kanye_instances.id}`);
}

module.exports = {
  sendKanye_instances,
  sendOneKanye_instance,
  sendCreateKanye_instance,
  sendKanye_types,
  editKanye_instance,
  sendUpdatedInstance,
  deleteKanye_instance
}
