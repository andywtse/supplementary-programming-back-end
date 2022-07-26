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
  console.log(req.params.id)
  Learn.findByIdAndDelete(req.params.id)
    .then(deletedLearns => {
      res.json(deletedLearns)
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
