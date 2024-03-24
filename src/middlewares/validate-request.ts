import { Request, Response } from "express"

import { AnyZodObject } from "zod";

export const validateRequest = (schema: AnyZodObject) => (req: Request, res: Response, next) => {
    schema.parse({
        body: req.body,
        query: req.query,
        params: req.params,
    })
    next()
}