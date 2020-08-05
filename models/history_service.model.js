'user required'
const mongoose = require('mongoose');
const HystoryServiceSchema = require('./schemas/history_service.schema')

const HystoryService = mongoose.model('HystoryService', HystoryServiceSchema);

module.exports = HystoryService;
