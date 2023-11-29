import { UserModel } from "../user.model";
import { User } from "./user.interface";

const createUserIntoDb = async (user: User) =>{
  const result =  await UserModel.create(user)
  return result;
}

const getAllUsersFromDb = async () =>{
  const result = await UserModel.find()
  return result
}
const getSingleUserFromDb = async (userId: number) =>{
  const result = await UserModel.findOne({userId})
  return result
}

export const UserServices = {
    createUserIntoDb,
    getAllUsersFromDb,
    getSingleUserFromDb
}