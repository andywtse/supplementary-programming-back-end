import mongoose from 'mongoose'

const Schema = mongoose.Schema

const pagesSchema = new Schema({
  title: String,
  description: String,
  sections: [{type: mongoose.Schema.Types.ObjectId, ref: "Sections"}] 
}, {
  timestamps: true
})

const Pages = mongoose.model('Pages', pagesSchema)

export { Pages }