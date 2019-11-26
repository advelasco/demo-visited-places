const config = require('./config/env.config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PlacesRouter = require('./api/routes.config');

app.use('/scripts', express.static(__dirname + '/api/view/scripts'));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    if (req.method === 'OPTIONS') {
        return res.send(200);
    } else {
        return next();
    }
});


app.use(bodyParser.json());
PlacesRouter.routesConfig(app);


app.listen(config.port, function () {
    console.log('listening on port %s', config.port);
});