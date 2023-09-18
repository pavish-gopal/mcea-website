import express from "express";
import { authentication } from "../middleware/authentication.js";
import {getContacts, postContacts,putContacts,deleteContacts} from '../controllers/contacts.js';
const router=express.Router();

router.get('/',getContacts);
router.post('/',authentication,postContacts);
router.put('/',authentication,putContacts);
router.delete('/',authentication,deleteContacts);

export default router;