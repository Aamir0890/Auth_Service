const UserService=require('../services/user-service')

const userService=new UserService();


const create=async(req,res)=>{
    try{
      const response=await userService.create({
        email:req.body.email,
        password:req.body.password
      });
    return res.status(201).json({
        success:true,
        message:"Successfully created a new User",
        data:response,
        err:{}
    })

    }catch(error){
        // console.log(error)
        return res.status(error.statusCode).json({
            message:error.message,
            data:{},
            success:false,
            err:error.explanation
        })
    }
}

const signIn=async(req,res)=>{
    try{ const response=await userService.signIn(req.body.email,req.body.password);
        res.status(200).json({
            token:response,
            success:true,
            message:"Successfully fetched the jwt token",
            err:{}
        })

    }catch(error){
        console.log(error);
        res.status(500).json({
            data:{},
            message:"Somethign went wrong",
            success:false,
            err:error
        })
    }
}

const isAuthenticated=async(req,res)=>{
    try{
        const token=req.headers['x-access-token'];
        const response=await userService.isAuthenticated(token);
         res.status(200).json({
            success:true,
            data:response,
            message:'user is authenticated and token is valid',
            err:{}
         })
    }catch(error){
        console.log(error);
        res.status(500).json({
            data:{},
            message:"Somethign went wrong",
            success:false,
            err:error
        })
    }
}
const isAdmin=async(req,res)=>{
    try{
      const response=await userService.isAdmin(req.body.userId)
      return res.status(200).json({
        message:"Successfuly fecthed weahter user is admin",
        data:response,
        err:{},
        success:true
      })
    }catch(error){
        res.status(500).json({
            data:{},
            message:"Somethign went wrong in controller",
            success:false,
            err:error
        })
    }
}

module.exports={
    create,signIn,isAuthenticated,isAdmin
}