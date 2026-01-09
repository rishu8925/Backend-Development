// function fun(){
//     console.log("hello")
// }

const fun = ()=>{
    console.log("hello")
}

function save(cb){
    console.log("save functions")
    cb()
}

save (fun)

save(()=>{
    console.log("hello")
})



let arr={1, 2, 3, 4, 5};
function printArrayEle(element){
    console.log(element)
}
arr.forEach(x => {
    console.log(x)
})