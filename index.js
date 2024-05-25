// 1 - Connect to a database , 2 - Create a schema 3 - Create a model , 4- Save into the database 5- Retrive information, 6 CRUD - CREATE, READ, UPDATE, DELETE
// Modularization - MVC Architechture
// Model - Anything related to your database
// Views - What is displayed to the user
// Controller - Functions/Logic
// Routes - 

// imports
const express = require("express");
const nodemailer = require("nodemailer")
const mongoose = require("mongoose");
const ejs = require("ejs")
require('dotenv').config()
const app = express();
let studentRouter =require("./routes/student.route.js")

app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))
app.use("/student",studentRouter)

// Uri - uniform resource identfier
// Connect to Database. async and await, .then() block.
mongoose.connect(process.env.MONGO_DB_URI).then(()=>{
  console.log("mongodb connected successfully")
}).catch((err)=>{
  console.log("Mongodb did not connect successfully")
  console.log(err)
})

let myhtml = "<h1>Hello World</h1>"
app.get("/sendmail",(req,res)=>{
    console.log("somebody tried to send a mail")
    let transporter = nodemailer.createTransport({
      service : 'gmail',
      auth : {
          user : process.env.AUTH_USER,
          pass : process.env.AUTH_PASS
      }
    })
    let mailoptions = {
      from : process.env.AUTH_USER,
      to : ['pelumioyeboade7@gmail.com','sqiacademy01@gmail.com','seyidami13@gmail.com',"olabodeprecious2023@gmail.com"],
      subject : 'Testing Nodemailer',
      html : myhtml,
    }

    transporter.sendMail(mailoptions)
    .then((info)=>{
      console.log(info)
      console.log("mail sent successfully")
      res.send("Mail Sent")
    })
    .catch((err)=>{
      console.log(err)
      console.log("mail not sent successfully")
      res.send("Mail Failed")
    })

    // .env (environment variables)
  

})

app.listen(process.env.PORT, (err) => {
  if (err) {
    console.log("server no gree start");
  } else {
    console.log("the server has started successfully");
    console.log(process.env.PORT)
  }
});
