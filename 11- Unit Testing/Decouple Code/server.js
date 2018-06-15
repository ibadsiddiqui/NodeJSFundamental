var http = require('http'),
    app = require('./app'),
    flights = require('../data');


http.createServer(app).listen(app.get('port'), ()=>{
    console.log('Express Server listening on port: ' + app.get('port'))
})