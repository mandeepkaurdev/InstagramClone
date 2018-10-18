const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likesSchema = new Schema({

  likes: {
    type: Boolean,
    // default: false
  }
});

var likes = mongoose.model("likes", likesSchema);

module.exports = likes;