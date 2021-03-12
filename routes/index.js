const express = require('express');

const downloadState = require('./fileListManager/downloadState');
const listState = require('./fileListManager/list');
const scan = require('./fileListManager/scan');

const Router = express.Router();

Router.get('/list', listState);
Router.get('/scan', scan);
Router.get('/download-state', downloadState);

module.exports = Router;
