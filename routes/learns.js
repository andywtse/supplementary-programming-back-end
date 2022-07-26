import { Router } from 'express'
import * as learnCtrl from '../controllers/learns.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/

router.get('/', learnCtrl.index)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, learnCtrl.create)
router.delete('/:id', checkAuth, learnCtrl.delete)
router.put('/:id',checkAuth, learnCtrl.update)


export { router }
