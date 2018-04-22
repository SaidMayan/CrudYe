const kanye_instancesRouter = require('../../routes/studentsRoutes');

function deleteKanye_instance(url) {
  return fetch(url, {
    method:'delete'
  }).then(res => {
    res.send('Deleted successfully')
  })
}
