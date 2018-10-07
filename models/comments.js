const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({

  comments: [{
    type: String,
    trim: true,
  }]

});

var comments = mongoose.model("comments", commentsSchema);

module.exports = comments;