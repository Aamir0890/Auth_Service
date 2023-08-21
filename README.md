# This is the Auth_service

## Project Setup
-clone the git repository

-Execute `npm install` on the same path as the root directory of the downloaded project

-create a new .env file in the root directory and add the following enviroment variables

--`PORT=3001`


-Inside the 'src/config' folder create a new file 'config.json' and then add the following json

{
  "development": {
    "username": "your-db-login name",
    "password": "your-db-password",
    "database": "Auth_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
}

"once you have added the json file just go to git and write `npx sequelize db:create`"
  
  and to connect to sql server run `npx sequelize db:migrate`

## DB Design
-Users
-Roles
-A user can have multiple roles.He can be a customer and/or an admin member

## Users Table
-id-unique- to identify the user.

##  Roles
A user can have mulitple roles and multiple roles can belong to a single user.We see this is a many to many relation.So while using sequelize we need to relate the users model to role model we need.We need db.sync() to sync the db which will in result automatically create a differnt table UserRoles to manage the realtion. Make sure to customize the model fields and configurations as needed for your specific use case.

# Authorization
For authrization we are using jwt(please refer the npm package for more detail),and using bcrypt to encrypt the password.