const Member = require('./member.model');

const getMany = async (req, res) => {
  try {
    const docs = await Member.find().lean().exec();
    res.status(200).json({ results: docs })
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
}

const createOne = async (req, res) => {
  try {
    const doc = await Member.create(req.body);
    res.status(201).json({ results: doc })
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
}

module.exports = {
  getMany,
  createOne,
}