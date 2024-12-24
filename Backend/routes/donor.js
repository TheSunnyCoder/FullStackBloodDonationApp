const express=require('express');
const { createDonor, getAlldonors, updateDonor, getOneDonor, deleteDonor, getDonorStats } = require('../controllers/donor');
const { verifyTokenAndAuthorization } = require('../middleware/verifyToken');
const router=express.Router();
//ADD DONOR
router.post('/',verifyTokenAndAuthorization,createDonor);
//GET ALL DONOR
router.get('/',getAlldonors);
//UPDATE DONOR
router.put('/:id',updateDonor);

//GET ONE DONOR
router.get('/find/:id',getOneDonor);
//DELETE DONOR
router.delete( '/i:d',deleteDonor);

//DONOR STATS
router.get('/stats',getDonorStats);

module.exports=router;