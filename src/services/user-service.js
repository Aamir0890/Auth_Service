const jwt=require('jsonwebtoken');
const {JWT_KEY}=require('../config/serverConfig')
const UserRepository=require('../repository/user-repository')
const bcrypt=require('bcrypt')

class UserService{
    constructor() {
        this.userRepository=new UserRepository();
    }
    async create(data){
        try{
           const user=await this.userRepository.create(data)
           return user;
        }catch(error){
            console.log("Something went wrong in the service layer")
            throw error
        }
    }
    
    createToken(user){
        try {
          const result=jwt.sign(user,JWT_KEY,{expiresIn:'1day'});
          return result;
          } catch(error) {
            console.log("Something went wrong on token creation");
            throw error
          }
    }

     async signIn(email,password){
        try{
           const user=await this.userRepository.getByEmail(email);
           const passwordsMatch=this.checkPassowrd(password,user.password);
           if(!passwordsMatch){
            console.log("Password dosen't match");
            throw {error:'Incorrect Password'}
           }
           // if passwords match then create a token and send it to the user
           const newJWT=this.createToken({email:user.email,id:user.id});
            return newJWT;
        }catch(error){
            console.log("SOmething went wrong in the signIn process");
            throw error
        }
     }


    verifyToken(token){
        try{
                const result=jwt.verify(token,JWT_KEY);
                return result;
        }catch(error){
            console.log("Something went wrong on token creation",error);
            throw error
        }
    }

       checkPassowrd(userInputPlanePassword,encryptedPassword){
        try{
            return bcrypt.compareSync(userInputPlanePassword,encryptedPassword)
            
        }catch(error){
            console.log("Something went wrong in password comparision")
        }

       }


}


module.exports= UserService
