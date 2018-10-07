const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likesSchema = new Schema({

  likes: {
    type: Number,
    default: 0,
  }
});

var likes = mongoose.model("likes", likesSchema);

module.exports = likes;