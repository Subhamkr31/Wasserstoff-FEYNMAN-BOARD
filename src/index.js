
let express = require('express')
const route  = require('./router/route')
const mongoose = require('mongoose')
let app = express()
let cors = require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://Maheshpppp:GfIbvAzpfnLY6IEj@cluster0.lhhqee7.mongodb.net/wassershoffco?retryWrites=true&w=majority')
.then(() => console.log('mongodb connected successfully '))
.catch(err => console.log('mongodb not connected'));


app.use('/', route)

app.listen(3005 , () => {
    console.log('Server run on 3005');
})