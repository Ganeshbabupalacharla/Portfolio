const express=require('express');
const router=express.Router();

//form model
const Form=require('../../models/Form');

//@route Post api/Form
//@desc Post it in the form

router.post('/',(req,res)=>{
  const newForm=new Form({
    name:req.body.name,
    email:req.body.email,
    phone:req.body.name,
    subject:req.body.subject,
    message:req.body.message
  });

  newForm.save().then(form=>res.json(form));
})

module.exports=router;
