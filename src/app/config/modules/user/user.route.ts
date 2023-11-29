import express from 'express'
import { UserControllers } from './user.controler'

const router = express.Router()

router.post('/users', UserControllers.createUser);
router.get('/users',UserControllers.getAllUses)
router.get('/:userId', UserControllers.getSingleUser)

export const UserRoutes = router;