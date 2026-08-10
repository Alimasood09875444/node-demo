const http = require("http");
const Port = 3000
const server = http.createServer((req,res)=>{
  res.write("<h1>Masood</h1>")
  res.end("its the not end masood hi")
});

server.listen(Port,()=>{
  console.log(`server is running http://localhost:${Port}`);
  
})