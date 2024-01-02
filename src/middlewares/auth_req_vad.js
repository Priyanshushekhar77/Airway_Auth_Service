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


module.exports = {
    validateUsersAuth
}