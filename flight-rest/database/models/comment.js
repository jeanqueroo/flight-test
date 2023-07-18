const mongoose = require('mongoose');
//const autoIncrement = require("mongoose-auto-increment");
const { Schema } = mongoose;

const CommentSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  userId: {
    type: Number,
    required: true
  },
  flightId: {
    type: Number,
    required: true
  },
  tags: {
    type: String,
    required: false
  },
});

module.exports = mongoose.model('Comment', CommentSchema);