const User = require('./User')


const createUseer = async (req,res)=>{
    try{
        console.log('u enter')
        const {fullName,email,password} = req.body;
        await User.create({
            fullName,
            email,
            password
        })
        console.log("user created")

    }
    catch(err){
        console.log(err)
    }
   



}

module.exports= {createUseer}