   // Create web server
   var express = require('express');
   var app = express();
   var fs = require('fs');

   // Create a server
   var server = require('http').createServer(app);

   // Create a WebSocket server
   var io = require('socket.io').listen(server);

   // Listen for