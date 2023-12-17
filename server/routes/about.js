const express =require("express");
const { authentication } =require("../middleware/authentication.js");
const {getOfficeBearers, postOfficeBearers,putOfficeBearers,deleteOfficeBearers} =require('../controllers/about.js');
const router=express.Router();
router.get('/',getOfficeBearers);
router.post('/',authentication,postOfficeBearers);
router.put('/:id',authentication,putOfficeBearers);
router.delete('/:id',authentication,deleteOfficeBearers);
module.exports = router;