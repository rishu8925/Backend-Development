
// import user from "../model/userSchema";


// export const signup = async(req,res)=>{
//     try{

//         const{name,email,password}=req.body;
//         const newUser = await user.create({
//             name,
//             email,
//             password,
//         });

//         res.status(200).json({
//             message:"usr is created",
//             newUser,
//         })
//     } catch(error){
//         res.status(500).json({
//             message:"internal server error",
            
//         });
//     }

// };

import user from "../model/userSchema.js";

export const signup = async (req, res) => {
  try {
    const {name,email,password} = req.body;

    const newUser = await user.create({
      name,
      email,
      password,
    });

    res.status(200).json({
      message: "user is created",
      newUser,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "internal server error",
      error:error.message
    });
  }
};