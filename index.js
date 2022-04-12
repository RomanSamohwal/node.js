const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const parseJson = require('./framework/parseJson')
const parseUrl = require('./framework/parseUrl')

const app = new Application()

app.addRouter(userRouter)

const PORT = process.env.PORT || 5000

app.use(parseJson)
app.use(parseUrl('http://localhost:5000'))

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`)
})
