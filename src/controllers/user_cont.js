 const UserService = require('../services/user_service');
const userService = new UserService();
 const create = async (req,res) => {
    try{
       const response = await userService.create({
            email:req.body.email,
            password:req.body.password
       });
        return res.status(201).json({
            message:'successfully created a new user registration',
            data:response,
            success:true,
            err:{}
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:'something wrong in the server',
            data:{},
            success:false,
            err:error
        });
    }
 }

 const signIn = async(req,res) => {
   try{
    const result = await userService.signIn(req.body.email,req.body.password)
    return res.status(200).json({
        message:'successfully Signin',
            data:result,
            success:true,
            err:{}
    })
   }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:'something wrong in signin',
            data:{},
            success:false,
            err:error
        });
    }
 }

 const isAuthenticated = async(req,res) => {
   try{
          const token = req.headers['x-access-token'];//from frontend of user
          const result=userService.verifyToken(token);
          return res.status(200).json({
            message:'user is authenticated and token is valid',
            data:result,
            success:true,
            err:{}
          })
   }
   catch(error){
    console.log(error);
    return res.status(500).json({
        message:'something wrong in authenicated',
        data:{},
        success:false,
        err:error
    });
}
 }

 const isAdmin = async(req,res) => {
    try{
        const response = await userService.isAdmin(req.body.id);
        return res.status(200).json({
            message:'sucessfully admin verification done',
            data:response,
            success:true,
            err:{}
        })

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            message:'something wrong in authenicated',
            data:{},
            success:false,
            err:error
        });
    }
}
   

    const isCustomer = async(req,res) => {
        try{
            const response = await userService.isCustomer(req.body.id);
            return res.status(200).json({
                message:'sucessfully customer verification done',
                data:response,
                success:true,
                err:{}
            })
    
        }
        catch(error){
            console.log(error);
            return res.status(500).json({
                message:'something wrong in authenicated',
                data:{},
                success:false,
                err:error
            });
        }
    }

 
 module.exports = {
  create,
  signIn,
  isAuthenticated,
  isAdmin,
  isCustomer
 }