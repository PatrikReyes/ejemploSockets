const { io } = require('../server');


io.on('connection', (cliente) => {
    console.log('cliente conectado');
    cliente.emit('enviarMensaje', {
        usuario: 'administrador',
        mens: 'bienvenido'
    });

    cliente.on('disconnect', () => {
        console.log('cliente desconectado !');
    });

    // Escuchar cliente
    cliente.on('enviarMensaje', (data, callback) => {
        console.log(data);

        cliente.broadcast.emit('enviarMensaje', data);

        // if (msg.usuario) {
        //     callback({
        //         resp: 'Usuario recibido'
        //     });
        // } else {
        //     callback({
        //         resp: 'No se recibio user'
        //     });
        // }

    });
});