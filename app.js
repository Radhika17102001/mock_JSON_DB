const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;


// set up the new engine
app.set('view engine','ejs');
app.set('views','./views');

//middleware to serve static files
app.use(express.static('public'));

app.listen(PORT,()=>{
    console.log(`connected on port: ${PORT}`);
});
