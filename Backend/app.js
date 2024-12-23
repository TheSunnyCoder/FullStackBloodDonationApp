const express=require('express');
const app=express();
const cors=require('cors');
const authRoute=require("./routes/auth")
module.exports=app;

//cors
app.use(cors());
//JSON

app.use(express.json());

//ROUTES
app.use("/api/v1/auth",authRoute); 