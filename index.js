require('dotenv').config()

const express = require('express')
const path = require('path')
const server = express()

//RENDER FRONTEND ON HEROKU
server.use(express.static(path.join(__dirname, 'frontend/build')))

server.use(express.json())

const PORT = process.env.PORT

server.get('/api/*', (req, res) => {
    res.json('Looks like its working')
})

server.use('*', (_, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})