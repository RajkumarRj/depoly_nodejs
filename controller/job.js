
const jobmodel = require("../models/job");

const createJob =  (req,res)=>{

    console.log(req.body);

    const newjob =new jobmodel(req.body);
    newjob.save();

    res.json({
        success:true,
        message:"Job created Successfully"
    });
};


// const getJob = (req,res)=>{
//     res.json({
//         success:false,
//         message:"get api routeees"
//     });
// };

const getJob = async (req, res) => {
    try {
        // Retrieve all jobs from MongoDB
        const jobs = await jobmodel.find({}).exec();
        res.json({
            success: true,  
            message: "Jobs retrieved successfully",
            jobs: jobs
        });
    } catch (err) {
        console.error("Error retrieving jobs from the database:", err);
        res.status(500).json({
            success: false,
            message: "Error retrieving jobs from the database"
        });
    }
};


const editJob = async (req,res)=>{
    
    await jobmodel.updateMany({title: req.body.title} , {$set : req.body});
    // const updatedOne = jobmodel.findByIdAndUpdate(req.body._id , )
    console.log(req.body)
    res.json({
        success:true,
        message:"Job edited successfully"
    })
}

const deleteJob = async (req,res)=>{
    console.log(req.body)

    await jobmodel.deleteMany({title : req.body.title} , {$set :req.body})
    res.json({
        success:true,
        message:"job deleted successfully"
    })
}
module.exports ={
    createJob,
    getJob,
    editJob,
    deleteJob
};


// mongodb+srv://rajkumar:<password>@raj.jncxihx.mongodb.net/