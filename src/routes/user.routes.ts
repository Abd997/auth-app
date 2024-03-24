import express from "express"
import { validateRequest } from "../middlewares/validate-request"
import { createUserSchema } from "../schemas/user.schema"
import userController from "../controllers/user.controller"

const router = express.Router()

router.post(
    "/api/users",
    validateRequest(createUserSchema),
    userController.createUser
)

export { router as userRoutes }