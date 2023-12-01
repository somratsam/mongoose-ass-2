import { User } from "../user.model";
import { TOrder, TUser } from "./user.interface";

const createUserIntoDb = async (userData: TUser) => {
  const user = new User(userData);

  if (await user.isUserExists(userData.userId)) {
    throw new Error("User Already Exists!");
  }

  const result = await user.save();
  return result;
};

const getAllUsersFromDb = async () => {
  const result = await User.find().select(
    "username fullName age email address"
  );
  return result;
};
const getSingleUserFromDb = async (_id: string) => {
  const result = await User.findOne({ _id });
  return result;
};

const updateUserToDb = async (userId: string, user: TUser) => {
  const result = await User.findByIdAndUpdate(userId, user, { new: true });
  return result;
};
const deleteUserFromDb = async (userId: string) => {
  const result = await User.findByIdAndDelete(userId);
  return result;
};
const addOrderToDb = async (userId: string, order: TOrder) => {
  const result = await User.updateOne(
    { _id: userId },
    { $push: { orders: order } },
    { new: true }
  );
  return result;
};

export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDb,
  getSingleUserFromDb,
  updateUserToDb,
  deleteUserFromDb,
  addOrderToDb,
};
