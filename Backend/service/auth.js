const jwt = require('jsonwebtoken')
const secret = 'Sudip@07$isComing..#'


function setUser(user){
    return jwt.sign({
        _id:user.id,
        email:user.email

    },secret)
}

function getUser(token){
    return jwt.verify(token,secret)
}



module.exports={
    setUser,
    getUser
}