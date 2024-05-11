const mongoose = require('mongoose');
const NotesSchema = new Schema({
    title:{
        type: String,
        required: true

    },
    description:{
        type: String,
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: date,
        default: date.now
    }
  });
  
  module.exports = mongoose.model('notes', NotesSchema);