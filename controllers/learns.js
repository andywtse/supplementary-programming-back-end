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


export {
  create,
  index,
}
