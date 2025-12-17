const sql = require('mysql2')
let name='';
let connect =sql.createConnection({
    host:'localhost',
    user:'root',
    password:'Justdoitbaby@1',
    database:'sudip',
    
    
    
   

   
})

const n1 = (req,res)=>{

    connect.connect( ()=>{
        const {username,password} = req.body;
        console.log('connected');
       connect.query(`insert into users values ( '${username}', '${password}');`,(err, res)=> {
            if (err){
                 console.log(err)
            }
              console.log(res);
          });
      
    })

}
  





//  const connectDb = async()=>{
//     try{
//         await mongoose.connect('mongodb+srv://soodipkarki07_db_user:V0ztFVeZ7zXWv9J4@cluster0.h4isbeo.mongodb.net/?appName=Cluster0')
//         console.log('Database Connection Success')

//     }
//     catch(err){
//         console.log(err)
//     }
    
    
// }

module.exports= n1