const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentsSchema = new Schema({

  comments: [{
    type: Schema.Types.ObjectId,
    ref: "eachComment",
    trim: true,

  }],
  
  userComment: {
    type: String,

  }
  
});

var comments = mongoose.model("comments", commentsSchema);

module.exports = comments;

