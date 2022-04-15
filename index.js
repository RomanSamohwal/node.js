const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const parseJson = require('./framework/parseJson')
const parseUrl = require('./framework/parseUrl')
const mongoose = require('mongoose');
const app = new Application()
const config = require('./config')
app.addRouter(userRouter)

const PORT = process.env.PORT || 5000

app.use(parseJson)
app.use(parseUrl('http://localhost:5000'))

// app.listen(PORT, () => {
//     console.log(`Server started on Port ${PORT}`)
// })

const start = async () => {
    try {
        await mongoose.connect(config.dbUrl)
        mongoose.connection.on('connected', () => {
            console.log('connected to mongo database')
        })
        app.listen(PORT, () => console.log(`Server started on Port ${PORT}`))
    } catch (e) {
        mongoose.connection.on('error', (err) => {
            console.log('Error at mongoDB ' + err)
        })
        console.log(e)
    }
}

start()
