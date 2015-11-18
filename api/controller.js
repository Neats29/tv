var wreck = require('wreck');
var uri = 'https://ibl.api.bbci.co.uk/ibl/v1/atoz/a/programmes?page=1';

var controller = {
	
	home: {
		handler: function(request, reply){
			var shows;
			
			wreck.get(uri, function(err, res, payload){
				if (err) { throw err; }

				wreck.read(res, null, function (err, body) {
					if (err) { 
						console.log(err); 
					} else {
						payload = JSON.parse(payload.toString()); //have to turn to string, otherwise payload only returns the buffer
	//					console.log("PAYLOAD:", payload.atoz_programmes.elements);
						shows = payload.atoz_programmes.elements;
//                        console.log(shows);
                        for (var i=0; i< shows.length; i++){
                            console.log(shows[i].title);
//                            return shows[i].title;
                        }
						return shows;
					}
				});
			});
			
			return reply.view('index', { shows : shows });
		}
	}
};

module.exports = controller;