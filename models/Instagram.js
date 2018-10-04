const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const InstagramSchema = new Schema({

  photos: {
    type: String,
    required: "You must upload a photo"
  },

  likes: {
    type: String,
  },

  comments: {
    type: String,
    trim: true,
  },

});

const Instagram = mongoose.model("Instagram", InstagramSchema);

module.exports = Instagram;
