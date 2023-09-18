import express from "express";
import { authentication } from "../middleware/authentication.js";
import {getOfficeBearers, postOfficeBearers,putOfficeBearers,deleteOfficeBearers} from '../controllers/about.js';
const router=express.Router();
router.get('/',getOfficeBearers);
router.post('/',authentication,postOfficeBearers);
router.put('/:id',authentication,putOfficeBearers);
router.delete('/:id',authentication,deleteOfficeBearers);
export default router;