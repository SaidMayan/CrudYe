function sendKanyeTypes(req, res) {
  console.log('I send successful Kanye Types');
  res.render('kanye_types/index', {
    kanye_types: res.locals.kanye_types
  })
}

function sendInstanceType(req, res) {
  res.render('kanye_types/show', {
    kanye_types: res.locals.kanye_types,
    kanye_instances: res.locals.kanye_instances
  })
}

module.exports = {
  sendKanyeTypes,
  sendInstanceType
}
