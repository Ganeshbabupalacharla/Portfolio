const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const FormSchema=new Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  phone:{
    type:String,
  },
  subject:{
    type:String
  },
  message:{
    type:String
  },
  date:{
    type:Date,
    default:Date.now
  }
});

module.exports=mongoose.model('form',FormSchema);