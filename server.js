const express=require('express');
const connectDB=require('./config/db');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();
connectDB();

//bodyparser middleware

app.use(bodyParser.json());
//use routes
app.use('/api/form',require('./Routes/api/form'));

//serve static assets in production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('/client/build'));
  app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'/client/build/index.html'));
  });
};

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`server started on port ${port}`));
