const asyncHandler = require("express-async-handler");

const getAllGoals =asyncHandler(async(req,res)=>{
    res.status(200).json({message:"get all data "})
});

const createGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400);
        throw new Error("Please add a text field")
    }
    res.status(201).json({message:"create new text ",text:req.body.text})
});

const updateGoal = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`update goal ${req.params.id}` })
});

const deleteGoal = asyncHandler(async(req,res)=>{
    res.status(200).json({message:`delete goal ${req.params.id}`})
});

module.exports = {
    getAllGoals,
    createGoal,
    updateGoal,
    deleteGoal
}