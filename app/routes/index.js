const nootRoutes = require ('./noot-routes');

module.exports = function (app, db){
  nootRoutes(app, db);
}