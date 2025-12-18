const sql = require('mysql2')
let name='';
let connect =sql.createConnection({
    host:'localhost',
    user:'root',
    password:'Justdoitbaby@1',
    database:'sudip',
})

const n1 = (req,res)=>{

    connect.connect()
    console.log('connected to server')

}
  






module.exports= n1