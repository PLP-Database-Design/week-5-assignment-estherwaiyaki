//import our dependecies
const express = require("express");
const app = express()

const mysql2 = require('mysql2');

const dotenv = require('dotenv')

dotenv.config();




const db = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME

})
// TEST THE CONNECTION
db.connect((err) => {
    // if connection not succsfull
    if(err){
        return console.log('Error connecting to database:', err)
    }

    // connection not successfull
    console.log("Successfully connected to my Mysql:", db.threadId)
})

// to connect to ejs
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



//QUESTION ONE, RETRIEVE ALL PATIENTS
//app.get("/get-patients", (req, res) =>{
    
    // const getPatients = "SELECT patient_id, first_name, last_name, date_of_birth FROM patients"
   
    //db.query(getPatients, (err, data)=>{
        //if (err){
           // return res.status(400).send("Failed to get/fetch to the database", err)
       // }
       
       // res.status(200).render("data", {data})
    //})
//})

//QUESTION TWO
// app.get("/get-providers", (req, res) =>{
    
    //const getproviders = "SELECT first_name, last_name, provider_specialty FROM providers"
    
    //db.query(getPatients, (err, data)=>{
        //if (err){
            //return res.status(400).send("Failed to get/fetch to the database", err)
       // }
       
       // res.status(200).render("data", {data})
   // })
//})

//QUESTION THREE
//app.get("/get-first", (req, res) =>{
    // const firstname = "SELECT first_name FROM patients"
    //db.query(firstname, (err, data)=>{
        //if (err){
            //return res.status(400).send("Failed to get/fetch to the database", err)
        //}
        //res.status(200).render("data", {data})
   // })
//})

// Question FOUR
//app.get("/get-all-providers", (req, res) =>{
    //const allproviders = "SELECT first_name,last_name, provider_specialty FROM providers"
    //db.query(allproviders, (err, data)=>{
        //if (err){
            //return res.status(400).send("Failed to get/fetch to the database", err)
        //}
      // res.status(200).render("data", {data})
    //})
//})




// start and listen to the server
app.listen(3300, () =>{
    console.log(`server is running on port 3300...`)
})