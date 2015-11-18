var controller = require('./controller');

var routes = [
	{
		path: '/', 
		method: 'GET', 
		config: controller.home
	}
];


module.exports = routes;