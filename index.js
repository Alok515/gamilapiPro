require('dotenv').config();
const express = require('express');

const app = express();
const route = require('./router/index');
const errorHandle = require('./middleware/errorHandle');

app.use(route);
app.use(errorHandle);
exports.GmailApi = app;