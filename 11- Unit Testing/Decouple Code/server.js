var http = require('http'),
    flights = require('./data'),
    app = require('./app')(flights);


http.createServer(app).listen(app.get('port'), ()=>{
    console.log('Express Server listening on port: ' + app.get('port'))
})