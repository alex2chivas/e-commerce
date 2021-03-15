import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfile,
  getUsers,
  resgisterUser,
  updateUserProfile,
  deleteUser,
  getuserById,
  updateUser
} from '../controllers/userController.js'
import {
  protect,
  admin,
  mainAdminProtect
} from '../middleware/authMiddleware.js'

router
  .route('/')
  .post(resgisterUser)
  .get(protect, admin, getUsers)
router.post('/login', authUser)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
router
  .route('/:id')
  .delete(protect, admin, mainAdminProtect, deleteUser)
  .get(protect, admin, getuserById)
  .put(protect, admin, mainAdminProtect, updateUser)
export default router
