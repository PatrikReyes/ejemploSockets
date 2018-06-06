let socket = io();

// on escucha 
socket.on('connect', () => {
    console.log('conectado');
});

socket.on('disconnect', () => {
    console.log('cliente desconectado');
});

// emit envia info
socket.emit('enviarMensaje', {
    usuario: 'patrik',
    mensaje: 'hola mundo'
}, (resp) => {
    console.log('resp server', resp);
});

socket.on('enviarMensaje', (msg) => {
    console.log(msg)
});