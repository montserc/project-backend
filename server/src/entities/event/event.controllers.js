const Event = require('./event.model');

const getMany = async (req, res) => {
  try { 
    const docs = await Event.find().populate('hostMember').lean().exec();    
    res.status(200).json({ results: docs });
  } catch (e) {
    console.log(e);
    res.status(400).end;
  }
};

const memberGetMany = async (req, res) => {
  try {
    const docs = await Event.find({ hostMember: req.params.member }).lean().exec();
    res.status(200).json({ results: docs });
  } catch (e) {
    console.log(e);
    res.status(400).end;
  }
};

const memberCreateOne = async (req, res) => {
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

module.exports = {
  memberGetMany,
  memberCreateOne,
  getMany,
};
