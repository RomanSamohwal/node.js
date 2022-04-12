const path = require('path')

console.log('Склеить участки пути', path.join(__dirname, '..', 'second', 'third'))
console.log('Получить абсолютный путь', path.resolve(__dirname, '..', 'second', 'third'))
const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js')
console.log('Парсинг пути', path.parse(fullpath))
console.log('разделитель в OC', path.sep)
console.log('Проверка на абсолютный путь', path.isAbsolute('first/second'))
console.log('Название файла', path.basename(fullpath))
console.log('Расширение файла', path.extname(fullpath))

//--------------------------------------------------

const siteURL = 'http://localhost:8000/users?id=5123'

const url = new URL(siteURL)

console.log(url)