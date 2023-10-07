import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    task: {
        type : String,
        required : true
    },
    status: {
        type: String,
        default: "Not started",
        enum: ['Not started', 'In progress', 'In review', 'Done / Approved', 'Need revision/ Rejected']
    },
    isDeleted: {
        type: Boolean
    }
},{
    timestamps: {
        currentTime: () => new Date().setUTCHours(0, 0, 0, 0)
    },
    versionKey: false
})

export const taskModel = mongoose.model("tasks", taskSchema);