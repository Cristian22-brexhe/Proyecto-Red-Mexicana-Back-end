'use strict'
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./../handlers/errors.handler');
const adminService = require('./admin.service');
const app = express();

// Imports
const params = require('./../params'); 
const routeWeb = require('./../routes')
const routeApi = require('./../routes/api')

app.use(cors())

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// routes
app.use('/', routeWeb);
app.use('/api', routeApi);

app.use(adminService.path, adminService.router);

app.use(errorHandler.pathNotFound);
app.use(errorHandler.generalError);

const initialize = async (myApp) => {
    // app = myApp; 
    const promise = new Promise((resolve, reject) => {
        app.listen(params.port)
            .on('listening', () => {
                console.log(`Server is running on port ${params.port}`);
                resolve();
            })
            .on('error', (error) => {
                console.log('Error in server: ' + error);
                reject(error);
            });

        server.listen();
        Promise.resolve();
    });

    await promise;
};

module.exports = {initialize, app};
