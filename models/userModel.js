import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
  {
   name:{
    type:String,
    required:true,
    trim:true    //used when we want to remove the blank space 
   },
   email:{
     type:String,
     require:true,
     unique:true,
   },
   password:{
    type:String,
    required:true,
   },
   phone:{
    type: String,
    required:true,
   },
   address:{
    type:String,
    required:true,
   },
   role:{
    type:Number,
    default:0,
  },

},
{
timestamps:true      //register time will add
})

export default mongoose.model('users',userSchema);