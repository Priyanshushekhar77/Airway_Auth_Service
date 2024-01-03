const {User} = require('../models/index');

class userRepository {
    async create(data) {
        try{
             const user = await User.create(data);
             return user;
        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw error;
        }
    }
    async destroy(userId){
        try{
            await User.destroy({
                where:{
                   id:userId
                }
            });
            return true;
        }
            catch(error){
                console.log("something wrong in the repository layer");
                throw error;
            }
    }
    async getbyId(userId) {
        try{
            const user = await User.findByPk(userId, {
                attributes:['email','id']
            });
            return user;

        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw error;
        }
    }
    async getByEmail(userEmail){
        try{
            const user = await User.findOne({where:{email:userEmail
            }});
            return user;
        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw error;
        }

    }

    async isAdmin(userId){
        try{
             const user = await User.findByPk(userId);
             const adminrole = await Role.find({
                where:{
                    name:'ADMIN'
                }
             });
             return user.hasRole(adminrole);

        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw error;
        }
    }
    async isCustomer(userId){
        try{
             const user = await User.findByPk(userId);
             const role = await Role.find({
                where:{
                    name:'CUSTOMER'
                }
             });
             return user.hasRole(role);

        }
        catch(error){
            console.log("something wrong in the repository layer");
            throw error;
        }
    }


}

module.exports=userRepository;