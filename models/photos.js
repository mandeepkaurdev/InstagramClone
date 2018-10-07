const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const photosSchema = new Schema({

  photo_url: {
    type: String,
    unique: true,
    required: "You must upload a photo."
  }
});

var photos = mongoose.model("photos", photosSchema);

module.exports = photos;