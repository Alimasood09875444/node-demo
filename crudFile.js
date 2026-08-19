const http = require ("http")
const fs= require("fs")
const operation = process.argv[2];
if(operation=="write"){
  
 const name=process.argv[3]
  const content = process.argv[4]
  const fullname="files/"+name+".txt"
  fs.writeFileSync(fullname,content)
}
else if(operation=="read"){
  const name=process.argv[3]
  const fullname="files/"+name+".txt"
  const data = fs.readFileSync(fullname,"utf-8")
  console.log(data);
  
}


/* const fs = require("fs")
fs.writeFileSync("files/apple.txt","this is a fruit") */
/* fs.unlinkSync("files/banana.txt") */
/* fs.appendFileSync("files/apple.txt"," and this is good for health") */
/* const data = fs.readFileSync("files/apple.txt","utf-8")
console.log(data);
 */
const Port = 1600;
const server = http.createServer((req,res)=>{
  res.write("masood")
  res.end()
}).listen(Port,()=>{
console.log(`Server is running on http://localhost:${Port}`);

})