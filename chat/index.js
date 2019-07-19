var fs = require('fs');
var https = require('https');
var express = require('express');
var app = express();

var server = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: 'francetv'
}, app);

var io = require('socket.io').listen(server);

app.use('/css',express.static(__dirname + '/css'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/assets',express.static(__dirname + '/assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(socket){
    socket.on('newMessage', function(message) {
        socket.broadcast.emit('newMessage', message);
    })
});

server.listen(8085,function(){
    console.log('Listening on '+server.address().port);
});
