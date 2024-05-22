import { RowDataPacket } from "mysql2";
import Chat_Database from "../Chat_Database"

// Interface untuk menyimpan data data dari form login
export default interface UserLoginInformation extends RowDataPacket
{
    UserEmail:string,
    UserPassword:string
}