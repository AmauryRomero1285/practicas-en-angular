import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRouter from './router/routes.js';
import bodyParser from "body-parser";


const app=express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.set('port',process.env.PORT||3500);

app.use("/",userRouter);
export default app;