require('dotenv').config()
require('express')
const express = require('express')
const server = express()

server.use(express.json())

const PORT = process.env.PORT

server.get('/api/*', (req, res) => {
    res.json('Looks like its working')
})

server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})