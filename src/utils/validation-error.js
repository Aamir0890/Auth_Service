const AppError=require('./error-handler')
const {StatusCodes}=require('http-status-codes')
class ValidationError extends AppError{
    constructor(error){
        let errorName=error.name;
        let errorMessage=error.message;
        let explanation=[];
        error.errors.forEach((err) => {
                    explanation.push(err.message);
            
        });
        super(
            errorName,
            errorMessage,
            explanation,
         StatusCodes.BAD_REQUEST
        )
    }
}
module.exports=ValidationError