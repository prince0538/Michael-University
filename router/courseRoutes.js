const Router = require('express').Router();
const {createCourse} = require('../controller/courseController');

Router.post('/course', createCourse)

module.exports = Router