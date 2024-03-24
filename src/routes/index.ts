import express from "express"
import { userRoutes } from "./user.routes"

const router = express.Router()

router.get("/health", (_, res) => res.sendStatus(200))

router.use(userRoutes)

export default router