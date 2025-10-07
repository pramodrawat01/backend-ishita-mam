import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const users = []

export const addUser = (req, res)=>{

    const {firstName, lastName, userName, password} = req.body;

    if((!firstName || firstName.trim() === "") || (!userName || userName.trim() === "")){
        return res.status(401).json({
            message : "incomplete information !"
        })
    }

    // check user exist or not
    const checkUser = users.find( u=> u.userName === userName  )
    if(checkUser){
        res.status(400).json({
            message : "username already exist"
        })
    }


    users.push({userName : userName, password : password})

    const token = jwt.sign({id : userName}, process.env.secret_key, {expiresIn : "3d"} )

    res.status(201).cookie("token", token).json({
        message : "new user created successfully",
        
    })

    

    // users.push({userName : userName, password : password})

    // res.status(200).json({
    //     message : "user added",
    //     data : users
    // })


}


export const userLogin = async(req, res)=>{

    const {userName, password} = req.body;

    if(!userName || userName.trim() ===""  || !password || password.trim() ==="" ){
        return res.status(400).json({

        })
    }

    // user does not exist
    const findUser = users.find( u => u.userName === userName)
    if(!findUser){
        return res.status(404).json({
            message : "user not found"
        })
    }

    // userfound but password in incorrect

    let isVerified = await bcrypt.compare(password, findUser.password)

    if(!isVerified){
        return res.status(400).json({
            message :"incorrect credentials"
        })
    }

    // all ok user found and password is correct -
    const token = jwt.sign({id : userName}, process.env.secret_key, {
        expiresIn : "7d"
    })

    return res.status(200).cookie("token", token).json({
        message : "logged in successfully"
    })
    
}

export const getAllUsers = (req, res)=>{

    res.json({
        message : "all users",
        users : users
    })
}

export const getUser = async(req, res) =>{

    const {userId} = req.param

    const {token} = req.cookies



    try{

        if(!token) return res.status(401).json({
            message  :"user not logged in !"
        })

        // verify the token
        const decoded = jwt.verify(token, process.env.secret_key)
        // decoded return a decoded obj like { iat- browser mantain this for expiries ad all, id - (set while generating tokens)}

        const userName = decoded.id

        const findUser = users.find( u=> u.userName === userName)
        if(findUser){
            return res.status(200).json({
                message : "user found",
                user : findUser
            })
        }
        else{
            return res.status(401).json({
                message : "user not found"
            })
        }
    }
    catch(error){
        return res.status(500).json({
            message : "server error",
            error : error.message
        })
    }


    
    
}




export const updateUser = (req, res)=>{

}

export const deleteAllUsers = (req, res)=>{

}

export const deleteUser = (req, res)=>{

}


