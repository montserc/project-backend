const { Router } = require('express');
const eventControllers = require('./event.controllers');

const events = Router();

events.get('/', eventControllers.getMany);
events.get('/:member', eventControllers.memberGetMany);

events.post('/:member', eventControllers.memberCreateOne);


module.exports = events;