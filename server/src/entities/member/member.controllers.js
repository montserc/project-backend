const Member = require('./member.model');

const getMany = async (req, res) => {
  try {
    const docs = await Member.find().lean().exec();
    res.status(200).json({ results: docs });
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
};

const createOne = async (req, res) => {
  try {
    const doc = await Member.create(req.body);
    res.status(201).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const getOne = async (req, res) => {
  try {
    const doc = await Member.findOne({ _id: req.params.id }).lean().exec();
    if (!doc) {
      return res
        .status(404)
        .json({ error: `Member with id ${req.params.id} not found` });
    }
    res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const updateOne = async (req, res) => {
  try {
    const doc = await Member.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .lean()
      .exec();
    if (!doc) {
      return res
        .status(404)
        .json({ error: `Member with id ${req.params.id} not found` });
    }
    res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const removeOne = async (req, res) => {
  try {
    const doc = await Member.findOneAndRemove({ _id: req.params.id }).lean().exec();
    if (!doc) {
      return res
        .status(404)
        .json({ error: `Member with id ${req.params.id} not found` });
    }
    res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

module.exports = {
  getMany,
  createOne,
  getOne,
  updateOne,
  removeOne,
};
