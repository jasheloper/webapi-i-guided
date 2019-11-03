//allows you to create an http server
const express = require('express');

//save server in a variable called server
const server = express();

//will start our server & put in in listen mode where it's waiting for traffic to come in over the network.
//we will tell it to listen on port 4000 w/callback that is executed once sever begins listening
server.listen(4000, () => {
   console.log('=== server listening on port 4000 ===')
});


// console.log('hello Jashele');