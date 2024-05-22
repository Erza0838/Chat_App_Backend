#USER API spec

## User Login
Endpoint : POST /api/User/Login
Request Body : 

```JSON
{
    "Email":"Annisaama22@gmail.com",
    "Password":"kyukyu",
    "Token": "UUID"
}
```
Response Body (Success) : 
```JSON
{   
    "Email":"Annisaama22@gmail.com",
    "Username":"Annisa"
}
```
Response Body (Failed) : 
```JSON
{   
    "Error": "Email tidak terdaftar"
}
```

## User Register
Endpoint : POST /api/User/Register
Request body :

```JSON
{   
    "Genders": "Perempuan",
    "Email":"Annisaama22@gmail.com",
    "Password": "Kyukyukyu",
    "Username":"Annisa"
}
```
Response Body (Success) : 
```JSON
{   
    "Email":"Annisaama22@gmail.com",
    "Username":"Annisa",
    "Genders": "Perempuan"
}
```

Response Body (Failed) : 
```JSON
{   
    "Error":"Password minimal 8 karakter"
}
```

## Add new contact
Endpoint : POST /api/User/AddContact
Request Header :
- Login-API-TOKEN : token

Response Body (Success) : 
```JSON
{   
    "Username":"Annisa",
    "PictureProfile": "profile.jpg",
    "Token": "UUID"
}
```

Response Body (Failed) : 
```JSON
{   
    "Error message": "Kontak tidak ada / tidak terdaftar"
}
```

## Update Profile
Endpoint : PATCH /api/User/PersonalProfile
Request Header :
- Login-API-TOKEN : token

Request Body :
```JSON
{   
    "Username":"Nissa",
    "PictureProfile": "profile.jpg",
    "Description": "ljfbalsdjfbaljf"
}
```

Response Body (Success) : 
```JSON
{   
    "Username":"Nissa",
    "PictureProfile": "profile.jpg",
    "Description": "ljfbalsdjfbaljf"
}
```

Response Body (Failed) : 
```JSON
{   
    "Error message": "Kontak tidak ada / tidak terdaftar"
}
```

## Blokir kontak
Endpoint : DELETE /api/User/ContactUser

Request Body :
```JSON
{   
    "Username":"Nissa",
    "PictureProfile": "profile.jpg",
    "Description": "ljfbalsdjfbaljf"
}
```

Response Body (Success) : 
```JSON
{   
    "Success Message" : "Contact berasil di blokir"
}
```

Response Body (Failed) : 
```JSON
{   
    "Error message": "Contact gagal di blokir"
}
```

## User Logout
Endpoint : DELETE /api/User/PersonalProfile
Request Header :
- Login-API-TOKEN : token

Response Body (Success) : 
```JSON
{   
    "Success Message" : "Berahasil logout"
}
```