import mongoose from 'mongoose'

const Schema = mongoose.Schema

const replySchema = new Schema({
  content: String
}, {
  timestamps: true
})

const postSchema = new Schema({
  title: String,
  content: String,
  replies: [replySchema],
  author: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
}, {
  timestamps: true
})

const Post = mongoose.model('Post', postSchema)

export { Post }