import { UserModel } from "@prisma/client"

export type UserResponse = {
    UserEmail: string,
    UserName: string,
    CreateToken?: string    
}

export interface CreateNewAccountRequest {
    InsertGenders: string,
    CreateEmail: string,
    CreatePassword: string,
    CreateUserName: string
}

export function UserModelPrisma(UserData: UserModel): CreateNewAccountRequest {
    return {
        CreateUserName: UserData.Username,
        CreateEmail: UserData.Email,
        InsertGenders: UserData.Genders,
        CreatePassword: UserData.Password
    }
}

// export function UserModelPrisma(UserData: UserModel): UserResponse {
//     return {
//         UserEmail: UserData.Username,
//         UserName: UserData.Email,
//     }
// }