const express=require("express");
const { authentication } =require("../middleware/authentication.js");
const {getContacts, postContacts,putContacts,deleteContacts} =require('../controllers/contacts.js');
const router=express.Router();

router.get('/',getContacts);
router.post('/',authentication,postContacts);
router.put('/',authentication,putContacts);
router.delete('/',authentication,deleteContacts);

module.exports = router;