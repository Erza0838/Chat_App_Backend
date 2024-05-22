import { RowDataPacket } from "mysql2";

// Interface untuk menyimpan informasi informasi user baru/user baru membuat akun
export default interface UserRegistrationInformation extends RowDataPacket
{
    UserCreateEmail: string,
    
}