import express, { Request, Response, Express, request } from "express"
// import { Router } from "express"
import * as cors from "cors"

var router = express.Router()

const options: cors.CorsOptions = 
{
    allowedHeaders: 
    [
        "origin",
        "X-Requested-With",
        "Accept",
        "X-Access-Token"
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "http://localhost:3000/api/User/Register",
    preflightContinue: false
}

// router.use(cors(options))

// export default router.options("*", cors(options))