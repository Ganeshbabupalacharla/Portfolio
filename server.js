const express=require('express');
const connectDB=require('./config/db');
const path=require('path');
const app=express();
connectDB();

//bodyparser middleware

app.use(express.json());

app.use(express.static(path.join(__dirname, './public','build')));
//use routes
app.use('/api/form',require('./Routes/api/form'));

//serve static assets in production

  //set static folder
app.get('/*', (request, response) => {
    return response.sendFile(path.join(__dirname, './public/build','index.html'));
});

const port=process.env.PORT || 5000;

app.listen(port,()=>console.log(`server started on port ${port}`));

// "server":"nodemon server.js",
//     "client":"npm start --prefix client",
//     "client-install":"npm install --prefix client",
//     "dev":"concurrently \"npm run server\" \"npm run client\"",
//     "heroku-postbuild": "cd client --only=dev && npm install && npm run build"