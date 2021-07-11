const express = require('express');
const Router = express.Router();

const StudentController = require('../controllers/student.controller');
//#region Student Routes
Router.get('/Student/Get',StudentController.Get);
Router.post('/Student/Add',StudentController.Manage);
Router.delete('/Student/Delete',StudentController.Delete);
//#endregion


module.exports = Router;