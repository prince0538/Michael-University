const Router = require('express').Router();
const {addDep,findDep} = require('../controller/departmentController');

Router.post('/departments/:facultyId', addDep)
Router.get('/department',findDep )

module.exports = Router