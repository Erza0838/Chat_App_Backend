import { z } from "zod"

// Sebagai referensi validasi data saat login dan register
export const UserValidationReference = z.object(
{   
    ValidateGenders: z.string().min(9).max(9),
    ValidateUserName: z.string().min(3).max(50),
    ValidateEmail: z.string().min(5).max(50),
    ValidatePassword: z.string().min(8).max(50)
})