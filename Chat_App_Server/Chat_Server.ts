import express, { Application,Request, Response, Express, response, query, NextFunction} from "express"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import axios from "axios"
import { AxiosError } from "axios"
// import * as fetch from "node-fetch"

const app:Application = express()
const PORT = 3000

// Import model
import { CreateNewAccountRequest } from "./Model/UserModel"
import { UserValidationReference } from "./Validation/RegisterLoginValidation"
import { UserHasLogin } from "./Model/IUserHasLogin"

// Import router
import RegisterRouter from "./Router/NewUserRoutes"
import { FrontendApiUrl } from "./Router/ApiEndpoint"
import { compareSync } from "bcrypt"
import { error } from "winston"
import { any } from "zod"

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
const FrontendApiUrlReference: FrontendApiUrl =

{
    RegisterUrl: "http://localhost:5173/LoginUser/RegisterUser/"
}

function ConnectionPort(): void
{
    try 
    {
        app.listen(PORT, () => 
        {
            console.log(`Running on port ${PORT}`)
        })   
    } 
    catch (error) 
    {
        console.log(error)  
    }
}
ConnectionPort()

// Perbaikan register api
app.post("/api/User/Register", async (request: Request, response: Response) => 
{   
    await fetch("http://localhost:5173/LoginUser/RegisterUser/")
    .then(Response => Response.json()) 
    .then(data => data)
    .catch(error => console.log(error))

    // try
    // {   
    //     await fetch("http://localhost:5173/LoginUser/RegisterUser/")
    //     .then(Response => Response.json()) 
    //     .then(data => data)
    //     .catch(error => console.log(error))
    // }
    // catch(error)
    // {
    //     console.log(error)
    // }  
    
    // try 
    // {
    //     axios.post("http://localhost:5173/LoginUser/RegisterUser/")
    //     .then(response => console.log(response))
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error))
    // } 
    // catch (error) 
    // {   
    //     if(axios.isAxiosError(error))
    //     {
    //         console.log("error message:",error.message)
    //     }
    // }
})
export default app