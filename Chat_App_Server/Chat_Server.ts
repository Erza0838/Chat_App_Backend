import express, { Request, Response } from "express"
import UserRoutes from "../Chat_App_Server/Router/UserRoutes"
import mysql from "mysql"

const app = express()
const PORT = 3000

// Buat dan gunakan router
app.use("/User", UserRoutes)

app.listen(PORT, () => 
{
    console.log(`Running on port ${PORT}`)
})

app.get("/LoginPage", (request: Request, response: Response) => 
{
    // response.redirect("/LoginPage/User")
    response.send("Halaman login")
})