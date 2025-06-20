import mongoose from "mongoose";

const shortUrlSchema = new mongoose.Schema({

full_url:{
    type: String,
    required: true
},
shortUrl: {
    type: String,
    required: true,
    unique: true,
    index : true
},
clicks: {
    type: Number,
    required: true,
    default: 0
},
/*user : {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
},*/
})

const shortUrl = mongoose.model("shortURL", shortUrlSchema)

export default shortUrl;