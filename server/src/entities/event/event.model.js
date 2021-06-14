const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    hostMember: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "member",
      require: true,
    },
    name: { type: String, required: true, trim: true, maxlength: 80 },
    description: { type: String, required: true, maxlength: 10000 },
    status: {
      type: String,
      enum: ["cancelled", "upcoming", "past", "proposed", "draft"],
    },
    startTime: { type: Date },
    endTime: { type: Date },
    location: { type: String, trim: true },
    limit: { type: Number, min: 0 },
    complete: { type: Boolean },
    guestsMembers: [{ type: mongoose.SchemaTypes.ObjectId, ref: "member" }],
  },
  { timestamp: true }
);

eventSchema.index({ hostMember: 1 });

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
