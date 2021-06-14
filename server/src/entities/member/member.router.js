const { Router } = require('express');
const memberControllers =require('./member.controllers');

const members = Router();

members.get('/', memberControllers.getMany);
members.get('/:id', memberControllers.getOne);

members.post('/', memberControllers.createOne);

members.put('/:id', memberControllers.updateOne);

members.delete('/:id', memberControllers.removeOne);

module.exports = members;
