const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cron = require('node-cron');
const dbConnection = require('./utils/db');
dotenv.config();
//SERVER

const PORT=process.env.PORT;

//SCHEDULE TASKS
const run=()=>{
    cron.schedule('* * * * * *', () => {
        //console.log('running a task every second');
      });

}
run();

app.listen(PORT,()=>{
    console.log(`BackgroundServices is running on ${PORT}`);
    dbConnection();
})