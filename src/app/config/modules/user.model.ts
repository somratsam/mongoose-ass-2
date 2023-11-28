import { Schema, model, connect } from "mongoose";
import { Address, FullName, Order, User, User, User } from "./user/user.interface";

const FullNameSchema = new Schema<FullName>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  });

  const AddressSchema = new Schema<Address>({
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  });

  const OrderSchema = new Schema<Order>({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  });

const userSchema = new Schema<User>({
    userId: {type: Number, unique: true },
    username: {type: String, unique: true, required: true},
    password:{type: String, required: true},
    fullName: FullNameSchema,
    age: { type: Number, required: true },
    email: {type: String, required: true},
    isActive: {type: Boolean},
    hobbies: [ String],
    address: AddressSchema,
    orders: [OrderSchema]

})

const User = model<User>('User', userSchema)