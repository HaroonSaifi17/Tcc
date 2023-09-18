const express = require('express')
const cors = require('cors')
require('dotenv').config()

const mailRouter = require('./routes/mail')
const blogRouter = require('./routes/blog')

const app = express()
const port = process.env.PORT
app.use(cors({ origin: '*', optionsSuccessStatus: 200 }))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
require('./setup/mongoose')

app.use('/mail',mailRouter)
app.use('/blog',blogRouter)

app.listen(process.env.PORT || port, () => {
  console.log(`Server is listening at http://localhost:${port} `)
})
