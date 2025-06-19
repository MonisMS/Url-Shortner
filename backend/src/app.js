import express from 'express';
import {nanoid} from 'nanoid';

const app= express();
const PORT = 3000;

//Body parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get ("/api/create",(req,res) => {
    const url = req.body
    console.log(url);
    res.send(nanoid(7))
})

app.listen (PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
    
})