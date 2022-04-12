//Readable - чтение
//Writable - Запись
//Duplex - Для чтения и записи Readable + Writable
//Transform - Такой же как Duplex, но может изменить данные по мере чтения

//Считываем при помощи readFile
const fs = require('fs')
const path = require('path')
const http = require("http");
const stream = require("stream");
//
// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) {
//         throw err
//     }
//
//     console.log(data)
// })

//Считываем при помощи stream
//один chunk 64kb
// const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'),{encoding: "utf-8"})
//
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
//
// stream.on('end', () => {
//     console.log('Закончил читать')
// })
// stream.on('open', () => {
//     console.log('Начал читать')
// })
// stream.on('error', (e) => {
//     console.log(e)
// })

const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
for (let i = 0; i < 20; i++) {
    writableStream.write(i + '\n')
}

writableStream.end()
// writableStream.close()
// writableStream.destroy()

http.createServer((req, res) => {
    //req - readable stream
    //res - writable stream
    stream.pipe(res)
})