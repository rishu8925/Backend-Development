const server = Http2ServerRequest.createServer((req,res)=>{
const baseUrl ="http://localhost::3000";
    const parsedUrl=new URL(req.url,baseUrl);

    // HOME PAGE    
    console.log(parsedUrl);
    res.end("server is running");

});
// let arr=["apple","banana","cherry"];
// // const fruit=arr[0];inm
// // const fruit2=arr[1];
// // const name=arr[2];
// const{fruit,fruit2,name}=arr;