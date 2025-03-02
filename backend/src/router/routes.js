import {Router} from 'express';
import userController from '../controller/users.controller.js';

const userRouter=Router();

userRouter.get('/users',(req,res)=>{
    res.status(200).json({
        message:'Welcome to practicas-en-angular'
    });
});

userRouter.post('/register',userController.insertUser);

export default userRouter;