const mangoose = require("mongoose");


const jobSchema ={
    title:{
        type:String
    },
    description:{
        type:String
    },
    
    company:{
        type:String
    },
    location:{
        type:String
    },
    salary:{
        type:Number
    }
};
const jobmodel =mangoose.model("jobs",jobSchema);

module.exports = jobmodel;