require('./config/database/connection');

const express = require('express');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const app = express();

const swaggerOptions = {
    swaggerDefinition:{
        info:{
            title:'Library Task1 API',
            version:'1.0.0'
        }
    },
    apis:['index.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
//console.log(swaggerDocs);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));

//#region Routes

const StudentRoutes = require('./api/routes/student.route');
app.use(express.json());
app.use(StudentRoutes);

//#endregion

module.exports=app