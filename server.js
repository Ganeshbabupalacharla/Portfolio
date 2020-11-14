const express=require('express');
const connectDB=require('./config/db');
const path=require('path');
const app=express();
connectDB();

//bodyparser middleware
const clientAppDirectory=path.join(__dirname, '/client', 'build');
app.use(express.json());
//use routes
app.use('/api/form',require('./Routes/api/form'));

//serve static assets in production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static(clientAppDirectory ));
  app.get('*',(req,res)=>{
    res.sendFile(path.join(clientAppDirectory,'index.html'));
  });
};

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`server started on port ${port}`));
