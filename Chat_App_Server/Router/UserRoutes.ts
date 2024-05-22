import { NextFunction, Request, Response, Router } from "express"

const RegisterRouter = Router()

RegisterRouter.get("/api/User/Register", (request: Request, response: Response, next: NextFunction) => 
{
    response.send("Halaman register")
})

export default RegisterRouter