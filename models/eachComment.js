var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var commentSchema = new Schema({

  userComment: String

});

var eachComment = mongoose.model("eachComment", commentSchema);

module.exports = eachComment;