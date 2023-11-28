import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) =>{
   
try{
    const user = req.body.user
    const result = await UserServices.createUserIntoDb(user);
    res.status(200).json({
        success: true,
        message:'User created successfully!',
        data: result
    })
    
}catch(err){
    console.log(err);
}

}

export const UserControllers = {
    createUser
}