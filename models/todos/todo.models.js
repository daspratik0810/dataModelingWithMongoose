import mongoose from "mongoose"

//data for modeling
const todoSchema = new mongoose.Schema({},{timestamp : true})

export const ToDo = mongoose.model("ToDo",todoSchema)