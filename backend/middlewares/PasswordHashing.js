import bcrypt from 'bcrypt'

const hashPassword = async (req, res, next) => {
    console.log(req.body);
    
    const { password } = req.body;

    if(!password  || password.trim() == ""){
        return res.status(401).json({
            message : "password not found!"
        })
    }

    const hashedPassword =await bcrypt.hash(password, 10)
    req.body.password = hashedPassword;
    next()

}

export default hashPassword