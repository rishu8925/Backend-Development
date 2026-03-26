import user from "../model/userSchema.js";


export const getAllUsers = async(req,res)=>{
    try{
        const user = await user.find({},{name:1,email:1,_id:0});
        res.status(200).json({
            success:true,
            users
        })
        

    }
    catch (error){
        res.status(500).json({
            success:false,
            message:"cant get users",
            error
        });
    }
};