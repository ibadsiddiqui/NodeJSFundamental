var http = require('http');
var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.end('Airline')
})

http.createServer(app).listen(3000);

