const fs =require("fs");
const http =require("http");

// const readStream = fs.createReadStream("./output.txt",{
//     highWaterMark:64*1024
// })

// readStream.toString("data",(chunk)=>{
//     console.log(chunk.toString);
// })





const writeStream = fs.createWriteStream("./info.txt",{

flags:"a" //for append

});
writeStream.write("/nThis is some txt");
writeStream.write("/nThis is some txt");
writeStream.write("/nThis is some txt");
writeStream.write("/nThis is some txt");


writeStream.end()

writeStream.on("finish",()=>{
    console.log("writing finish");
})