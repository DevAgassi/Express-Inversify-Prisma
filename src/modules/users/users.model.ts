import mongoose from 'mongoose'

export const UsersModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
})

export type Users = typeof UsersModel