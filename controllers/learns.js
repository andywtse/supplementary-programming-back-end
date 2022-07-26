import { Learn } from '../models/learn.js'

function index(req, res) {
  Learn.find({})
  .then(learn => {
    res.json(learn)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function create(req, res) {
  Learn.create(req.body)
  .then(learn => {
      res.json(learn)
      })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

function deleteLearns(req, res) {
  Learn.findById(req.params.id)
  .then(learn => {
    if (req.user.profile){
      Learn.findByIdAndDelete(learn._id)
      .then(deletedLearns => {
        res.json(deletedLearns)
      })
    } else { 
      res.status(401).json({err: 'Not authorized'})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  create,
  index,
  deleteLearns as delete
}
