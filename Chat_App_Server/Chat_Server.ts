import express, { Request, Response, Express, request, response } from "express"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"

const app:Express = express()
const PORT = 3000

// Import model
import { CreateNewAccountRequest } from "./Model/UserModel"
import { UserValidationReference } from "./Validation/RegisterLoginValidation"
import { UserHasLogin } from "./Model/IUserHasLogin"

// Import router
import RegisterRouter from "./Router/UserRoutes"
import { FrontendApiUrl } from "./Router/ApiEndpoint"

// Gunakan router untuk membuat jalur URL
app.use( "/api/User/Register", RegisterRouter)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(cors())

// Konfigurasi CORS


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

// Function untuk memasukkan data data user membuat akun baru
// function NewRegisterUser(): void
// {
//     app.post("/api/User/Register", (request: Request<{},{},CreateNewAccountRequest,UserHasLogin>, response: Response) => 
//     {   
//         if(request.query.LoginAfterCreate == true)
//         {
//             return response.status(201).send({   
//                 Email: request.body.CreateEmail,
//                 Username: request.body.CreateUserName, 
//                 Genders: request.body.InsertGenders
//             })
//         }
//     })  
// }
// NewRegisterUser()

const FrontendApiUrlReference: FrontendApiUrl =
{
    RegisterUrl: "http://localhost:5173/LoginUser/RegisterUser/"
}

const data: CreateNewAccountRequest =
{
    InsertGenders: "Laki laki",
    CreateEmail: "RanggaYuma@gmail.com",
    CreatePassword: "oreoreore",
    CreateUserName: "Rangga"
}

// Function untuk memasukkan data data user membuat akun baru
async function NewRegisterUser(ApiUrl: string, data: string): Promise<Response> 
{
    app.post("/api/User/Register", async (request: Request, response: Response) => 
    {   
        const responseData = await fetch(ApiUrl,{
            method : "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
        }) 
        if(!responseData.ok)
        {
            throw new Error(`Eror : ${response.status}`)            
        }
    })
    return response.json()
}

// NewRegisterUser(FrontendApiUrlReference.RegisterUrl, data.InsertGenders,data.CreateEmail, data.CreatePassword,data.CreateUserName)