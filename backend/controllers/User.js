const users = []

export const addUser = (req, res)=>{

    const {firstName, lastName, userName, password} = req.body;

    if((!firstName || firstName.trim() === "") || (!userName || userName.trim() === "")){
        return res.status(401).json({

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

    res.status(201).json({
        message : "new user created successfully",
        
    })

    

    // users.push({userName : userName, password : password})

    // res.status(200).json({
    //     message : "user added",
    //     data : users
    // })


}

export const getAllUsers = (req, res)=>{

    res.json({
        message : "all users",
        users : users
    })
}

export const getUser = (req, res) =>{

    const {userId} = req.param

    const findUser = users.find( u=> u.userId === userId)
    res.status(200).json({
        message : "user found",
        user : findUser
    })
    
}

export const updateUser = (req, res)=>{

}

export const deleteAllUsers = (req, res)=>{

}

export const deleteUser = (req, res)=>{

}


