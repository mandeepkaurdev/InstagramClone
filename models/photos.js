const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const photosSchema = new Schema({

  photo_url: {
    type: String,
    unique: true,
    required: "You must upload a photo."
  },

  likes: [{
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the likes model
      ref: "likes"
  }],
  
  // likes: {
  //   type: Boolean,
  //   default: false
  // },

  comments: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the eachComment model
      ref: "eachComment"
    }
  ]
});

var photos = mongoose.model("photos", photosSchema);

module.exports = photos;