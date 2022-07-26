import { Router } from 'express'
import * as learnCtrl from '../controllers/learns.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, learnCtrl.create)
router.get('/', checkAuth, learnCtrl.index)


export { router }
