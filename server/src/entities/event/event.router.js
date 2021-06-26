const { Router } = require('express');
const eventControllers = require('./event.controllers');

const events = Router();

events.get('/', eventControllers.getMany);
events.put('/:id', eventControllers.updateOne);
events.delete('/:id', eventControllers.removeOne);

events.get('/:member', eventControllers.getHostMemberEvents);
events.post('/:member', eventControllers.createOneHostMemberEvent);

events.post('/:id/:member', eventControllers.createOneGuestMember);
events.delete('/:id/:member', eventControllers.removeOneGuestMember);

module.exports = events;