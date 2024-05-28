export type UserResponse = {
    UserEmail: String,
    UserName: String,
    CreateToken?: String    
}

export interface CreateNewAccountRequest {
    InsertGenders: String,
    CreateEmail: String,
    CreatePassword: String
    CreateUserName: String
}