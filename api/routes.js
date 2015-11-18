var controller = require('./controller');

var routes = [
	{
		path: "/{file*}",
		method: "GET",		
		config: controller.serveFile
	},
	{
		path: '/', 
		method: 'GET', 
		config: controller.home
	}
];


module.exports = routes;