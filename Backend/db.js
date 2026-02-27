const sql = require('mysql2')
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
let name='';
// let connect =sql.createConnection({
//     host:process.env.DB_HOST,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DB_NAME,
    
// })
// const  connection =()=>{
//     connect.connect(()=>{
//         console.log('connected to database')
//     })

// }


// let query = "CREATE TABLE brandnew(name VARCHAR(255),email VARCHAR(255), password VARCHAR(255))";

// const createUser= ()=>{
//      connect.query(query,(err,res)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log(res)
//         }
//      })
// }



// const createClient =(req,res)=>{
//     createUser();
//     const {fullName,email,password}= req.body;
//     console.log(fullName)
//     console.log(email)
//     console.log(password)
    
//     let sql = "INSERT INTO brandnew(name,email,password)  VALUES(?,?,?)"
    

//     connect.query(sql,[fullName,email,password],(err)=>{
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log('created')
//         }
//     })
//     res.send('success')
// }

const mongoConnect  = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB)
        console.log('connected')
    }
    catch(err){
        console.log(err)
    }
  
    
}
  






module.exports= {mongoConnect}