require("dotenv").config()
import express from "express"
import config from "config"
import connectToDB from "./utils/connect-db"
import log from "./utils/logger"
import router from "./routes"

const PORT = config.get<number>("port")
const app = express()

app.use(router)

// connectToDB()
app.listen(PORT, () => {
    log.info(`Server started on port ${PORT}`)
})