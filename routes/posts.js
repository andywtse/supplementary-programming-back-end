import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as postController from '../controllers/posts.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', postController.index)
router.get('/:id/replies', postController.getReplies)


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, postController.create)
router.post('/:id/replies', checkAuth, postController.createReply)
router.delete('/:id', checkAuth, postController.delete)
router.put('/:id',checkAuth, postController.update)



export { router }
