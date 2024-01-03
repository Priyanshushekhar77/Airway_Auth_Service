const validateUsersAuth = (req,res,next)=> {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
                message:'something went wrong in signup',
                data:{},
                success:false,
                err:'email or password missing'
        });
    }
    next();
}
const roleVerification = (req,res,next)=> {
    if(!req.body.id) {
        return res.status(400).json({
                message:'something went wrong',
                data:{},
                success:false,
                err:'userid not given'
        });
    }
    next();
}


module.exports = {
    validateUsersAuth,
    roleVerification
}