const express = require('express');
const listMail = require('../../mailer/listMail');
const readMail = require('../../mailer/readMail');
const deleteMail = require('../../mailer/deleteMail'); 
const sendMail = require('../../mailer/sendMailData');

const routes = express.Router();

routes.get('/v1/list', listMail);
routes.get('/v1/read/:id', readMail);
routes.get('/v1/del/:id', deleteMail);
routes.get('/v1/send/:mail', sendMail);

module.exports = routes;