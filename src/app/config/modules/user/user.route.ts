import express from 'express'
import { UserControllers } from './user.controler'

const router = express.Router()

router.post('/users', UserControllers.createUser);
router.get('/users',UserControllers.getAllUses)
router.get('/users/:userId', UserControllers.getSingleUser)
router.put('/users/:userId',UserControllers.updateUser )
router.delete('/users/:userId',UserControllers.deleteUser )

export const UserRoutes = router;