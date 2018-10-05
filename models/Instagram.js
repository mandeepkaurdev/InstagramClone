const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InstagramSchema = new Schema({

  photo_url: {
    type: String,
    unique: true,
    required: "You must upload a photo."
  },

  likes: {
    type: Number,
    default: 0,
  },

  comments: [{
    type: String,
    trim: true,
  }]
});

const Instagram = mongoose.model("Instagram", InstagramSchema);

module.exports = Instagram;
