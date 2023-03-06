
let express = require('express')
const route  = require('./router/route')
const mongoose = require('mongoose')
let app = express()
let cors = require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://vivek:vivek@cluster0.vnga7l6.mongodb.net/Flaymen-board')
.then(() => console.log('mongodb connected successfully'))
.catch(err => console.log('mongodb not connected'));


app.use('/', route)

app.listen(3005 , () => {
    console.log('Server run on 3005');
})