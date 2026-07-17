import mongoose from "mongoose"

const workingInfoSchema = new mongoose.Schema({
    workingHospital:{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Hospital",
        required : true
    },
    workingHours:{
        type : Number,
        required : true
    }
})

const doctorSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true
        },
        salary : {
            type : Number,
            required : true
        },
        qualifications : {
            type : String,
            required : true
        },
        experienceInYears : {
            type : Number,
            required : true
        },
        workingInfo : {
            type : [workingInfoSchema ] 
        },
    },
    {timestamps:true}
)

export const Doctor = mongoose.model("Doctor",doctorSchema)