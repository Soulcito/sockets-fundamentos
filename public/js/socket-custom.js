var socket = io();

// on Para escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// emit Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Felipe',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Escuchar información

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})