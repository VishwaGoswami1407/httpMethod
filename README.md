# 🧑‍💻 HttpMethod

A simple Node.js + Express.js REST API for managing users in-memory (no database). Supports basic CRUD operations.

## 🚀 Start Server

```bash
npm start

```
📦 Available Endpoints
✅ Get All Users
URL: /users

Method: GET

Description: Retrieve all users.

Response:

```
[
  {
    "id": 1,
    "name": "Vishwa",
    "email": "vishwa@example.com",
    "password": "12345"
  }
]
```

📝 Register a New User
URL: /signup

Method: POST

Description: Register a new user.

Request Body:

```
{
  "name": "Vishwa",
  "email": "vishwa@example.com",
  "password": "12345"
}
```
Response: 
```
{
  "message": "user created successfully",
  "newUser": {
    "id": 1,
    "name": "Vishwa",
    "email": "vishwa@example.com",
    "password": "12345"
  }
}

```

✏️ Update Entire User
URL: /user/:id

Method: PUT

Description: Fully update a user by ID.

Request Body:
```
{
  "name": "New Name",
  "email": "new@example.com",
  "password": "newpass"
}

```

Response:

```
{
  "message": "user data updated successfully",
  "user": {
    "id": 1,
    "name": "New Name",
    "email": "new@example.com",
    "password": "newpass"
  }
}

```

🛠️ Partial Update
URL: /user/:id

Method: PATCH

Description: Partially update user fields.

Request Body (example):

```
{
  "email": "updated@example.com"
}

```

Response:

```
{
  "message": "User data updated successfully",
  "user": {
    "id": 1,
    "name": "New Name",
    "email": "updated@example.com",
    "password": "newpass"
  }
}

```
❌ Delete a User
URL: /user/:id

Method: DELETE

Description: Delete user by ID.

Response:


```

{
  "message": "user delete successfully",
  "users": []
}

```
