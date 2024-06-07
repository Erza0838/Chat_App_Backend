import { NextFunction, Request, Response, Router } from "express"

// Import Api url
import { FrontendApiUrl } from "./ApiEndpoint"

const RegisterRouter = Router()

RegisterRouter.post("/api/User/Register", async (request: Request, response: Response) => 
{   
    // const responseData = await fetch(ApiUrl,{
    //     method : "POST",
    //     headers : {
    //         "Content-Type": "application/json"
    //     },
    //     body : JSON.stringify(data)
    // }) 
    // if(!responseData.ok)
    // {
    //     throw new Error(`Eror : ${response.status}`)            
    // }
})