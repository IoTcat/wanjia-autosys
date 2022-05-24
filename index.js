const wiot = require('wiot');

let node1 = new wiot.node.nodemcu('48c50');

let wire1 = new wiot.wire();
//let wire2 = new wiot.wire(); //Initizlize as 15

//when D3 is LOW/HIGH, set D4 to be LOW/HIGH
wiot.gpio(node1, wiot.INPUT, node1.D5, wire1);
wiot.gpio(node1, wiot.OUTPUT, node1.D6, wire1);



//wiot.buffer(node1, wire2, wire1, 3);



