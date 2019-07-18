 const express = require('express');
 const http = require('http');
 const dotEnv = require('dotenv');

 const app = express();
 const server = http.createServer(app);

 dotEnv.config();
 const PORT = process.env.PORT;

 server.listen(PORT, null, function() {
   console.log(`Listening on port: ${PORT}`);
 });