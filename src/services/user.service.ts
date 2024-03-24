import UserModel from "../models/user.model";
import { CreateUserInput } from "../schemas/user.schema";

export const userService = {
    create: async (data: CreateUserInput) => {
        return UserModel.create(data)
    }
}