const Router = require('express').Router();
const {addDep} = require('../controller/departmentController');

Router.post('/departments/:facultyId', addDep)

module.exports = Router