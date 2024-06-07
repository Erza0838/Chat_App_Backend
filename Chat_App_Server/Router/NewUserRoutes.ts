import { prismaClient } from "../Chat_Database"
import bcrypt from "bcrypt"
import uuid from "uuid"
import cors from "cors"
import express, { Application,Request, Response, Express, request, response } from "express"
import { Router } from "express"

// Import Api url
import { FrontendApiUrl } from "./ApiEndpoint"

// Import model
import { CreateNewAccountRequest } from "../Model/UserModel"
import { UserModelPrisma } from "../Model/UserModel"
import { error } from "winston"

// const app = express()
const RegisterRouter = express.Router()
RegisterRouter.use(cors())
// app.use(cors())
prismaClient.$connect()

  const FrontendApiUrlReference: FrontendApiUrl =
  {
      RegisterUrl: "http://localhost:5173/LoginUser/RegisterUser/"
  }

RegisterRouter.post("/api/User/Register", (request: Request, response: Response) => 
{   
    const RegiserData : CreateNewAccountRequest = request.body as CreateNewAccountRequest

    // Fetch data dari API register
    async function FethRegisterData(url: string): Promise<Response> 
    {   
        const response = await fetch(url, 
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            Gender: RegiserData.InsertGenders,
            Email: RegiserData.CreateEmail,
            Username: RegiserData.CreateUserName,
            Password: RegiserData.CreatePassword        
          })
        })
        console.log(response.json())
        return await response.json()
    }

    FethRegisterData(FrontendApiUrlReference.RegisterUrl)
    // const RegiserData : CreateNewAccountRequest = request.body as CreateNewAccountRequest
    // // Cari user yang memiliki email yang sama
    // const FindSameEmail = await prismaClient.userModel.count(
    // {
    //     where : 
    //     {
    //         Username: RegiserData.CreateEmail
    //     }
    // })
    // if(FindSameEmail != 0)
    // {
    //     throw new Error("Username sudah dibuat")
    // }
    // // Masukkan data register ke database
    // const InsertRegisterData = await prismaClient.userModel.create(
    // {
    //     data : 
    //     {
    //         Genders: RegiserData.InsertGenders,
    //         Email: RegiserData.CreateEmail,
    //         Username: RegiserData.CreateUserName,
    //         Password: RegiserData.CreatePassword
    //     }
    // })
    // return UserModelPrisma(InsertRegisterData)
})

export default RegisterRouter