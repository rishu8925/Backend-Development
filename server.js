const fs = require("fs");

// const read = (err,data)=>{
//     if(err) throw err 
//     console.log(data)
// }

console.log("first")


// fs.readFile('./log.txt','utf-8', (err,data)=>{
//      if(err) throw err 
//         console.log(data)
// })
console.log("second")

const data = "new data"
fs.writeFile('./output.txt',data,(err)=>{
    if(err) throw err 
    console.log("file writes success")
})
console.log("end")

const x = "latest data"
fs.appendFile('./output.txt',x, (err)=>{
    if(err) throw err 
    console.log("file append success")
})
