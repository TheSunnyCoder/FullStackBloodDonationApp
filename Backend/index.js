const app=require("./app");
const dotenv= require('dotenv');
//const mongoose=require('mongoose');
const dbConnection=require('./utils/db');
dotenv.config();
//server
const PORT=process.env.PORT;


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
    dbConnection();
});