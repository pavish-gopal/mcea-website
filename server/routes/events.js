const express =require("express");
const { authentication } =require("../middleware/authentication.js");
const {getEvents, postEvents,putEvents,deleteEvents} =require('../controllers/events.js');
const router=express.Router();

router.get('/',getEvents);
router.post('/',authentication,postEvents);
router.put('/:id',authentication,putEvents);
router.delete('/:id',authentication,deleteEvents);

module.exports = router;