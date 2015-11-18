var wreck = require('wreck');
var uri = 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1';

var controller = {
	
	home: {
		handler: function(request, reply){
			
			wreck.get(uri, function(err, res, payload){
				if (err) console.log(err);

				wreck.read(res, null, function (err, body) {
					if (err) console.log(err);
					JSON.stringify(payload);
					console.log("PAYLOAD:", payload);
					console.log("BODY:",body);
					return body;
				});
			});
			
			return reply.view('index');
		}
	}
};

module.exports = controller;