
const express = require('express')

const app = new express()

app.use(express.json())

app.post('/user', (request, response) => {
    console.log(request.body.userNumber)
})

app.use(express.static('static')).listen(9999, () => {
    console.log('Express server listens on port 9999')
})

