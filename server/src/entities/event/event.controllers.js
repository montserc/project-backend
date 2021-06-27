const Event = require("./event.model");
const Member = require("../member/member.model");

const getMany = async (req, res) => {
  try {
    const docs = await Event.find().populate("hostMember").lean().exec();
    res.status(200).json({ results: docs });
  } catch (e) {
    console.log(e);
    res.status(400).end;
  }
};

const updateOne = async (req, res) => {
  try {
    const doc = await Event.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .lean()
      .exec();
    if (!doc) {
      return res
        .status(404)
        .json({ error: `Event with id ${req.params.id} not found` });
    }
    res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const removeOne = async (req, res) => {
  try {
    const doc = await Event.findOneAndRemove({ _id: req.params.id })
      .lean()
      .exec();
    if (!doc) {
      return res
        .status(404)
        .json({ error: `Event with id ${req.params.id} not found` });
    }
    res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const getHostMemberEvents = async (req, res) => {
  try {
    const docs = await Event.find({ hostMember: req.params.member })
      .lean()
      .exec();
    res.status(200).json({ results: docs });
  } catch (e) {
    console.log(e);
    res.status(400).end;
  }
};

const createOneHostMemberEvent = async (req, res) => {
  try {
    const doc = await Event.create({
      hostMember: req.params.member,
      ...req.body,
    });
    res.status(201).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end;
  }
};

const createOneGuestMember = async (req, res) => {
  try {
    const member = await Member.exists({ _id: req.params.member });
    if (!member) {
      return res
        .status(404)
        .json({ error: `Member with id ${req.params.member} not found` });
    }
    const doc = await Event.findOneAndUpdate(
      { _id: req.params.id },
      { $addToSet: { guestsMembers: req.params.member } },
      { new: true }
    )
      .lean()
      .exec();
    if (!doc) {
      return res
        .status(404)
        .json({ error: `Event with id ${req.params.id} not found` });
    }
    res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

const removeOneGuestMember = async (req, res) => {
  try {
    const doc = await Event.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { guestsMembers: req.params.member } },
      { new: true }
    )
      .lean()
      .exec();
    if (!doc) {
      return res
        .status(404)
        .json({ error: `Event with id ${req.params.id} not found` });
    }
    res.status(200).json({ results: doc });
  } catch (e) {
    console.log(e);
    res.status(400).end();
  }
};

module.exports = {
  getMany,
  updateOne,
  removeOne,
  getHostMemberEvents,
  createOneHostMemberEvent,
  createOneGuestMember,
  removeOneGuestMember,
};
