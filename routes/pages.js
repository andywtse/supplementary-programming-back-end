import { Router } from 'express'
import * as pageController from '../controllers/page.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', pageController.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, pageController.index)
router.post('/', checkAuth, pageController.createPage)
router.post('/:id/section', checkAuth, pageController.createSection)
router.post('/section/:id/card', checkAuth, pageController.createCard)

router.delete('/:id', checkAuth, pageController.deletePage)
router.delete('/section/:id', checkAuth, pageController.deleteSection)
router.delete('/sectionscard/:id', checkAuth, pageController.deleteCard)

router.put('/:id', checkAuth, pageController.updatePage)
router.put('/section/:id', checkAuth, pageController.updateSection)
router.put('/section/card/:id', checkAuth, pageController.updateCard)


export { router }
