var Hapi    = require('hapi');
var vision  = require('vision');
var routes = require('./api/routes');
var server = new Hapi.Server();

server.register(vision, function () {
	
	server.connection({ 
		host: 'localhost', 
		port: 9000 
	});
	
    server.views({
        engines: {
            jade: require('jade')
        },
        relativeTo: __dirname,
        path: './api/views'
    });
	
	server.route(routes);
	
	server.start(function(err) {
	    if (err) {
		   console.log(err);
	    }
		
    	console.log('Server running at localhost:9000');
	});
});

