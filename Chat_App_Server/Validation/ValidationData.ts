import { ZodType } from "zod"

export class ValidationData 
{
    static Validation<T>(schema : ZodType, data: T) : T 
    {
        return schema.parse(data)
    }
}