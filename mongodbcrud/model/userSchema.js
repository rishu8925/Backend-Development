import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
  name:{
    type:String,
    require:true,
    maxLength:[25, "name must contain 25 char only"]
  },
  email:{
    type:String,
    require:true,
    uniqure:true,
  },
  password:{
    type:String,
    require:true,
    minLength:[8,"password must contain 8 char only"]
  },
  role:{
    type:String,
    enum:["user","admin"],
    default:"user"
  }
})

userSchema.pre("save",async function(){
  if(!this.isModified("password")){
    return;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password,salt);

})






const user=mongoose.model("user",userSchema);
export default user;