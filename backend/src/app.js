import express from 'express';
import {nanoid} from 'nanoid';
import dotenv from 'dotenv'
import connectDB from './config/db.config.js';
import urlSchema from './models/shortUrl.model.js';
import shot_url from './routes/short_url.route.js';
import { redirectFromShortUrl } from './controllers/short_url.controller.js';
import { errorHandler } from './utils/errorHandler.js';
import cors from 'cors'
dotenv.config()

const app= express();
const PORT = 3000;
connectDB()
app.use(cors())
//Body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api/create",shot_url)

app.get("/:id",redirectFromShortUrl)
app.use(errorHandler)

app.listen (PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})