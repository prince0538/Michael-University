const Router = require('express').Router();
const studenttableController = require('../controller/studenttableController');
const { createstudentTable } = require('../controller/studenttableController');

Router.post('/studenttable', createstudentTable)

module.exports = Router