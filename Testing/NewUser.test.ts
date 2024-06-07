import app from "../Chat_App_Server/Chat_Server"
import request from "supertest"

describe("/api/User/Register", () => 
{
    it("Tampilkan status code 400 jika email sama", async () => {
        const ErorResponse = await request(app).post("/api/User/Register")
        expect(ErorResponse.body).toEqual([])
    })
})