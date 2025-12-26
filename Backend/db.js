const sql = require('mysql2')
const dontenv = require('dotenv').config();
let name='';
let connect =sql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    
})
const  connection =()=>{
    connect.connect(()=>{
        console.log('connected to database')
    })

}


let query = "CREATE TABLE IF NOT EXISTS newclient (name VARCHAR(255),email VARCHAR(255), password VARCHAR(255))";

const createUser= ()=>{
     connect.query(query,(err,res)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(res)
        }
     })
}



const createClient =(req,res)=>{
    createUser();
    const {fullName,email,password}= req.body;
    
    let sql = "INSERT INTO newclient(name,email,password) VALUES(?,?,?)"

    connect.query(sql,[fullName,email,password],(err,res)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log('created')
        }
    })
    res.send('success')
}

  






module.exports= {createUser,connection, createClient}