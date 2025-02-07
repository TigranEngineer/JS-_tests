import express from 'express';
import userController from '../controllers/userController.js';
import userMiddleware from '../middlewares/userMiddleware.js';

const router = express.Router();

router.get('/', userController.getUsers)
router.post('/',
    userMiddleware.checkForStatus,
    userController.createUser);
router.put('/:id', 
    userMiddleware.validateUserPresence,
    userController.updateUser);
router.patch('/:id', 
    userMiddleware.validateUserPresence,
    userController.updateUser);
router.delete('/:id', 
    userMiddleware.validateUserPresence,
    userController.deleteUser);

export default router;