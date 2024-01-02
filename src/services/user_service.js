const UserRepository = require('../repository/user_repo'); 
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
// const {JWT_KEY} = require('../config/serverconfig');
const JWT_KEY ="PRINCE"

class userService {
     constructor(){
        this.userRepository = new UserRepository();
     }

     async create(data){
        try{
            const user = await this.userRepository.create(data);
            return user;
        }
        catch(error){
            console.log("something wrong in the service layer");
            throw error;
        }
     }
     //signin
     async signIn(email,plnpassword){
       try{
         //1. fetch the user from the corresponsing email
         const user = await this.userRepository.getByEmail(email);
         //2.compase incoming password with db pswd
         const pswdmatch = this.checkPassword(plnpassword,user.password);
         if(!pswdmatch){
             console.log("password doesnot match");
             throw {error:'incorrect password'}
         }
         //3.if password matches than create a token and send it to the corresponding user and this token will b used for his verification in any task
         const newJwt = this.createToken({email:user.email,id:user.id});//plain js fun
         return newJwt;
      }
      catch(error){
        console.log("something wrong in the signin process");
        throw error;
    }
       }

     

     //isauthintected
      async isAuthenticated(token) {
        try{
           const verify = this.verifyToken(token);
           if(!verify){
            throw {error:'invalid token'}
           }
           //after verification of user token check user exist in db becz if user deleted his account before expiry of token than they cant have access
           const user  = this.userRepository.getbyId(verify.id);
           if(!user){
            throw {error:'no user with this id'}
           }
           return user.id;//save this in incoming req

        }
        catch(error){
            console.log("something wrong in the auth process");
            throw error;
        }
           }
    //create token
     createToken(user) {
        try{
            const result = jwt.sign(user,JWT_KEY,{expiresIn:'1h'})
            return result;


        }
        catch(error){
            console.log("something wrong in the token creation");
            throw error;
        }
     }
     //verify token
     verifyToken(token){
       try{
        const response = jwt.verify(token,JWT_KEY);
        return response;
       }
     catch(error){
        console.log("something wrong in the token validation");
        throw error;
    }
}

    checkPassword(userippswd,encpswd){
        try{
            return bcrypt.compareSync(userippswd,encpswd)
        }
        catch(error){
            console.log("something wrong in the cgeck password");
            throw error;
        }
    }
    isAdmin(userId) {
        try{
            return this.userRepository.isAdmin(userId);
        }
        catch(error){
            console.log("something wrong in the service layer");
            throw error;
        }
    }
}
module.exports = userService