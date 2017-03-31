var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    //var regParen = /\(([^)]+)\)/;
    var user = {
        "ipaddress": req.headers['x-forwarded-for'] || 
        req.connection.remoteAddress || 
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress,
        "language": req.headers['accept-language'].split(',')[0],
        "software": req.headers['user-agent'].split(') ')[0].split(' (')[1]
    }
    res.send(JSON.stringify(user))
});
    
app.listen(process.env.PORT || 3000);