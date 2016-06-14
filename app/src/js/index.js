/**
 * Created by kawakamikazuyoshi on 2016/05/27.
 */
var socket  = io.connect('localhost:3000');
var element = document.getElementById("second");

socket.on('connect', function (data) {
    socket.emit('start');
});

socket.on('message', function(data){
    element.innerHTML = data;
});



