import express, { Request, Response, Express } from "express"
import path from "path"
import bodyParser from "body-parser"
import { PrismaClient } from "@prisma/client"
import { Connection } from "mysql2/typings/mysql/lib/Connection"
import { OkPacketParams } from "mysql2"
import helmet from "helmet"

const app:Express = express()
const PORT = 3000

// Import model
import { CreateNewAccountRequest } from "./Model/UserModel"
import { UserValidationReference } from "./Validation/RegisterLoginValidation"

// Import router
import RegisterRouter from "./Router/UserRoutes"

// Gunakan router untuk membuat jalur URL
app.use( "/api/User/Register", RegisterRouter)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(helmet)

// app.use()

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

function DisplayLoginForm(): void
{   
    app.use(express.static(path.join(__dirname, "../public")))
    app.set("views", path.join(__dirname, "../Views"))
    app.set("view engine", "ejs")
    app.get("/Login", (request: Request, response: Response) => 
    {
        response.render("UserLoginForm")
    })
}
DisplayLoginForm()

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
function NewRegisterUser(): void
{
    app.post("/api/User/Register", (request: Request, response: Response) => 
    {   
        let UserRegisterInformation : { UserEmail: string, UserPassword: string } = 
        {
            UserEmail: request.body.LoginEmail,
            UserPassword: request.body.LoginPassword
        }
    })  
}
NewRegisterUser()