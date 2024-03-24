import { TypeOf, object, string } from "zod";

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: "Name is required"
        }),
        email: string({
            required_error: "Email is required"
        }).email(),
        password: string({
            required_error: "Password is required"
        }),
        confirmPassword: string({
            required_error: "Confirm password is required"
        })
    }).refine(data => data.password === data.confirmPassword, { message: "Passwords do not match" })
})

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"]