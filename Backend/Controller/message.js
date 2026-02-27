const mongoose= require('mongoose')

const messageSchema =new mongoose.Schema(
    {
        Fullname:{
            type:String,
            require:true
        },
        email:{
            type:String,
            require:true,
        },
        message:{
            type:String,
            require:true
        },
        
    }

   
    
)

const Message = mongoose.model('message',messageSchema)

module.exports=Message;