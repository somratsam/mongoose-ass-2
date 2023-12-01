import { Schema, model } from "mongoose";
import {
  TAddress,
  TFullName,
  TOrder,
  TUser,
  UserMethods,
  UserModel,
} from "./user/user.interface";

const FullNameSchema = new Schema<TFullName>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

const AddressSchema = new Schema<TAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const OrderSchema = new Schema<TOrder>({
  productName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

const userSchema = new Schema<TUser, UserModel, UserMethods>({
  userId: { type: Number, unique: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  fullName: FullNameSchema,
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  isActive: { type: Boolean },
  hobbies: [String],
  address: AddressSchema,
  orders: { type: [OrderSchema], default: undefined },
});

userSchema.methods.isUserExists = async function (userId: number) {
  const existingUser = await User.findOne({ userId });

  return existingUser;
};

export const User = model<TUser, UserModel>("User", userSchema);
