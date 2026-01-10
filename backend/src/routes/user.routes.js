import { Router } from 'express';
const router = Router();
import {
  registerUser,
  loginUser,
  logoutUser,
  profileUser,
}from '../controller/user.controller.js';

import {authUser} from "../middleware/index.js";



router.post('/register', registerUser);
router.post('/login',loginUser);
router.get('/profile',authUser,profileUser);

router.post('/logout',authUser,logoutUser);



export default router;
