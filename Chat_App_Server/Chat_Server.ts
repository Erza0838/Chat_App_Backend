import express, { Application,Request, Response, Express, response} from "express"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import axios from "axios"
// import domparser from "domparser"

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

function ShowLoginInformation(): void
{   
    app.post("/LoginPage", (request: Request, response: Response) => 
    {   
        // Type untuk menyimpan informasi login user
        let UserLoginInformation : { UserEmail: string, UserPassword: string} = 
        {
            UserEmail: request.body.LoginEmail,
            UserPassword: request.body.LoginPassword
        }
    })  
}

// Perbaikan register api
app.post("/api/User/Register", async (request: Request, response: Response) => 
{   
    // const ResponseData = await axios.post<CreateNewAccountRequest[]>(FrontendApiUrlReference.RegisterUrl)
    // const result = ResponseData.data
    // response.json(result.map((InterfaceProperty) => 
    // ({
    //     InsertGender: InterfaceProperty.InsertGenders,
    //     CreateEmail: InterfaceProperty.CreateEmail,
    //     CreatePassword: InterfaceProperty.CreatePassword,  
    //     CreateUserName: InterfaceProperty.CreateUserName
    // })))
    const ResponseData = await fetch(FrontendApiUrlReference.RegisterUrl)
    const data = await ResponseData.json() 
    console.log(data)
    return data
})

// Function untuk memasukkan data data user membuat akun baru
function NewRegisterUser(): void
{           
    app.post("/api/User/Register", async (request: Request, response: Response) => 
    {       
        // FetchData()
        // const RegiserData : CreateNewAccountRequest = request.body as CreateNewAccountRequest
        // try 
        // {
        //     const responseData = await fetch(FrontendApiUrlReference.RegisterUrl, 
        //     {
        //         method: "POST",
        //         headers: 
        //         {
        //         "Content-Type":"application/json"
        //         },
        //         body: JSON.stringify({
        //         Gender: RegiserData.InsertGenders,
        //         Email: RegiserData.CreateEmail,
        //         Username: RegiserData.CreateUserName,
        //         Password: RegiserData.CreatePassword        
        //         })
        //     })
        //       .then(response => console.log(response))
        //       .then(data => console.log(data))
        //       .catch(error => console.log(error))
        // } 
        // catch (error) 
        // {
        //     console.log(error)
        // }
    })
}
// NewRegisterUser()

export default app