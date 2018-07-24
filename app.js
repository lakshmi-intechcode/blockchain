// This is the first java script file in blockchain project

const express = require('express')

const app = express()


app.get('/', (req,res) => res.send('Hello World'))

app.listen(3000,()=> console.log('Starting the app express server '))

