var WebSocket = require('ws');
var ws = new WebSocket('ws://0.0.0.0:8001');

ws.on('open', function open() {
  ws.send('Computer Client connected. Hello!');

  var array = new Uint8Array(2);
  for (var i = 0; i < array.length; ++i) {
    array[i] = 0x10*i;
  }

  function sendNumber() {
            // var number = Math.round(Math.random() * 0xFFFFFF);
            // ws.send(number.toString());
            // setTimeout(sendNumber, 1000);
            ws.send(array, {binary:true, mask:true});
            setTimeout(sendNumber, 1000);
    }
    sendNumber();
});

ws.on('message', function(data, flags) {
	
  // flags.binary will be set if a binary data is received.
  // flags.masked will be set if the data was masked.
});