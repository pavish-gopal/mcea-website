const express=require("express");
const {login, signUp,changePassword} =require('../controllers/user.js');
const router=express.Router();

router.get('/:UserName/:Password',login);
router.post('/',signUp);
router.put('/',changePassword);


module.exports = router;