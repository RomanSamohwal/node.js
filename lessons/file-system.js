const fs = require('fs')
const path = require('path')
//синхронный
//fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir1', 'dir2'), {recursive: true})
//асинхронный
// fs.mkdir(path.resolve(__dirname, 'dir',), (err) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log('Папка создана')
// })
//

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err
//     }
// }

// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'Roman Samohwal', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Файл записан')
//     fs.appendFile(path.resolve(__dirname, 'test.txt'), 'ДОБАВИЛИ В КОНЕЦ', (err) => {
//         if (err) {
//             throw err
//         }
//         console.log('Файл записан')
//     })
// })


// fs.appendFile(path.resolve(__dirname, 'test.txt'), 'ДОБАВИЛИ В КОНЕЦ', (err) => {
//     if (err) {
//         throw err
//     }
//     console.log('Файл записан')
// })

// //Запись файла
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    })
}
//Добавить значение в конец файла
// const appendFileAsync = async (path, data) => {
//     return new Promise((resolve, reject) => {
//         fs.appendFile(path, data, (err) => {
//             if (err) {
//                 return reject(err.message)
//             }
//             resolve()
//         })
//     })
// }
//
// //Чтение файла
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}

// //Удалние файла
// const removeFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.rm(path, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }
//
// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'Roman Samohwal')
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '123'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), 'dsdsdsd'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .then(() => removeFileAsync(path.resolve(__dirname, 'test.txt')))
//     .catch(err => console.log(err))

const text = process.env.TEXT || ''

writeFileAsync(path.resolve(__dirname, 'test.txt'), text)
    .then(() => readFileAsync((path.resolve(__dirname, 'test.txt'))))
     //Количество слов в файле
    .then(data => data.split('').length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `Количество слов ${count}`))