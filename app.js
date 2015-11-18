var Hapi    = require('hapi');
var vision  = require('vision');
var Path = require('path');
var routes = require('./api/routes');


var server = new Hapi.Server({
	connections: {
		routes: {
			files: {
				relativeTo: Path.join(__dirname, '../public')
			}
		}
	}
});


server.connection({ 
    host: 'localhost', 
    port: 9000 
});

server.route(routes);
server.register(vision, function (err) {
	if (err) {
		console.log(err);
	}

    server.views({
        engines: {
            jade: require('jade')
        },
        path: __dirname + './views',
		compileOptions: {
            pretty: true
        }
    });
	
	
	
	server.start(function(err) {
	    if (err) {
		   console.log(err);
	    }
		
    	console.log('Server running at localhost:9000');
	});
});

