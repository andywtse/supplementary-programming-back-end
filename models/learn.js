import mongoose from 'mongoose'

const learnSchema = new mongoose.Schema({
  header: String,
  title: String, 
  description: String,
  url: [String],
},{
  timestamps: true,
})

const Learn = mongoose.model('Learn', learnSchema)

export { Learn }
