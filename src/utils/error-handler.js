const {StatusCodes}=require('http-status-codes')

class AppErrors extends Error{
    constructor (
        name='App Error',
        message="Something went worng",
        explanation="Something went worng",
        statusCode=StatusCodes.INTERNAL_SERVER_ERROR
        ){
            super()
        this.message=message,
        this.explanation=explanation,
        this.name=name,
        this.statusCode=statusCode

    }

}

module.exports=AppErrors