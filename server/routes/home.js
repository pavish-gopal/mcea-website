const express=require("express");
const {getHome, postHome,putHome,deleteHome} =require( '../controllers/home.js');
const { authentication } =require("../middleware/authentication.js");
const router=express.Router();

router.get('/',getHome);
router.post('/',authentication,postHome);
router.put('/',authentication,putHome);
router.delete('/',authentication,deleteHome);

module.exports = router;