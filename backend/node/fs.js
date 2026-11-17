const fs = require ('fs')
fs.writeFile('../backend/minnu.txt',"hello suma have a nice day",(err)=>{
    console.log(err)
    
})

fs.appendFile('../backend/minnu.txt',"thank you for your support",(err)=>{
    console.log(err)
})
fs.readFile("minnu.txt",'utf-8',(err,data)=>{
    console.log(err,data)

})
// fs.rename("minnu.txt","manvi.txt",(err)=>{
//     console.log(err)
// })