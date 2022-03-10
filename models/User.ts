import mongoose from 'mongoose'
const Schema = mongoose.Schema

//Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  verified: {
    type: Boolean,
    required: true,
  },
  verificationToken: {
    type: String,
  },
  register_date: {
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('user', UserSchema)

export default User
