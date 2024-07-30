const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");

const validateToken= asyncHandler(async(req,res,next)=>{
    let token;
    let authHeader=req.headers.Authorization || req.headsers.authorization;
    if(authHeader && authHeader.startsWith("Bearer")){
        token=authHeader.split(" ")[1];
        jwt.verify(token,process.env.ACCESS_TOKEN_SECERET,(err,decoded)=>{
            if(err){
                res.status(401);
                throw new Error("User isn't authorized");
            }
            req.user=decoded.user;
            next();
        });
        if(!token){
            res.status(401);
            throw new Error("User isn't authorized or the token is missing");
        }
    }
});

module.exports=validateToken;