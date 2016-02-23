// var WebSocketServer = require('ws').Server
// var wss = new WebSocketServer({
// 	host : '0.0.0.0',
// 	port : 8001
// });
// wss.on('connection', function(ws) {
// 	ws.on('message', function(message) {
// 		console.log('received: %s', message);
// 		ws.send(message);
// 	});
// });

// var WebSocketServer = require('ws').Server
// var wss = new WebSocketServer({ 
// 	host: '0.0.0.0',
// 	port: 8001 });

//  console.log("Server is running");

// wss.on('connection', function connection(ws) {
// 	// console.log('Server started');
// 	ws.on('message', function incoming(message) {
// 		console.log('received: %s', message);
// 		wss.clients.forEach(function each(client) {
// 		    client.send(message);
// 		  });
// 	});
// });

var WebSocketServer = require('ws').Server
var wss = new WebSocketServer({ 
	host: '0.0.0.0',
	port: 8001 });
	
	console.log("Server is running");
var jsonStr;
var dataObj;

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(data, flags) {
		if(flags.binary==true){
			jsonStr = JSON.stringify(data);
			dataObj = JSON.parse(jsonStr);
			// console.log(JSON.stringify(dataObj.data));
			// console.log(data.valueOf());
			wss.clients.forEach(function each(client) {
			    //client.send(JSON.stringify(data));
			    client.send(JSON.stringify(dataObj.data));
			});
		}
		else{
			console.log('received: %s', data);
		 // wss.clients.forEach(function each(client) {
		 //    	client.send(data);
		 //  	});
		}
	});
});
