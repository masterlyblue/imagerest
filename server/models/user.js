const mongoose = require('mongoose');

const UserShema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    username: { type: String, require: true, unique: true },
    hashedPassword: { type: String, require: true, },
    sessions: [{
      createAt: { type: Date, require: true },
    }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('user', UserShema);