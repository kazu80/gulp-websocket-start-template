var port = 3000;
var io   = require('socket.io').listen(port);

io.sockets.on('connection', function (socket) {
    
    socket.on('start', function () {
        var i = 1;
        setInterval(function () {
            socket.emit('message', i);
            i++;
        }, 1000);
    });

    socket.on('disconnect', function () {
    });
});

