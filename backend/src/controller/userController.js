const User = require("../model/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const signUpAPI = async(req,res)=>{
    const {name,email,password} = req.body;
   
    try {
        const user = await User.findOne({email});
        if(user){
            return res.status(401).send('Already Exists');
        };
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({name,email,password:hashedPassword});
        newUser.save();
        return res.status(200).send({message:'User Created Successfully',newUser})
    } catch (error) {
        res.status(500).send(error.message)
    }
};

const signInAPI = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        return res.status(401).send('User Not Exists');
    };
    try {
        const match =  bcrypt.compareSync(password,user.password);
        if(!match){
            return res.status(403).send('User Not Authorized');
        };
        
        const accessToken = jwt.sign({id:user._id,email:user.email,password:user.password},secretKey,{expiresIn:'25min'});
        return res.status(200).send({message:'Successfully LogIn',accessToken});
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {signUpAPI,signInAPI}