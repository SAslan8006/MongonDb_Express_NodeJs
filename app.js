import express from 'express';
import dotenv from 'dotenv';

import conn from './src/db/dbConnetions.js';

dotenv.config();
conn();
const app = express();
const port = process.env.PORT || 5001;

app.get("/",(req,res)=> {
    res.json({
        message:"Hoş geldiniz."
    });
})


app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
  });