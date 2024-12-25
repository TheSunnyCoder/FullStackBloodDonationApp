const express=require('express');
const { createProspect, getAllProspects, updateProspect, deleteProspect, getOneProspect } = require('../controllers/prospect');
const { route } = require('./auth');
const router=express.Router();
//ADD PROSPECT
router.post('/',createProspect);

//GET ALL PROSPECT
router.get('/',getAllProspects);

//UPDATE PROSPECT
router.put('/:id',updateProspect);

//DELETE PROSPECT
router.delete('/:id',deleteProspect);

//GET ONE PROSPECT
router.post('/find/:id',getOneProspect);

module.exports=router;