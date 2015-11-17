var Hapi    = require('hapi');
var Path    = require('path');
var vision  = require('vision');
var Hoek    = require('hoek');

var server  = new Hapi.Server();

server.connection({ 
    host: 'localhost', 
    port: 9000 
});



server.register(vision, function (err) {

    Hoek.assert(!err, err);

    server.views({
        engines: {
            jade: require('jade')
        },
        path: Path.join(__dirname, './views')
    });
});


module.exports = server;