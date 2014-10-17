var express = require("express"),
    app     = express(),
    http    = require("http"),
    server  = http.createServer(app),
    mongoose = require("mongoose");

app.configure(function () {
    app.use(express.bodyParser());
  	app.use(express.methodOverride());
  	app.use(app.router);
});

//Conexión con la BBDD jugadores
mongoose.connect('mongodb://localhost/jugadores', function(err, res) {
    if(err) console.log('ERROR: connecting to Database. ' + err);
    else console.log('Connected to Database');
});

routes = require('./routes/jugadores')(app);

app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});

//Servidor corriendo en el puerto 3000
server.listen(3000, function() {
  	console.log("Servidor corriendo en http://localhost:3000");
});

