const express=require('express');
const app=express();
const {PORT} =require('./config/serverConfig')
const {User,Role}=require('./models/index');
const apiRoutes=require('./routes/index');
const bodyParser = require('body-parser');

const UserRepository=require('./repository/user-repository')
const UserService=require('./services/user-service')

const prepareAndStartServer=()=>{
      
     app.use(bodyParser.json());
     app.use(bodyParser.urlencoded({extended:true}));
const db=require('./models/index')
    app.use('/api',apiRoutes);

    app.listen(PORT,async()=>{
        console.log(`Server started at ${PORT}`);
        if(process.env.DB_SYNC){
  db.sequelize.sync({alter:true})
        }
//        
    //    const userRepository=new UserRepository();
    //    const res=await userRepository.getPassword('post09@gmail.com');
    // //    console.log(res);
    //    const userService=new UserService();
    //    const response=userService.checkPassowrd('098765',res.password)
    //      console.log(response)
    
    })
}

prepareAndStartServer();
