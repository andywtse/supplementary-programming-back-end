import { Pages } from '../models/page.js'
import { Sections } from '../models/section.js'
import { Cards } from '../models/card.js'

function index(req, res) {
  Pages.find({})
    .populate('sections')
    .populate({
      path: 'sections',
      populate: {
        path: 'cards',
        model: 'Cards'
      }
    })
    .then(pages => {
      res.json(pages)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function getSections(req, res) {
  Pages.findById(req.params.id)
    .populate('sections')
    .then(page => {
      res.json(page.sections)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function getCards(req, res) {
  Sections.findById(req.params.id)
    .populate('cards')
    .then(section => {
      res.json(section.cards)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function createPage(req, res) {
  Pages.create(req.body)
    .then(page => {
      res.json(page)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function createSection(req, res) {
  Pages.findById(req.params.id)
    .then(page => {
      Sections.create(req.body)
        .then(section => {
          page.sections.push(section)
          page.save()
            .then(() => {
              res.json(section)
            })

        })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function createCard(req, res) {
  Sections.findById(req.params.id)
    .then(section => {
      Cards.create(req.body)
        .then(card => {
          section.cards.push(card)
          section.save()
            .then(() => {
              res.json(section)
            })

        })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function deletePage(req, res) {
  Pages.findByIdAndDelete(req.params.id)
    .then(deletedPage => {
      res.json(deletedPage)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function deleteSection(req, res) {
  Sections.findByIdAndDelete(req.params.id)
    .then(deletedSection => {
      res.json(deletedSection)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function deleteCard(req, res) {
  Cards.findByIdAndDelete(req.params.id)
    .then(deletedCard => {
      res.json(deletedCard)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function updatePage(req, res) {
  Pages.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedPage => {
      res.json(updatedPage)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function updateSection(req, res) {
  Sections.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedSection => {
      res.json(updatedSection)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

function updateCard(req, res) {
  Cards.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedCard => {
      res.json(updatedCard)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ err: err.errmsg })
    })
}

export {
  index,
  getSections,
  getCards,
  createPage,
  createSection,
  createCard,
  deletePage,
  deleteSection,
  deleteCard,
  updatePage,
  updateSection,
  updateCard
}