import { Severity, getModelForClass, modelOptions, pre, prop } from "@typegoose/typegoose"
import argon2 from "argon2"

@pre<User>("save", async function () {
    if (!this.isModified("password"))
        return

    this.password = await argon2.hash(this.password)
})
@modelOptions({
    schemaOptions: {
        timestamps: true
    },
    options: {
        allowMixed: Severity.ALLOW
    }
})
export class User {
    _id: string

    @prop({ required: true })
    name: string

    @prop({ required: true, unique: true })
    email: string

    @prop({ required: true })
    password: string

    @prop({ required: true })
    verificationCode: string

    @prop({ required: true })
    resetPasswordCode: string | null

    @prop({ default: false })
    verified: boolean

    async validatePassword(userPassword: string) {
        argon2.verify(this.password, userPassword)
    }
}

const UserModel = getModelForClass(User)

export default UserModel