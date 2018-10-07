var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new commentSchema object
// This is similar to a Sequelize model
var commentSchema = new Schema({
  // `title` must be of type String
  title: String,
  // `body` must be of type String
  body: String
});

// This creates our model from the above schema, using mongoose's model method
var eachComment = mongoose.model("eachComment", commentSchema);

// Export the eachComment model
module.exports = eachComment;