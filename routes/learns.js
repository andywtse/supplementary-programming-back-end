import { Router } from 'express'
import * as learnCtrl from '../controllers/learns.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, learnCtrl.index)
router.post('/', checkAuth, learnCtrl.create)
router.delete('/:id', checkAuth, learnCtrl.delete)


export { router }
