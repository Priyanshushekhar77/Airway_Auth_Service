const UserRepository = require('../repository/user_repo'); 
const jwt = require('jsonwebtoken');
const {JWT_KEY} = require('../config/serveconfig');

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

     createToken(user) {
        try{
            const result = jwt.sign(user,JWT_KEY,{expiresIn:'1h'})


        }
        catch(error){
            console.log("something wrong in the token creation");
            throw error;
        }
     }
     verifyToken(token){
        const response = jwt.verify(token,JWT_KEY);
        return response;
     }
     catch(error){
        console.log("something wrong in the token validation");
        throw error;
    }
}
module.exports = userService