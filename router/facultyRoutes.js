const Router = require('express').Router();
const {createFaculty} = require('../controller/facultyController');

Router.post('/Faculty', createFaculty)

module.exports = Router