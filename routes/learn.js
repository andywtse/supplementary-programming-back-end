import { Router } from 'express'
import * as learnCtrl from '../controllers/learn.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/', checkAuth, profilesCtrl.create)


export { router }
