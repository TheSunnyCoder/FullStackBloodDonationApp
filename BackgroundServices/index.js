const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cron = require('node-cron');
const dbConnection = require('./utils/db');
const { sendDetailsProspectEmail } = require('./EmailServices/sendDetailsProspect');
const { sendEligibilityEmail } = require('./EmailServices/sendEligibilityEmail');
const { sendBloodDonationReminder } = require('./EmailServices/sendBloodDonationReminder');
const { sendDonorDetailsEmail } = require('./EmailServices/sendDonorDetailsEmail');
dotenv.config();
//SERVER

const PORT=process.env.PORT;

//SCHEDULE TASKS
const run=()=>{
    cron.schedule('* * * * * *', () => {
        sendDetailsProspectEmail();
        sendEligibilityEmail();
       sendBloodDonationReminder();
       sendDonorDetailsEmail();
    });

}
run();

app.listen(PORT,()=>{
    console.log(`BackgroundServices is running on ${PORT}`);
    dbConnection();
})