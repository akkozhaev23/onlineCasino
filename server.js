const randomizer = require('./randomizer')
const express = require('express')
const res = require('express/lib/response')
const fs = require('fs')

const app = new express()

app.use(express.json())

const responseObj = {
    money: 5000
}

app.post('/name', (req, res) => {
    responseObj.name = req.body.name
})

app.post('/user', (request, response) => {
    let date = new Date()

    let randomNumber = randomizer()

    if (responseObj.money === 0) {
        fs.appendFile('data.txt', `${responseObj.name} - ${date}`, err => {
            console.log(err)
        })

        responseObj.message = 'You are bankrupt!'
    } else {
        if(+request.body.userNumber === randomNumber) {
            responseObj.money += 1000
            responseObj.message = `${responseObj.name}, you win!`
        } else if (+request.body.userNumber !== randomNumber) {
            responseObj.money -= 1000
            responseObj.message = `${responseObj.name}, you lost!`
        }
    }

     
    response.send(JSON.stringify(responseObj))
})

app.use(express.static('static')).listen(9999, () => {
    console.log('Express server listens on port 9999')
})

