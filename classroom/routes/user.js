const express=require("express");
const router=express.Router();
// index-users
router.get("/",(req,res)=>{
    res.send("GET for users");
});
//POST-users
router.get("/",(req,res)=>{
    res.send("post for show users ");
});
//delete users
router.get("/:id",(req,res)=>{
    res.send("delete for show users ");
});
//show -routes
router.get("/:id",(req,res)=>{
    res.send("show for users id ");
});
module.exports=router;
