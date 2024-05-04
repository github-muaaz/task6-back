const { Server } = require('socket.io');
const io = new Server({
    cors: "https://itransition-task6-muaaz.netlify.app"
})
io.on('connection', function (socket) {

    socket.on('board', (data) => {
        socket.broadcast.emit('board', data);
    });
});

io.listen(8090);