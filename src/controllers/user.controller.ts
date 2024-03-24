import { Request, Response } from "express"
import { CreateUserInput } from "../schemas/user.schema"
import UserModel from "../models/user.model"
import { userService } from "../services/user.service"

const userController = {
    createUser: async (req: Request<{}, {}, CreateUserInput>, res: Response) => {
        const user = await userService.create(req.body)
        res.send({ user })
    }
}


export default userController