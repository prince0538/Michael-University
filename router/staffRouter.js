const express = require('express')

const router = express.Router()

const { addStaff } = require('../controller/staffController')

router.post('/staff/:facultyId', addStaff)


module.exports = router