const Prospect=require("../models/Prospect");

//CREATE prospect
const createProspect=async (req,res)=>{
    try {
        const newProspect=Prospect(req.body);
        const prospect=await newProspect.save(); //ye line me error ho sakta hai
        res.status(201).json(prospect);
        
    } catch (error) {
        res.status(500).json(error);
        
    }
};
//GET ALL prospect

const getAllProspects= async(req,res)=>{  //error chance
    try {
        const prospects=await Prospect.find().sort({createdAt:-1});
        res.status(200).json(prospects);
    } catch (error) {
        res.status(500).json(error);
        }
}
//UPDATE DONOR
const updateProspect= async(req,res)=>{  
    try {
        const updateProspect=await Prospect.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        
        )
        res.status(201).json(updateProspect);
    } catch (error) {
        res.status(500).json(error);
        
    }
};
//GET ONE DONOR
const getOneProspect= async (req,res)=>{
    try {
        const prospect=await Prospect.findById(req,params.id);
        res.status(200).json(prospect);
        
    } catch (error) {
        res.status(500).json(error);
        
    }
};

//DELET DONOR
const deleteProspect=async (req,res)=>{
try {
    await Prospect.findByIdAndDelete(req.params.id);
    res.status(201).json("Donor deleted successfully")
} catch (error) {
    res.status(500).json(error);
}
};
//STATistics
/*const getDonorStats= async (req,res)=>{
try {
    const stats=await Donor.aggregate([
        {
            $group:{
                _id:"$bloodgroup",
                count:{$sum:1}
            }
        }
    ]);
    res.status(200).json(stats)
} catch (error) {
   res.status(500).json(error);
}
}*/
module.exports={deleteProspect,getOneProspect,getAllProspects,updateProspect,createProspect}