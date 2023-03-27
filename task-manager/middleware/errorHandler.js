const {CustomAPIError} = require('../errors/customError')
const errorHandlerMiddware = (err,req,res,next) =>{

    if(err instanceof CustomAPIError){
   return  res.status(err.statusCode).json({msg:err.message})

    }
   return  res.status(500).json({msg:'Somthing went wrong, try again later'})
}


module.exports = errorHandlerMiddware