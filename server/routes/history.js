import express from "express";
import { authentication } from "../middleware/authentication.js";
import {getHistory, postHistory,putHistory,deleteHistory} from '../controllers/history.js';
const router=express.Router();

router.get('/',getHistory);
router.post('/',authentication,postHistory);
router.put('/:id',authentication,putHistory);
router.delete('/:id',authentication,deleteHistory);
export default router;