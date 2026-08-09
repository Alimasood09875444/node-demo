const http = require("http");
const Port = 3000
const server = http.createServer((req,res)=>{
  res.write("Masood is good Man")
  res.end("its end masood")
});

server.listen(Port,()=>{
  console.log(`server is running http://localhost:${Port}`);
  
})