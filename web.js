const http = require("http");
const fs = require("fs");
const Port = 2200
const server = http.createServer((req,res)=>{
  fs.readFile("html/index.html","utf-8",(err,data)=>{
if(err){
  res.writeHead(200,{"Content-type":"text/plain"})
  res.writable("Server are err")
  res.end()
  return
}
res.writeHead(500,{"Content-type":"text/html"})
res.write(data)
res.end()
  })
}).listen(Port,()=>{
  console.log(`Server is running on http://localhost:${Port}`);
  
})