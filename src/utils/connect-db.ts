import config from "config"
import mongoose from "mongoose"

export default async function connectToDB() {
    const dbUri = config.get<string>("dbUri")
    try {
        await mongoose.connect(dbUri)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Could not connect to MongoDB")
        process.exit(1)
    }
}