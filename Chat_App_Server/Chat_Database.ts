// import mysql from "mysql2"
// import dbConfig from "./Config/db.config"
import { PrismaClient } from "@prisma/client"
import { Logger } from "./Logging"

export const prismaClient = new PrismaClient(
{
    log:    
    [
        {
            emit: "event",
            level: "query"
        },
        {
            emit: "event",
            level: "error"
        },
        {
            emit: "event",
            level: "info"
        },
        {
            emit: "event",
            level: "warn"
        },
    ]    
})

prismaClient.$on("error", (error) => 
{
    Logger.error(error)
})

prismaClient.$on("warn", (error) => 
{
    Logger.warn(error)
})

prismaClient.$on("info", (error) => 
{
    Logger.info(error)
})

prismaClient.$on("query", (error) => 
{
    Logger.info(error)
})