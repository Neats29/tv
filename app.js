var server = require('./api/server');

server.start(function(err) {
   if (err) throw err;
    console.log('Server running at localhost:9000');
});