const users = []

export const addUser = (req, res)=>{

    const {firstName, lastName, userName, password} = req.body;

    

    users.push({userName : userName, password : password})

    res.status(200).json({
        message : "user added",
        data : users
    })


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


