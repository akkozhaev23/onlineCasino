const randomizer = require('./randomizer')
const express = require('express')

const app = new express()

app.use(express.json())

app.post('/user', (request, response) => {
    let randomNumber = randomizer()
    if(+request.body.userNumber === randomNumber) {
        console.log(`User number: ${request.body.userNumber}, random number: ${randomNumber}
        you won`)
    } else {
        console.log(`User number: ${request.body.userNumber}, random number: ${randomNumber}
        you lost`)
    }
    console.log(request.body.userNumber)
})

app.use(express.static('static')).listen(9999, () => {
    console.log('Express server listens on port 9999')
})

