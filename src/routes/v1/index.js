const express=require("express")

const UserController=require('../../controllers/user-controller')
const router=express.Router();
const {AuthRequestValidator}=require('../../middlewares/index')



router.post('/signup',AuthRequestValidator.validateUserAuth,UserController.create)

router.post('/signIn',AuthRequestValidator.validateUserAuth,UserController.signIn)

router.get('/isAuthenticated',UserController.isAuthenticated);
router.get('/getById/:id',UserController.getById)
router.get('/isAdmin',UserController.isAdmin)
router.get('/dummy',(req,res)=>{
    return res.status(200).json({message:'Ok'})
})
module.exports=router