const UserRepository = require('../repository/user_repo');

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
}
module.exports = userService