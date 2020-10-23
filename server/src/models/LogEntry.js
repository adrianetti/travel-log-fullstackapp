const mongoose = require('mongoose');
const { Schema } = mongoose;

/* 
* Title
* Description
* Comments
* Rating - scale of 1-10
* Image
* Start Date
* Date Visited
* End Date
* Latitude
* Longitude
* createdAt
* updatedAt
*/

const requiredString = {
    type: String,
    required: true,    
};

const requiredNumber = {
    type: Number,
    required: true,
}

const logEntrySchema = new Schema({
  title: requiredString,
  description: String,
  comments: String,
  image: String,
  rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 0,
  },
  latitude: {
      ...requiredNumber,
      min: -90,
      max: 90,
  },
  longitud: {
      ...requiredNumber,
      min: -180,
      max: 180,
  },
  visitDate: {
      type: Date,
      required: true,
  }
}, {
    timestamps: true,

});

const LogEntry = mongoose.model('LogEntry', logEntrySchema)

module.exports = LogEntry;