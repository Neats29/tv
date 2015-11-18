module.exports = {

	serveFile: {
		handler: {
			directory: {
				path: '../public'
			}
		}
	},
	
	home: {
		handler: function(request, reply){
			return reply.view('index');
		}
	}
};