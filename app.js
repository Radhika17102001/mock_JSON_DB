const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;


// set up the new engine
app.set('view engine','ejs');
app.set('views','./views');

//middleware
app.use((req, res, next)=>{
    const time = new Date();
    console.log(time, req.url, req.method);

    next();
});

app.get('/home',(req,res)=>{
   console.log('this is always triggered secondly');
});

app.listen(PORT,()=>{
    console.log(`connected on port: ${PORT}`);
});
