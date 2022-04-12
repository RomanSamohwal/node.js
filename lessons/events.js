const Emitter = require('events')

const emitter = new Emitter()

emitter.on('message', (data, second, third) => {
    console.log('Вы прислали сообщение ' + data)
    console.log('Второй аргумент ' + second)
})

const message = process.env.MESSAGE || ''

if (message) {
    emitter.emit('message', message, 123)
} else {
    emitter.emit('message', 'Вы не указали сообщение')
}