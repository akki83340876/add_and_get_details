// app.js
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const path = require('path');


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public" )));
app.use(cookieParser());
app.use(cors({
    credentials:true,
    origin:"*",
    methods:'GET,POST',
    allowedHeaders:'Content-Type,Authorization'
}));

const Routes = require('./src/routes/product_routes/product.routes');

app.use('/', Routes)

app.get("/",(req,res)=>{
    res.send("Hello , Server  is running on port : 7878")

})
// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);  
});
