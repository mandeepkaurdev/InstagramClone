const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likesSchema = new Schema({

  likes: Boolean
  
});

var likes = mongoose.model("likes", likesSchema);

module.exports = likes;