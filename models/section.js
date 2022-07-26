import mongoose from 'mongoose'

const Schema = mongoose.Schema

const sectionsSchema = new Schema({
  title: String,
  cards: [{type: mongoose.Schema.Types.ObjectId, ref: "Cards"}] 
}, {
  timestamps: true
})

const Sections = mongoose.model('Sections', sectionsSchema)

export { Sections }