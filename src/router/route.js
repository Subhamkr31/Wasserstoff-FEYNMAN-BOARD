

let express = require('express')
let router = express.Router()

let { createuser, updateTopic, getUser } = require('../controller/userController')


// Route Api //
router.post('/createuser', createuser)
router.get('/name/:name', getUser)
router.put('/user/:userId', updateTopic)

module.exports = router