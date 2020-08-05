'use strict'
// Admin Bro
const AdminBro = require('admin-bro');
const buildAdminRouter = require('./../routes/admin/admin.router');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

//Import Models
const User = require('./../models/user.model');
const Exam = require('./../models/exam.model');
const HystoryService = require('./../models/history_service.model');


const options = {
    resources: [
          User, Exam, HystoryService
    ],
    branding: {
        companyName: 'Ibaceta INC.',
    },
    locale: {
        translations: {
            labels: {
                User: 'Usuarios',
                Exam: 'Examenes',
                HystoryService: 'Historial de servicios'
            }
        }
    },
};

const admin = new AdminBro(options);
const router = buildAdminRouter(admin);

const path = admin.options.rootPath;

module.exports = {path, router};

