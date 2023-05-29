import express, { Application, Request, Response } from "express";
import cors from 'cors';
const app: Application = express();
const port = 3000;



// middleware
app.use(cors());


//parser
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get("/", (req:Request, res:Response) => {
  res.send("University management database successfully");
});

export default app;
