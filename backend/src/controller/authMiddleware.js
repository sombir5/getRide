
const authMiddleware = async(req,res,next)=>{
    const {token} = req.headers.accessToken;
    if(token){
        let {id,email,password} = jwt.decode(token);
        console.log(id,email,password)
    }
}