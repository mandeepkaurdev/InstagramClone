const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const photosSchema = new Schema({

  photo_url: {
    type: String,
    unique: true,
    required: "You must upload a photo."
  },

  likes: [{
      type: Schema.Types.ObjectId,
      ref: "likes"
  }],

  comments: [{
      type: Schema.Types.ObjectId,
      ref: "eachComment"
  }]
  
});

var photos = mongoose.model("photos", photosSchema);

module.exports = photos;