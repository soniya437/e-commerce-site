const express = require('express')
const app = express()
const mongoose = require('mongoose')
const route = require('./route/route')
const multer = require('multer')


app.use(express.json())
app.use(multer().any())

mongoose.connect('mongodb+srv://soni-45:Soniya123@mongo2.ncvkeai.mongodb.net/e-commerce', {useNewUrlParser: true}, mongoose.set('strictQuery', false))
.then(function(){console.log('mongoDB is connected')})
.catch(function(error){console.log(error)})

app.use('/', route)

app.listen((process.env.PORT || 3000), function(){
    console.log('Express app running on port '+ (process.env.PORT || 3000))
})
