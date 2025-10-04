// import in common js using require
// const {add} = require('./math.js')
// import default in common js
// cosnt add = require('./math.js')


// import default in module js
// import {add} from './math.js'


// const ans = add(3,5);

// console.log(ans)




// import fs from "fs"

// // this is synchronus - block the execution until the previous task has done
// fs.writeFileSync('text2.txt', "synchronous fs file")


// // asynchronous 
// fs.writeFile('text3.txt', "asynchronous file", (err)=>{
//     console.log(err)
// })


// // read asynchronous file data
// fs.readFile('text3.txt', 'utf-8', (err, data)=>{
//     console.log(data)
// })


// // read synchronous 
// // check again ??
//  const data = fs.writeFileSync("text2.txt", 'utf-8')
// console.log(data, "reding sync file data")


// CRUD 
// create ns read
// update nd delete

// update - using append 

// fs.appendFile('text3.txt', " and new data", (err) => console.log(err))

// // append in synchronous

// fs.appendFileSync('text2.txt', " new data in synchronous file")


// update 
// fs.writeFile('text3.txt', "delete", ()=>{})

// delete - unlink and unlink sync

// fs.unlink('text3.txt', (err)=>{
//     if(err){
//         console.log(err)
//     }

//     console.log("file deleted")
// })



// fs.mkdir("assets", (err)=>{
//     if(err){
//        return console.log(err)
//     }
// })

// fs.unlink("assets.txt", (err)=>{
//     if(err){
//         return console.log(err)
//     }
// })

// fs.writeFile("assets.txt", "assets file", (err)=>{
//     if(err){
//         return console.log(err)
//     }
// })



// // creating server with http module
// import http from 'http'


// const server = http.createServer((req, res)=>{
    
//     res.statusCode = 200
//     res.end("request send to client")
// })

// // port - a gatway to listen for multipal services provided by server 

// const port = 3000;
// server.listen(port, (req, res) =>{
//     console.log("server started")
// })




// import http from 'http';

// const server = http.createServer((req, res)=>{

//     if(req.url === '/'){
//         res.end("this is home page")
//     }else if(req.url === '/about'){
//         res.end("this is about page")
//     }
//     else{
//         res.end("this is port 3000 listening your request ")
//     }

    
// })


// server.listen(3000, (req, res)=>{
//     console.log("server started successully")
// })



/// cryptography - for network security 

/// 1- createHash - 
// 2- update 
/// 3- digest 

// crypto vs cryptography 

// cryptography - here we have to define algorithm to hash my password
{/***
    
    but crpyto has inbuild algorithms for hashing pass 
    "sha256"
    .createHash("sha256")
    
    sha - secure hashing algorithm 
    256 - The 256 means the output is 256 bits long (which is 64 characters in hexadecimal).

    hashing of password happens in cpu and it gives buffer data (binary data )
    so we use .digest("hax")

    in express we use bcrypt library for password hasing
    */}


{/****
    problems with node ----------------------> 
    * db connect is problemetic
    * too much manual code
    * 
    * 

    express ------------------------->
    
*/}


{/***
    env - environment variables ( critical data )
    cannot read directly env in server -----> dotenv()
    */}


    {/***
        
        http methods - what use wants with server
        get (view / read)
        post (write)
        put (update), patch (update)
        delete (delete)


        put() -----> if exist then update, if not then create
        patch() -------> update only existing items
         


        res.send() ========> .end() + .writeHead() 

        */}




    {/****
        api --- are general terms 
        restful api ---- generate communication between frontend and backend
        domain name + endpoint + http method ===========> restful api

    */}


    {/****
        middleware ------> provide additional funcatinolities
        in express we use app.use()  to use middleware


        req ----> middleware ----------> req
        build on top of body parcer

        */}
// import crypto from 'crypto'

// const hashedPass  = crypto.createHash("sha256").update("mypassword").digest("hex")
// console.log(hashedPass)



// /// express 
// import express from "express";
// import dotenv from 'dotenv'

// // config dotenv --- 
// dotenv.config();     // now dotenv can read all the env variables

// const app = express()  // server created (bts it uses http modules of node )

// // parse the json body of user in obj form 
// app.use(express.json())

// // defining http method
// app.get('/', (req, res)=>{
//     res.send("listening at port 3000")
// })



// app.get('/about', (req, res)=>{
//     res.send("this is about page")
// })

// // creating a post request to interect with db
// let users =[];

// app.post('/addUser', (req, res)=>{
//     const {firstName, lastName, userName, password, userId} = req.body;
//     const obj ={
//         userId,
//         firstName, 
//         lastName, 
//         userName, 
//         password
//     }

//     users.push(obj)


//     res.status(200).json({
//         message : "new user added",
//         usersList : obj,
//     })
// })


// // get all users list

// app.get('/getUsersList', (req, res)=>{
//     res.json({
//         message : "users list",
//         usersList : users
//     })
// })




// // get user (using useParam)
// app.get('/user/:userName', (req, res)=>{
//     const {userName} = req.params;

//     const findUser = users.find((u) => u.userName === userName)

//     if(findUser){
//         console.log(findUser, "user found")
//         res.json({
//             message : "user found",
//             user : findUser
//         })
//     }

//     else{
//         console.log("user does not found")
//         res.send({
//             message : "user does not found",
//         })
//     }
  
// })


// // UPDATE EXISTING USER
// app.patch('/updateUser/:userName', (req, res)=>{
//     const {userName} = req.params;

//     // destructure the propertires from req.body whcih user wants to update
//     const {password} = req.body;

//     const findUser = users.find(user => user.userName === userName)
//     if(!findUser){
//         res.json({
//             message : "user does not exist"
//         })
//     }

//     findUser.password = password;
//     res.json({
//         message :" password updated",
//         newpassword : password
//     })
// })


// // DELETE USER
// app.delete('/deleteUser/:userId', (req, res)=>{
//     const {userId} = req.params

//     console.log(userId, " user deleted")


//     const deleteUser = users.filter( u => u.userId !== userId)
//     users = deleteUser

//     res.status(200).json({
//         message : `${userId} user deleted `,
//         user : users
//     })


// })


// /// listening at port 3000 
// app.listen(process.env.PORT, (req, res)=>{
    
//     console.log("server started!")

// })






import e from "express";
import dotenv from 'dotenv'
import userRouter from "./routes/UserRouter.js";

dotenv.config()
const app = e();
app.use(e.json())

app.use('/user', userRouter)



app.listen(process.env.PORT, (req,res)=>{
    console.log("server starteed")
})
