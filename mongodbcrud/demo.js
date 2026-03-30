import express from 'express';
import cookieParser from 'cookie-parser';
import JsonWebTokenError from 'jsonwebtoken';

const app=express();
app.use(cookieParser('my-super-secret-key'));

// app.get('/set-cookie',(req,res)=>{
//     let user={
//         name:"rohan",
//         email:"rohan@example.com"

//     };
//     const token =JsonWebTokenError.sign(user,"qweertyuiop",{expiresIn:'1h'});
//     console.log(token);    

//     res.cookie('token',token,{httpOnly:true});
//     res.send('cookie has been set');

// });
app.get('/login',(req,res)=>{
    let user={
        name:"raj",
        email:"raj@example.com"

    };
    const token =JsonWebTokenError.sign(user,"qweertyuiop",{expiresIn:'1h'});
    console.log(token);    

    res.cookie('token',token,{httpOnly:true});
    res.send('cookie has been set');

});

const authMiddleware=(req,res,next)=>{
    if(!req.cookies.token   ){
        res.send("Invalid user");
        return;
    }

    
    const token=req.cookies.token;
    const decode=JsonWebTokenError.verify(token,"qweertyuiop");
    req.user=decode;
    console.log(decode);
    next();

}

app.get("/dashboard",(req,res)=>{
    const user = req.user
    console.log(user)
    res.send(`welcome to your dashboard , ${user.name}`);
});

app.get('/get-cookie',authMiddleware,(req,res)=>{
    // if(!req.cookies.name){
    //     return res.send("Invalid user");
    // }
    // const name=req.cookies.name;
    // res.send('Cookie value: '+name);
    // const token=req.cookies.token;   inko middleware m daal diya , ab isee baar baar nhi likhna pdega 
    // const decode=JsonWebTokenError.verify(token,"qweertyuiop");
    const user = req.user
    res.send(`cookie value: ${user.name}`);
});

app.get('/profile',authMiddleware,(req,res)=>{
    // if(!req.cookies.name){
    //     return res.send("Invalid user");
    // }

    // const token=req.cookies.token;
    // const decode=JsonWebTokenError.verify(token,"qweertyuiop");
    // /console.log(decode);
    const user = req.user
    res.send(`Welcome to your profile, ${user.name}`);
});

//route for logout

app.get('/logout',authMiddleware,(req,res)=>{
    res.clearCookie('token');
    res.send('You have been logged out');
});

app.listen(3000,()=>console.log('server is running on port 3000'));