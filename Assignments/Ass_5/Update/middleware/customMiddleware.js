const customMiddleware =(req,res,next)=>{
    let verify = true;
    if(!verify){
        return res.send("User Not Verified ...xxx")
    }
    next();
};

module.exports=customMiddleware;
