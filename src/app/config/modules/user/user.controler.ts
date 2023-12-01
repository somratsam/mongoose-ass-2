import { Request, Response } from "express";
import { UserServices } from "./user.service";
import userValidationSchema from "./userValidation";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    console.log("User Object:", user);

    const zodParseData = userValidationSchema.parse(user);

    const result = await UserServices.createUserIntoDb(zodParseData);
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err: any) {
    console.log(err);
    const statusCode = err.statusCode || 404;
    const errorMessage = err.message || "Internal Server Error";
    const errorDescription = err.description || "User Already Exists";

    res.status(statusCode).json({
      success: false,
      message: errorMessage,
      error: {
        code: statusCode,
        description: errorDescription,
      },
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

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserFromDb(userId);
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = req.body;
    const result = await UserServices.updateUserToDb(userId, user);
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserServices.deleteUserFromDb(userId);
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const addOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const order = req.body;
    const result = await UserServices.addOrderToDb(userId, order);
    res.status(200).json({
      success: true,
      message: "Order added successfully!",
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

export const UserControllers = {
  createUser,
  getAllUses,
  getSingleUser,
  updateUser,
  deleteUser,
  addOrder,
};
