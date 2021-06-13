const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    name: {
      first: { type: String, required: true, trim: true },
      last: { type: String, required: true, trim: true },
    },
    birthday: { type: Date },
    email: { type: String, trim: true, lowercase: true },
    gender: { 
      type: String, 
      enum: ['female', 'male', 'other'] 
    },
    topics: [{ type: String }],
  },
  { timestamps: true }
);

const Member = mongoose.model('member', memberSchema);

module.exports = Member;