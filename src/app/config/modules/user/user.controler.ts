import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body.user;
    const result = await UserServices.createUserIntoDb(user);
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getAllUses = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDb();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};


const getSingleUser = async (req:Request, res: Response)=>{
    try{

        const {userId} = req.params
        const result = await UserServices.getSingleUserFromDb(userId);
        res.status(200).json({
            success: true,
      message: "Users fetched successfully!",
      data: result,
        })
    }catch(err){
        console.log(err);
    }
}

export const UserControllers = {
  createUser,
  getAllUses,
  getSingleUser
};
