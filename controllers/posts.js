import { Profile } from '../models/profile.js'
import { Post } from '../models/post.js'

function index(req, res) {
  Post.find({})
  .populate('author')
  .then(posts => {
    res.json(posts)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function create(req, res) {
  req.body.author = req.user.profile
  Post.create(req.body)
  .then(post => {
    Post.findById(post._id)
    .populate('author')
    .then(populatedPost => {
      res.json(populatedPost)
      })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function deletePost(req, res) {
  Post.findById(req.params.id)
  .then(post => {
    if (post.author._id.equals(req.user.profile)){
      Post.findByIdAndDelete(post._id)
      .then(deletedPost => {
        res.json(deletedPost)
      })
    } else { // This is not doing anything. Check auth template to display on front end.
      res.status(401).json({err: 'Not authorized'})
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function update(req, res) {
  Post.findById(req.params.id)
  .then(post => {
    if (post.author._id.equals(req.user.profile)){
      Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .populate('author')
      .then(updatedPost => {
        res.json(updatedPost)
      })
    }
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

function createReply(req, res) {
  Post.findById(req.params.id)
  .then(post => {
    post.replies.push(req.body)
    post.save()
    .then(() => {
      res.json(post)
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({err: err.errmsg})
  })
}

export {
  index,
  create,
  deletePost as delete,
  update,
  createReply
}