const express =require( "express");
const { authentication } =require( "../middleware/authentication.js");
const {getHistory, postHistory,putHistory,deleteHistory}=require( '../controllers/history.js');
const router=express.Router();

router.get('/',getHistory);
router.post('/',authentication,postHistory);
router.put('/:id',authentication,putHistory);
router.delete('/:id',authentication,deleteHistory);
module.exports = router;