import { Learn } from '../models/learn.js'

// function index(req, res) {
//   Profile.find({})
//   .then(profiles => res.json(profiles))
//   .catch(err => {
//     console.log(err)
//     res.status(500).json(err)
//   })
// }

function create(req, res) {
  // req.body.owner = req.user.profile
  Learn.create(req.body)
  
    // .catch(err => {
    //   console.log(err)
    //   res.status(500).json(err)
    // })
  }

export { index, create }
