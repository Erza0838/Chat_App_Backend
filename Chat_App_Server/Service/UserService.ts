import { string, z } from "zod"
import { prismaClient } from "../Chat_Database"
import { CreateNewAccountRequest, UserResponse } from "../Model/UserModel"
import { Uservalidation } from "../Validation/UserValidation"
import { ValidationData } from "../Validation/ValidationData"

// export class UserService
// {
//     static async RegisterUser(request: CreateNewAccountRequest) : Promise<UserResponse>
//     {
//         const RegisterInformation = ValidationData.Validation(Uservalidation.Register, request)   
//         const SameUserNameCount = await prismaClient.userModel.count(
//         {   
//             where :             
//             {   
//                 Username : RegisterInformation.CreateUserName
//             }
//         })
//     }
// }   