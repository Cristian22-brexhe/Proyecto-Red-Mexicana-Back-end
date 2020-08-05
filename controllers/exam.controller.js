'user strict'
const moment = require('moment');
const responseResult = require('../utils/response.util');
const httpStatusCodes = require('http-status-codes');
const examRepository = require('../repositories/exam.repository')

const controller = {
    /*
        questions: [{
            question:  ''
            answers:[{
                value:  'sdsfdfs'
                correct: true
            }]
        }]

        correct_answers: {type: Number, required: [false, 'The correct_answers is required.']},
        exam_state: {type: Boolean, required: [false, 'The exam_state is required.']},
     */
    async questionSave(req, res, next) {
        try {
            const params = req.params;
            const data = req.body;
            data.update_at = moment().toDate();

            const query = {_id: params.id, active: true};

            const active = await examRepository.findOne(query);
            if (!active)
                return responseResult.error(res, httpStatusCodes.BAD_REQUEST, 'Examen no existe!');

            const exam = await examRepository.update(params.id, data);

            return responseResult.general(res, httpStatusCodes.OK, {
                message: 'Se agregaron las preguntas correctamente!',
                exam
            });
        } catch (e) {
            return responseResult.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR,
                'No podemos procesar tu solicitud en este momento.', e);
        }

    },
    // name - description - type
    async save(req, res, next) {
        try {
            let body = req.body;

            const query = {name: body.name, active: true};

            const exists = await examRepository.findOne(query);
            if (exists) {
                return responseResult.error(res, httpStatusCodes.BAD_REQUEST, 'Examen existe!');
            }

            const exam = await examRepository.save(body);
            if (!exam)
                return responseResult.error(res, httpStatusCodes.BAD_REQUEST,
                    'Solicitud incorrecta, revice los datos enviados.');

            return responseResult.general(res, httpStatusCodes.CREATED, {message: 'Examen creado!', exam});
        } catch (e) {
            return responseResult.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR,
                'No podemos procesar tu solicitud en este momento.', e);
        }

    },
    async find(req, res, next) {
        try {
            const query = {active: true};

            const exams = await examRepository.find(query);
            return responseResult.general(res, httpStatusCodes.OK, exams);
        } catch (e) {
            return responseResult.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR,
                'No podemos procesar tu solicitud en este momento.', e);
        }
    },
    async findById(req, res, next) {
        try {
            const params = req.params;
            const query = {_id: params.id, active: true};

            const exams = await examRepository.findOne(query);
            return responseResult.general(res, httpStatusCodes.OK, exams);
        } catch (e) {
            return responseResult.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR,
                'No podemos procesar tu solicitud en este momento.', e);
        }
    },
    async update(req, res, next) {
        try {
            const params = req.params;
            const data = req.body;
            data.update_at = moment().toDate();

            const query = {_id: params.id, active: true};

            const exist = await examRepository.findOne(query);
            if (!exist)
                return responseResult.error(res, httpStatusCodes.BAD_REQUEST, 'Examen no existe!');

            const exam = await examRepository.update(params.id, data);

            return responseResult.general(res, httpStatusCodes.OK, exam);
        } catch (e) {
            return responseResult.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR,
                'No podemos procesar tu solicitud en este momento.', e);
        }
    },
    async remove(req, res, next) {
        try {
            const query = req.params;

            const data = {active: false, update_at: moment().toDate()};

            await examRepository.update(query.id, data);

            return responseResult.general(res, httpStatusCodes.OK, {message: 'Elemento eliminado'});
        } catch (e) {
            return responseResult.error(res, httpStatusCodes.INTERNAL_SERVER_ERROR,
                'No podemos procesar tu solicitud en este momento.', e);
        }
    },
};


module.exports = controller;
