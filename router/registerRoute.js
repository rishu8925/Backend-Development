import express from "express";
const router=express.Router();


let validation =(req,res,next)=>{
    console.log("this is validation")
    next();
}
router.use(validation);

router.get("/login",(req,res)=>{
    res.send("this is login route");
});

router.get("/signup",(req,res)=>{
    res.send("this is signup route");
});

export default router;