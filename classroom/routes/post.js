const express = require("express");
const router=express.Router();   
//posts
// index-users
router.get("/",(req,res)=>{
    res.send("GET for posts");
});
//POST-posts
router.get("/",(req,res)=>{
    res.send("GET for show posts");
});
//delete posts
router.get("/:id",(req,res)=>{
    res.send("GET for show posts");
});
//show -routes
router.get("/:id",(req,res)=>{
    res.send("GET for posts id");
});
module.exports = router;