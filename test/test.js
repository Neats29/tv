var lab = exports.lab = require("lab").script();
var assert = require('chai').assert;
var server = require('../app.js');

lab.experiment("when landing on the homepage", function() {
	lab.test("landing page", function(done){
		var options = {
			url: '/',
			method: 'GET'
		};
	
		server.inject(options, function(response) {
			assert.equal(response.statusCode, 200, "should get a 200 status code");
			done();
		});
	});
	
});