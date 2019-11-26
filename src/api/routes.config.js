const PlacesController = require('./controllers/places.controller');

exports.routesConfig = function (app) {
   app.get('/', function(request, response){
      response.sendFile(__dirname + '/view/index.html');
   });
   app.post('/api/v1/places', [
      PlacesController.insert
   ]);
   app.get('/api/v1/places', [
      PlacesController.list
   ]);
   app.get('/api/v1/places/:id', [
      PlacesController.getById
   ]);
   app.delete('/api/v1/places/:id', [
      PlacesController.removeById
   ]);
   app.put('/api/v1/places/:id', [
      PlacesController.updateById
   ]);
};