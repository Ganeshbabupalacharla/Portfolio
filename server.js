const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const path=require('path');

const form=require('./Routes/api/form');
const app=express();

//bodyparser middleware

app.use(bodyParser.json());

//DB config
const db=require('./config/keys').mongoURI;

//connect mongodb
mongoose.connect(db)
  .then(()=> console.log('mongodb connected'))
  .catch(err=>console.log(err));

//use routes
app.use('/api/form',form);

//serve static assets in production
if(process.env.NODE_ENV === 'production'){
  //set static folder
  app.use(express.static('client/build'));
  app.get('*',(req,res)=>res.sendFile(path.resolve(__dirname,'client','build','index.html')));
}

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`server started on port ${port}`));