const express=require('express');
const connectDB=require('./config/db');
const path=require('path');
const app=express();
connectDB();

//bodyparser middleware

app.use(express.json());

app.use(express.static(path.join(__dirname, '/client','build')));
//use routes
app.use('/api/form',require('./Routes/api/form'));

//serve static assets in production

  //set static folder
  app.get('*', (request, response) => {
    return response.sendFile(path.join(__dirname, '/client/build/index.html'));
});

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`server started on port ${port}`));
