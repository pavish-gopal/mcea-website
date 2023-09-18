import express from "express";
import { authentication } from "../middleware/authentication.js";
import {getEvents, postEvents,putEvents,deleteEvents} from '../controllers/events.js';
const router=express.Router();

router.get('/',getEvents);
router.post('/',authentication,postEvents);
router.put('/:id',authentication,putEvents);
router.delete('/:id',authentication,deleteEvents);

export default router;