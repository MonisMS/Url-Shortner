import express from 'express';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv'
import connectDB from './config/db.config.js';
import urlSchema from './models/shortUrl.model.js';


dotenv.config()

const app= express();
const PORT = 3000;
connectDB()
//Body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post("/api/create",(req,res) => {
    const {url} = req.body
    const shortUrl = nanoid(7)
    const newUrl = new urlSchema ({
        full_url : url,
        shortUrl : shortUrl
    })
    newUrl.save()
    res.send(nanoid(7))
})

app.get("/:id",async (req,res) => {
const {id} = req.params;
const url = await urlSchema.findOne({shortUrl : id})
if (url){
    res.redirect(url.full_url)
}
else{
    res.status(404).send("Not found")
}
})

app.listen (PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})