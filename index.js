const express = require("express");

const mongo = require("mongoose");
const dotenv = require("dotenv");


const jobroutes = require("./routes/job")

dotenv.config();
const app = express();
// Eabzpa5A3S409AYE

mongo.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@raj.jncxihx.mongodb.net/`)
     .then(()=>{
        console.log("Database connected successfully");
     })
     .catch((err)=>{
        console.log("error",err);
     })   
 


app.use(express.json())
app.use("/api/v1/job",jobroutes)


// app.post();

// app.get();

app.listen(10000 , ()=>{
    console.log("Server running successfully");
})




/*


*/