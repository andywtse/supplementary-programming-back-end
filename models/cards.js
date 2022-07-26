import mongoose from 'mongoose'

const cardSchema = new mongoose.Schema({
  header: String,
  title: String, 
  description: String,
  url: [String],
},{
  timestamps: true,
})

const Cards = mongoose.model('Cards', cardsSchema)

export { Cards }