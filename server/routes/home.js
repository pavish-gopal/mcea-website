import express from "express";
import {getHome, postHome,putHome,deleteHome} from '../controllers/home.js';
import { authentication } from "../middleware/authentication.js";
const router=express.Router();

router.get('/',getHome);
router.post('/',authentication,postHome);
router.put('/',authentication,putHome);
router.delete('/',authentication,deleteHome);

export default router;