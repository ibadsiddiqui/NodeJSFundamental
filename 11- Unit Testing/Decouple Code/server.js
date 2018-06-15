var http = require('http');
var app = require('./app');

http.createServer(app).listen(app.get('port'), ()=>{
    console.log('Express Server listening on port: ' + app.get('port'))
})