export type UserResponse = {
    UserEmail: String,
    UserName: String,
    CreateToken?: String    
}

export type CreateNewAccountRequest = {
    InsertGenders: String,
    CreateEmail: String,
    CreatePassword: String
    CreateUserName: String
    // UserName: String
}