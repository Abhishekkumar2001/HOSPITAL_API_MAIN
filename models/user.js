// Importing the mongoose
const mongoose = require('mongoose');

// Created the User Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  type:{
    type: String,
    required: true,
  },
  reports:[
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Reports',
    }
  ]
}, {
  timestamps: true
}
)

const User = mongoose.model('User', userSchema);

module.exports = User;