import { z,ZodType } from "zod"

export class Uservalidation 
{
    static readonly Register: ZodType = z.object(
    {
        Genders: z.string().min(8).max(12),
        Email: z.string().min(9).max(30),
        Username: z.string().min(9).max(40),
        Password: z.string().min(10).max(40)
    })
}

    