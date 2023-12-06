import { Request, Response } from "express";
import { UserServices } from "./user.service";
import userValidationSchema from "./userValidation";
import { number } from "zod";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const zodParseData = userValidationSchema.parse(user);

    const result = await UserServices.createUserIntoDb(zodParseData);
    res.status(200).json({
      success: true,
      message: "User created successfully!",
      data: result,
    });
  } catch (err: any) {
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

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUsersFromDb();
    res.status(200).json({
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    const statusCode = err.statusCode || 404;
    const errorMessage = err.message || "Internal Server Error";
    const errorDescription = err.description || "Users not found!";

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

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserFromDb(Number(userId));

    if (result) {
      res.status(200).json({
        success: true,
        message: "User fetched successfully!",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
  } catch (err: any) {
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Internal Server Error";
    const errorDescription = err.description || "Failed to fetch user";

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

const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = req.body;
    const result = await UserServices.updateUserToDb(Number(userId), user);
    res.status(200).json({
      success: true,
      message: "User updated successfully!",
      data: result,
    });
  } catch (err: any) {
    const statusCode = err.statusCode || 404;
    const errorMessage = err.message || "Internal Server Error";
    const errorDescription = err.description || "Failed to update user";

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
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await UserServices.deleteUserFromDb(Number(userId));
    res.status(200).json({
      success: true,
      message: "User deleted successfully!",
      data: result,
    });
  } catch (err: any) {
    const statusCode = err.statusCode || 404;
    const errorMessage = err.message || "Internal Server Error";
    const errorDescription = err.description || "User not found!";

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

const addOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const order = req.body;
    const result = await UserServices.addOrderToDb(Number(userId), order);
    res.status(200).json({
      success: true,
      message: "Order added successfully!",
      data: result,
    });
  } catch (err: any) {
    const statusCode = err.statusCode || 404;
    const errorMessage = err.message || "Internal Server Error";
    const errorDescription = err.description || "User not found!";

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

const getSingleUserOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserWithOrdersFromDb(
      Number(userId)
    );

    if (result) {
      res.status(200).json({
        success: true,
        message: "User orders fetched successfully!",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found!",
        error: {
          code: 404,
          description: "User not found!",
        },
      });
    }
  } catch (err: any) {
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || "Internal Server Error";
    const errorDescription = err.description || "User not found!";

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

const getTotalPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const totalPrice = await UserServices.getTotalPriceForUserFromDb(
      Number(userId)
    );

    res.status(200).json({
      success: true,
      message: "Total price calculated successfully!",
      data: {
        totalPrice: totalPrice,
      },
    });
  } catch (err: any) {
    const statusCode = err.statusCode || 404;
    const errorMessage = err.message || "Internal Server Error";
    const errorDescription = err.description || "User not found";

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

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  addOrder,
  getSingleUserOrders,
  getTotalPrice,
};
