import mongoose, { Schema } from "mongoose";

const meetingSchema= new Schema(
    {
        user_id:{type:String},
        mettingCode:{type:String,required:true},
        date:{type:Date, defult:Date.now,required:true}
    }
)

const Meeting = mongoose.model("Meeting", meetingSchema);
export {Meeting};