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
const getSingleUserFromDb = async (userId: number) => {
  const result = await User.findOne({ userId }).select("-password -orders");
  return result;
};

const updateUserToDb = async (userId: number, user: TUser) => {
  const result = await User.findOneAndUpdate({ userId: userId }, user, {
    new: true,
    fields: { password: 0 },
  });
  return result;
};

const deleteUserFromDb = async (userId: number) => {
  const result = await User.findOneAndDelete({ userId: userId });
  return result;
};

const addOrderToDb = async (userId: number, order: TOrder) => {
  const userA = await User.findOne({ userId: userId });

  if (userA) {
    const result = await User.findOneAndUpdate(
      { userId: userId },
      { $push: { orders: order } },
      { new: true }
    );

    return result;
  } else {
    const newUser = new User({
      userId: userId,
      orders: [order],
    });

    const result = await newUser.save();

    return result;
  }
};

const getSingleUserWithOrdersFromDb = async (userId: number) => {
  const result = await User.findOne({ userId: userId }).select("orders");
  return result;
};

const getTotalPriceForUserFromDb = async (userId: number) => {
  const user = await User.findOne({ userId: userId }).select("orders");

  if (!user) {
    throw new Error("User not found!");
  }

  const totalPrice = user.orders.reduce((sum, order) => {
    return order.price ? sum + order.price : sum;
  }, 0);

  return totalPrice;
};

export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDb,
  getSingleUserFromDb,
  updateUserToDb,
  deleteUserFromDb,
  addOrderToDb,
  getSingleUserWithOrdersFromDb,
  getTotalPriceForUserFromDb,
};
